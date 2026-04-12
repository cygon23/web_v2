import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  BrainCircuit,
  Sparkles,
  AlertCircle,
  Loader2,
  User,
  ChevronDown,
  RotateCcw,
  Zap,
} from "lucide-react";

// ─── Brand Colors — Career Na Mimi Pink hsl(327,73%,56%) ─────────────────────
// Primary:      hsl(327, 73%, 56%)  →  #d4346a
// Primary-dark: hsl(327, 73%, 38%)  →  #901048  (dark bg shade)
// Primary-mid:  hsl(327, 73%, 48%)  →  #ba2960
// Primary-glow: hsl(327, 73%, 70%)  →  #e87aab

// ─── Edge Function URL ────────────────────────────────────────────────────────
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://lklswfbrfdmbcpwdgwcz.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const EDGE_FN_URL = `${SUPABASE_URL}/functions/v1/chatbot`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  status?: "sending" | "delivered" | "error";
}

// ─── Quick Prompts ────────────────────────────────────────────────────────────
const QUICK_PROMPTS = [
  { icon: "📄", label: "Resume Review",   text: "How can I make my resume stand out to recruiters in 2025?" },
  { icon: "🎯", label: "Interview Prep",  text: "Walk me through the best strategies to ace a job interview." },
  { icon: "💰", label: "Salary Strategy", text: "How do I negotiate my salary without sounding greedy?" },
  { icon: "🚀", label: "Career Switch",   text: "I want to transition into tech from a non-tech background. Where do I start?" },
  { icon: "🤝", label: "Networking",      text: "How can I build a professional network from scratch in Tanzania?" },
  { icon: "📈", label: "Career Growth",   text: "What skills should I develop to get promoted faster?" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatTime = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(date);

/** Remove all markdown symbols the LLM might still sneak in */
const stripMarkdown = (text: string): string =>
  text
    // Remove bold/italic: **text**, *text*, __text__, _text_
    .replace(/\*\*\*(.+?)\*\*\*/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/___(.+?)___/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    // Remove ATX headings: # ## ### etc
    .replace(/^#{1,6}\s+/gm, "")
    // Remove inline code and code blocks
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```/g, "").trim())
    .replace(/`([^`]+)`/g, "$1")
    // Remove leading bullet hyphens/asterisks on list items
    .replace(/^[\*\-]\s+/gm, "")
    // Remove blockquotes
    .replace(/^>\s+/gm, "")
    // Collapse 3+ newlines to 2
    .replace(/\n{3,}/g, "\n\n")
    .trim();

/** Convert plain newlines to <br> for HTML rendering */
const formatText = (text: string): string =>
  stripMarkdown(text)
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");

const SESSION_ID = `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;

// Brand color constants
const BRAND         = "hsl(327,73%,56%)";
const BRAND_DARK    = "hsl(327,73%,32%)";
const BRAND_DARKER  = "hsl(327,73%,18%)";
const BRAND_MID     = "hsl(327,73%,25%)";
const BRAND_GLOW    = "hsla(327,73%,56%,0.45)";
const BRAND_LIGHT   = "hsl(327,73%,70%)";

// ─── Typing Indicator ─────────────────────────────────────────────────────────
const TypingIndicator = () => (
  <div className="flex items-end gap-2.5">
    <div
      className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
        boxShadow: `0 4px 12px ${BRAND_GLOW}`,
      }}
    >
      <BrainCircuit size={14} className="text-white" />
    </div>
    <div
      className="rounded-2xl rounded-bl-sm px-4 py-3.5"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-1.5">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: BRAND_LIGHT }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay }}
          />
        ))}
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const ChatBot = () => {
  const [isOpen, setIsOpen]             = useState(false);
  const [messages, setMessages]         = useState<Message[]>([
    {
      id: "init",
      text: "Hello! I'm your Career Intelligence from Career Na Mimi.\n\nI'm here to help you navigate every stage of your professional journey — from crafting the perfect CV and acing interviews, to planning career transitions and negotiating salaries.\n\nWhat would you like to work on today?",
      isBot: true,
      timestamp: new Date(),
      status: "delivered",
    },
  ]);
  const [inputValue, setInputValue]       = useState("");
  const [isTyping, setIsTyping]           = useState(false);
  const [hasError, setHasError]           = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const [isMinimized, setIsMinimized]     = useState(false);
  const [unreadCount, setUnreadCount]     = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const buildHistory = () =>
    messages.slice(-8).map((m) => ({
      role: m.isBot ? ("assistant" as const) : ("user" as const),
      content: m.text,
    }));

  const sendMessage = async (overrideText?: string) => {
    const text = (overrideText ?? inputValue).trim();
    if (!text || isTyping) return;

    setShowQuickPrompts(false);

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      text,
      isBot: false,
      timestamp: new Date(),
      status: "sending",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setHasError(false);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: "delivered" } : m))
      );
    }, 400);

    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          message: text,
          sessionId: SESSION_ID,
          conversationHistory: buildHistory(),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(`${res.status}: ${errData?.error ?? "unknown"}`);
      }

      const data = await res.json();
      if (!data?.success || !data?.response)
        throw new Error("Invalid response from edge function");

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        text: data.response,
        isBot: true,
        timestamp: new Date(),
        status: "delivered",
      };
      setMessages((prev) => [...prev, botMsg]);
      if (!isOpen) setUnreadCount((c) => c + 1);
    } catch (err) {
      console.error("ChatBot error:", err);
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          text: "I'm having trouble connecting right now. Please try again in a moment — your career questions deserve the best answers!",
          isBot: true,
          timestamp: new Date(),
          status: "error",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: `init-${Date.now()}`,
      text: "Chat cleared! I'm ready to help with your career questions. What would you like to explore?",
      isBot: true,
      timestamp: new Date(),
      status: "delivered",
    }]);
    setShowQuickPrompts(true);
    setHasError(false);
  };

  const toggleOpen = () => {
    setIsOpen((v) => !v);
    setIsMinimized(false);
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="chatbot-root md:block group-data-[menu-open=true]:hidden">
      <style>{`
        body[data-menu-open="true"] .chatbot-root {
          display: none !important;
        }
      `}</style>
      {/* ── Floating Trigger ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="trigger"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-6 right-6 z-[100]"
          >
            {/* Pulsing brand glow */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0, 0.55] }}
              transition={{ duration: 2.6, repeat: Infinity }}
              style={{
                background: `radial-gradient(circle, ${BRAND_GLOW} 0%, transparent 70%)`,
              }}
            />

            <button
              onClick={toggleOpen}
              aria-label="Open Career AI"
              className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
                boxShadow: `0 8px 32px ${BRAND_GLOW}, 0 2px 8px rgba(0,0,0,0.3)`,
              }}
            >
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <BrainCircuit className="w-7 h-7 text-white drop-shadow" />
              </motion.div>

              {/* Unread badge */}
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white"
                >
                  {unreadCount}
                </motion.span>
              )}

              {/* Online dot */}
              <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
              </span>
            </button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none shadow-lg"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
            >
              Ask Career AI ✨
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat Window ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, y: 60, scale: 0.88, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[100] w-[calc(100vw-32px)] sm:w-[420px] rounded-3xl overflow-hidden flex flex-col"
            style={{
              height: isMinimized ? "auto" : "620px",
              maxHeight: "88vh",
              // Dark background tinted with brand pink undertone
              background: `linear-gradient(150deg, hsl(327,40%,10%) 0%, hsl(327,35%,8%) 50%, hsl(310,30%,7%) 100%)`,
              boxShadow: `0 25px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 80px ${BRAND_GLOW}`,
            }}
          >
            {/* ── Header ──────────────────────────────────────────────────── */}
            <div
              className="relative shrink-0 px-5 py-4 flex items-center justify-between"
              style={{
                background: `linear-gradient(135deg, hsla(327,73%,40%,0.35) 0%, hsla(327,73%,30%,0.2) 100%)`,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Brand shimmer line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${BRAND}, ${BRAND_LIGHT}, transparent)`,
                }}
              />

              <div className="flex items-center gap-3">
                {/* Bot avatar */}
                <div className="relative">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
                      boxShadow: `0 4px 16px ${BRAND_GLOW}`,
                    }}
                  >
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                  {/* Online dot */}
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2"
                    style={{ borderColor: "hsl(327,40%,10%)" }}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm tracking-wide">
                    Career Intelligence
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"
                    />
                    <p
                      className="text-[11px] font-medium tracking-wider"
                      style={{ color: BRAND_LIGHT }}
                    >
                      Online · Career Advisor
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  title="Clear chat"
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  title="Minimize"
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isMinimized ? "rotate-180" : ""}`}
                  />
                </button>
                <button
                  onClick={toggleOpen}
                  title="Close"
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/20 transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* ── Collapsible body ─────────────────────────────────────────── */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  {/* Messages */}
                  <div
                    className="flex-1 overflow-y-auto px-4 py-5 space-y-5 relative"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: `${BRAND_DARK} transparent`,
                    }}
                  >
                    {/* Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                      <BrainCircuit className="w-48 h-48 text-white" />
                    </div>

                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 14, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`flex items-end gap-2.5 ${
                          msg.isBot ? "justify-start" : "justify-end"
                        }`}
                      >
                        {/* Bot avatar */}
                        {msg.isBot && (
                          <div
                            className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                            style={{
                              background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
                              boxShadow: `0 4px 12px ${BRAND_GLOW}`,
                            }}
                          >
                            <BrainCircuit size={14} className="text-white" />
                          </div>
                        )}

                        <div
                          className={`flex flex-col max-w-[82%] ${
                            msg.isBot ? "items-start" : "items-end"
                          }`}
                        >
                          <div
                            className={`rounded-2xl px-4 py-3 shadow-md ${
                              msg.isBot ? "rounded-bl-sm" : "rounded-br-sm"
                            }`}
                            style={
                              msg.isBot
                                ? {
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(12px)",
                                  }
                                : {
                                    background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
                                    boxShadow: `0 4px 16px ${BRAND_GLOW}`,
                                  }
                            }
                          >
                            <p
                              className="text-[13px] sm:text-[13.5px] leading-relaxed text-white/90 tracking-[0.01em]"
                              dangerouslySetInnerHTML={{
                                __html: formatText(msg.text),
                              }}
                            />
                          </div>

                          {/* Timestamp + status */}
                          <div className="flex items-center gap-1.5 mt-1.5 px-1">
                            {msg.isBot && (
                              <Sparkles
                                className="w-2.5 h-2.5"
                                style={{ color: BRAND_DARK }}
                              />
                            )}
                            <span className="text-[10px] text-white/30 font-medium">
                              {formatTime(msg.timestamp)}
                            </span>
                            {!msg.isBot && msg.status === "sending" && (
                              <Loader2 className="w-2.5 h-2.5 text-white/30 animate-spin" />
                            )}
                            {!msg.isBot && msg.status === "delivered" && (
                              <span
                                className="text-[10px]"
                                style={{ color: BRAND_LIGHT }}
                              >
                                ✓✓
                              </span>
                            )}
                          </div>
                        </div>

                        {/* User avatar */}
                        {!msg.isBot && (
                          <div
                            className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                            style={{
                              background: "rgba(255,255,255,0.09)",
                              border: "1px solid rgba(255,255,255,0.15)",
                            }}
                          >
                            <User size={14} className="text-white/70" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* ── Quick Prompts ──────────────────────────────────────── */}
                  <AnimatePresence>
                    {showQuickPrompts && !isTyping && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-2 overflow-hidden"
                      >
                        <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-2">
                          Quick Topics
                        </p>
                        <div
                          className="flex gap-2 overflow-x-auto pb-1"
                          style={{ scrollbarWidth: "none" }}
                        >
                          {QUICK_PROMPTS.map((qp) => (
                            <button
                              key={qp.label}
                              onClick={() => sendMessage(qp.text)}
                              className="flex-shrink-0 flex items-center gap-1.5 text-[11px] font-semibold px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap"
                              style={{
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = `hsla(327,73%,40%,0.28)`;
                                e.currentTarget.style.borderColor = `hsla(327,73%,56%,0.55)`;
                                e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                              }}
                            >
                              <span>{qp.icon}</span>
                              <span>{qp.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ── Error banner ───────────────────────────────────────── */}
                  <AnimatePresence>
                    {hasError && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mx-4 mb-2 flex items-center gap-2 bg-red-900/30 border border-red-500/30 rounded-xl px-3 py-2 text-red-400 text-xs"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Connection issue — retry or check your network.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ── Input ─────────────────────────────────────────────── */}
                  <div
                    className="px-4 pb-4 pt-3 shrink-0"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-end gap-2.5">
                      <div
                        className="flex-1"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "16px",
                        }}
                      >
                        <textarea
                          ref={inputRef}
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Ask about careers, interviews, CVs…"
                          disabled={isTyping}
                          rows={1}
                          className="w-full resize-none bg-transparent text-white/90 text-[13px] px-4 py-3 focus:outline-none placeholder-white/25 leading-relaxed min-h-[44px] max-h-28"
                          style={{ scrollbarWidth: "none" }}
                          onInput={(e) => {
                            const t = e.currentTarget;
                            t.style.height = "auto";
                            t.style.height = Math.min(t.scrollHeight, 112) + "px";
                          }}
                        />
                      </div>

                      {/* Send button */}
                      <motion.button
                        onClick={() => sendMessage()}
                        disabled={!inputValue.trim() || isTyping}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-[46px] h-[46px] rounded-2xl flex-shrink-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={
                          inputValue.trim() && !isTyping
                            ? {
                                background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
                                boxShadow: `0 4px 16px ${BRAND_GLOW}`,
                              }
                            : {
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }
                        }
                      >
                        {isTyping ? (
                          <Loader2 size={18} className="animate-spin text-white/60" />
                        ) : (
                          <Send
                            size={18}
                            className={`${inputValue.trim() ? "text-white" : "text-white/30"} ml-0.5`}
                          />
                        )}
                      </motion.button>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-center gap-1.5 mt-2.5">
                      <Zap className="w-3 h-3" style={{ color: BRAND }} />
                      <span className="text-[10px] text-white/20 tracking-widest uppercase font-bold">
                        Career Na Mimi · Secured Edge Function
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
