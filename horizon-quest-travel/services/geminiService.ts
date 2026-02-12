
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelAdvice = async (history: ChatMessage[], userInput: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "Quest", an expert travel advisor for Horizon Quest Travel. 
        Your goal is to help users find the perfect vacation. 
        Be professional, inspiring, and helpful. 
        Suggest destinations based on the user's preferences (adventure, budget, food, culture, etc.).
        Keep responses concise and engaging. 
        Use markdown for formatting. 
        If asked about specific tours, mention that Horizon Quest offers curated experiences in Tanzania, Japan, Italy, Iceland, Patagonia, and Greece.`,
      },
    });

    // Send history as previous context if needed, but for simplicity we'll just send the current message
    // Note: chat.sendMessage takes a string message.
    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my travel database right now. How else can I help you today?";
  }
};
