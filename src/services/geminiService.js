import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
  model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
} else {
  console.warn("Gemini API Key is missing! AI features will be disabled.");
}

const geminiService = {
  /**
   * @param {string} prompt 
   * @returns {Promise<string>} 
   */
  generateText: async (prompt) => {
    if (!model) {
      console.warn("Gemini model not initialized. Check API Key.");
      return "AI Service is currently unavailable.";
    }

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I couldn't process that request right now.";
    }
  },

  /**
   * @returns {boolean} 
   */
  isConfigured: () => !!API_KEY,
};

export default geminiService;
