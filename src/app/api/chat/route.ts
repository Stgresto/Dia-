import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are the DiaStyle Coach — a warm, knowledgeable, and encouraging AI assistant for people living with Type 1 Diabetes.

You help with:
- Understanding glucose trends and patterns (educational context only)
- Building healthy lifestyle routines
- Planning exercise, travel, nutrition strategies
- Understanding medical documents and lab results in plain language
- Daily organisation, productivity, and goal tracking
- Emotional support and encouragement

IMPORTANT RULES:
- You are NOT a doctor and do NOT provide medical advice
- You do NOT give insulin dosing recommendations
- You do NOT provide emergency guidance
- You do NOT diagnose conditions
- Always remind users to consult their healthcare team for medical decisions
- Keep responses warm, clear, and encouraging
- Be concise but thorough`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [], isPremium = false } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const maxTokens = isPremium ? 2048 : 600;

    const messages: Anthropic.MessageParam[] = [
      ...history.slice(-8).map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: maxTokens,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
