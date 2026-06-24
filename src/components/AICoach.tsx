"use client";

import { useState, useRef, useEffect } from "react";
import AnimateIn from "./ui/AnimateIn";

const features = [
  "View glucose trends and patterns",
  "Connect Dexcom glucose data",
  "Receive personalized insights",
  "Build healthier routines",
  "Create daily schedules",
  "Improve productivity",
  "Plan exercise and recovery",
  "Prepare for travel",
  "Upload and understand medical reports",
  "Access personalized educational resources",
  "Track goals and habits",
];

const glucosePoints = [72, 85, 98, 110, 105, 96, 88, 94, 102, 108, 105, 98, 92, 88, 85, 90, 96, 100, 98, 95];

function GlucoseChart() {
  const w = 300;
  const h = 80;
  const min = 70;
  const max = 120;
  const pts = glucosePoints.map((v, i) => {
    const x = (i / (glucosePoints.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  });
  const polyline = pts.join(" ");
  const area = `0,${h} ${polyline} ${w},${h}`;

  return (
    <div className="bg-ivory rounded-2xl p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-body font-medium text-muted tracking-wide uppercase">Glucose — Last 2 Hours</span>
        <span className="text-sm font-body font-semibold text-forest">5.4 mmol/L</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18392B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#18392B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#gGrad)" />
        <polyline points={polyline} fill="none" stroke="#18392B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <div className="flex items-center gap-2 mt-2">
        <span className="inline-flex items-center gap-1.5 bg-forest/10 text-forest text-xs font-medium px-3 py-1 rounded-full">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 9V1M5 1L2 4M5 1L8 4" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Stable — Trending slightly up
        </span>
      </div>
    </div>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function CoachChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am your DiaStyle Coach. I am here to help you with lifestyle guidance, glucose patterns, and everyday T1D life. What would you like to explore today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message || "I could not process that. Please try again." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Connection issue. Please try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sand">
      <div className="bg-forest px-5 py-4 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <span className="text-2xs font-body font-medium tracking-[0.35em] uppercase text-white/60 mx-auto">
          DiaStyle Coach
        </span>
      </div>

      <div className="p-5">
        <GlucoseChart />

        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-1">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="bg-sand text-brand-text text-sm font-light rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] leading-relaxed">
                  <p className="font-medium mb-1 text-forest text-xs tracking-wide uppercase">Your Coach</p>
                  {m.content}
                </div>
              )}
              {m.role === "user" && (
                <div className="bg-forest text-white text-sm font-light rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] leading-relaxed">
                  {m.content}
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-sand rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-5">
                  <span className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-forest/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex gap-2 items-center border border-sand rounded-full px-4 py-2.5 bg-ivory focus-within:border-forest/40 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask your coach anything..."
            className="flex-1 bg-transparent text-sm font-light text-brand-text placeholder:text-muted outline-none"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="bg-forest rounded-full w-8 h-8 flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity hover:bg-forest-light"
            aria-label="Send message"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AICoach() {
  return (
    <section id="coach" className="py-28 lg:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <AnimateIn delay={0}>
              <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
                AI Coach
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-brand-text leading-[1.1] mb-6">
                Your Personal<br />
                <em className="font-normal text-forest">Diabetes Coach</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-body font-light text-muted text-lg leading-relaxed mb-8">
                Managing diabetes means making hundreds of decisions every day.
                DiaStyle AI helps simplify the process. Connect your glucose data
                and receive personalized insights designed to help you build better
                habits, healthier routines, and more confidence in your daily life.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm font-light text-brand-text/80">
                    <svg className="w-4 h-4 text-forest mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke="#18392B" strokeOpacity="0.2"/>
                      <path d="M5 8.5l2 2 4-4" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <div className="bg-sand rounded-2xl p-4 mb-8 border-l-2 border-gold">
                <p className="text-xs font-body font-light text-muted leading-relaxed">
                  <strong className="font-medium text-brand-text">Important:</strong> DiaStyle AI is not a doctor and does not provide medical advice, diagnoses, treatment recommendations, insulin dosing instructions, or emergency guidance. It is designed for education, lifestyle support, and daily organisation.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.45}>
              <a
                href="#pricing"
                className="inline-flex items-center bg-forest text-white font-body font-medium text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-forest-light transition-colors duration-200"
              >
                Try AI Coach Free
              </a>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2} direction="left">
            <CoachChat />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
