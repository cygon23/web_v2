import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  Maximize2,
  User,
  Bot,
} from "lucide-react";
import removeMd from "remove-markdown";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! I'm your CareerNamimi assistant. How can I help you with your career today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random()}`);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const conversationHistory = messages
        .slice(-4)
        .map((msg) => `${msg.isBot ? "AI" : "User"}: ${msg.text}`)
        .join("\n");

      const prompt = `You are CareerNamimi assistant, a professional and helpful career counselor AI. 
      You specialize in career advice, job search tips, resume writing, interview preparation, and professional development.

      Previous conversation context:
      ${conversationHistory}

      User: ${userMessage.text}`;

      const apiUrl = `https://CreepyTech-creepy-ai.hf.space/ai/logic?q=${encodeURIComponent(
        prompt
      )}&logic=chat`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data && data.result) {
        const cleanText = removeMd(data.result, { useImgAltText: false })
          .replace(/(\r\n|\r|\n){2,}/g, "\n\n")
          .trim();

        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: cleanText,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn’t connect right now. Please try again later.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <div className='fixed bottom-6 right-6 z-50'>
        <button
          onClick={() => setIsOpen(true)}
          className='bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105 group'
          aria-label='Open chat'>
          <MessageCircle size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className='fixed inset-x-0 bottom-0 sm:bottom-6 sm:right-6 z-50 flex justify-center sm:justify-end'>
      <div
        className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 flex flex-col ${
          isMinimized ? "w-72 h-14" : "w-full h-[80vh] sm:w-96 sm:h-[500px]"
        }`}>
        {/* Header */}
        <div className='bg-gradient-to-r from-pink-600 to-pink-700 text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between'>
          <div className='flex items-center gap-2 sm:gap-3'>
            <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
              <Bot size={16} />
            </div>
            <div>
              <h3 className='font-semibold text-xs sm:text-sm'>
                CareerNamimi Assistant
              </h3>
              <p className='text-[10px] sm:text-xs text-blue-100'>
                Online • Ready to help
              </p>
            </div>
          </div>
          <div className='flex items-center gap-1 sm:gap-2'>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className='text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors'>
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors'>
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Chat body */}
        {!isMinimized && (
          <>
            <div className='flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gray-50'>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 sm:gap-3 ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}>
                  {message.isBot && (
                    <div className='w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <Bot size={14} className='text-pink-600' />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] sm:max-w-xs ${
                      message.isBot ? "order-2" : "order-1"
                    }`}>
                    <div
                      className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                        message.isBot
                          ? "bg-white text-gray-800 border"
                          : "bg-pink-600 text-white"
                      }`}>
                      <p className='text-xs sm:text-sm leading-relaxed whitespace-pre-wrap'>
                        {message.text}
                      </p>
                    </div>
                    <p className='text-[10px] sm:text-xs text-gray-500 mt-1 px-1'>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className='w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1 order-3'>
                      <User size={14} className='text-gray-600' />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className='flex gap-2 sm:gap-3 justify-start'>
                  <div className='w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Bot size={14} className='text-pink-600' />
                  </div>
                  <div className='bg-white border rounded-2xl px-3 py-2'>
                    <div className='flex gap-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: "0.1s" }}></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className='p-3 sm:p-4 border-t bg-white rounded-b-lg'>
              <div className='flex gap-2'>
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Ask me about careers, job search, or professional development...'
                  className='flex-1 resize-none border rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-20'
                  rows='1'
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className='bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 text-white rounded-xl p-2 transition-colors flex-shrink-0'>
                  <Send size={16} />
                </button>
              </div>

              {/* Quick actions */}
              <div className='flex gap-2 mt-2 flex-wrap'>
                {[
                  "Resume tips",
                  "Interview prep",
                  "Career change",
                  "Job search",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInputValue(suggestion)}
                    className='text-[11px] sm:text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full transition-colors'>
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
