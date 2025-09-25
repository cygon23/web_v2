import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple .env loader
try {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    for (const line of envContent.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = val;
    }
  }
} catch {
  console.log("No .env file found, using environment variables");
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Configuration
const PDF_FOLDER = path.join(__dirname, "knowledge-pdfs");
const CHUNK_SIZE = 1000;

// Sleep helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Create embedding using Ollama
 */
async function createEmbedding(text) {
  try {
    const response = await fetch("http://localhost:11434/api/embeddings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "nomic-embed-text",
        prompt: text,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Ollama error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.embedding) {
      throw new Error("Invalid embedding response from Ollama");
    }

    return data.embedding;
  } catch (error) {
    console.error("Embedding error:", error.message);
    throw error;
  }
}

/**
 * Chunk text into smaller pieces
 */
function chunkText(text, maxLength = CHUNK_SIZE) {
  const chunks = [];
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);

  let currentChunk = "";

  for (const paragraph of paragraphs) {
    const cleanParagraph = paragraph.replace(/\s+/g, " ").trim();

    if ((currentChunk + " " + cleanParagraph).length <= maxLength) {
      currentChunk += (currentChunk ? "\n\n" : "") + cleanParagraph;
    } else {
      if (currentChunk) chunks.push(currentChunk);

      if (cleanParagraph.length > maxLength) {
        const sentences = cleanParagraph
          .split(/[.!?]+/)
          .filter((s) => s.trim().length > 0);
        let sentenceChunk = "";

        for (const sentence of sentences) {
          const trimmedSentence = sentence.trim();
          if ((sentenceChunk + " " + trimmedSentence).length <= maxLength) {
            sentenceChunk += (sentenceChunk ? " " : "") + trimmedSentence + ".";
          } else {
            if (sentenceChunk) chunks.push(sentenceChunk);
            sentenceChunk = trimmedSentence + ".";
          }
        }
        if (sentenceChunk) chunks.push(sentenceChunk);
        currentChunk = "";
      } else {
        currentChunk = cleanParagraph;
      }
    }
  }

  if (currentChunk) chunks.push(currentChunk);

  return chunks.filter((chunk) => chunk.length > 50);
}

/**
 * Extract text from PDF
 */
async function extractTextFromPDF(filePath) {
  try {
    //console.log(`Extracting text from: ${path.basename(filePath)}`);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    let text = data.text
      .replace(/\f/g, "\n\n")
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+/g, " ")
      .trim();

    console.log(`✅ Extracted ${text.length} characters from PDF`);

    return { text, pageCount: data.numpages, info: data.info };
  } catch (error) {
    console.error(` Error extracting text from ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Process all PDFs in folder
 */
async function processPDFs() {
  if (!fs.existsSync(PDF_FOLDER)) {
    //console.log(` Creating PDF folder: ${PDF_FOLDER}`);
    fs.mkdirSync(PDF_FOLDER, { recursive: true });
    return [];
  }

  const pdfFiles = fs
    .readdirSync(PDF_FOLDER)
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .map((file) => path.join(PDF_FOLDER, file));

  if (pdfFiles.length === 0) {
    console.log("❌ No PDF files found");
    return [];
  }

  const allChunks = [];

  for (const pdfFile of pdfFiles) {
    const extractedData = await extractTextFromPDF(pdfFile);
    if (!extractedData || extractedData.text.length < 100) continue;

    const chunks = chunkText(extractedData.text);
    console.log(
      `📝 Created ${chunks.length} chunks from ${path.basename(pdfFile)}`
    );

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      try {
        const embedding = await createEmbedding(chunk);
        const title =
          extractedData.info?.Title ||
          path.basename(pdfFile, ".pdf") ||
          "Career Guide";

        allChunks.push({
          content: chunk,
          embedding,
          source_url: `file://${path.basename(pdfFile)}`,
          title: `${title} (Part ${i + 1})`,
          metadata: {
            chunk_index: i,
            total_chunks: chunks.length,
            source_file: path.basename(pdfFile),
            page_count: extractedData.pageCount,
            extracted_at: new Date().toISOString(),
            word_count: chunk.split(" ").length,
            char_count: chunk.length,
          },
        });
      } catch (error) {
        console.error(` Failed to embed chunk ${i + 1}:`, error.message);
      }
      await sleep(200); // tiny pause between inserts
    }
  }

  return allChunks;
}

/**
 * Main ingestion
 */
async function ingestKnowledge() {
  console.log(" Starting PDF-based knowledge ingestion with Ollama...");

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase credentials are required");
  }

  const pdfChunks = await processPDFs();

  if (pdfChunks.length === 0) {
    console.log("❌ No content to insert");
    return;
  }

  console.log(` Inserting ${pdfChunks.length} chunks into database...`);

  let insertedCount = 0;
  for (let i = 0; i < pdfChunks.length; i++) {
    const chunk = pdfChunks[i];
    try {
      const { error } = await supabase.from("knowledge_chunks").insert([chunk]);
      if (error) {
        console.error(`❌ DB error for chunk ${i + 1}:`, error.message);
      } else {
        insertedCount++;
        console.log(` Inserted chunk ${i + 1}/${pdfChunks.length}`);
      }
    } catch (error) {
      console.error(`❌ Insert error for chunk ${i + 1}:`, error.message);
    }
  }

  console.log(` Done! Inserted ${insertedCount}/${pdfChunks.length} chunks`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  ingestKnowledge()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Knowledge ingestion failed:", error.message);
      process.exit(1);
    });
}

export { ingestKnowledge };
