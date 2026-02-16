
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getSalesStrategy(targetProfit: number, units: number): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como coach de vendas, forneça uma dica curta e motivadora (máximo 3 frases) para alguém que deseja vender ${units} unidades de progressiva orgânica profissional para alcançar um faturamento de R$ ${targetProfit}. Foque em como abordar salões ou clientes finais.`,
        config: {
          systemInstruction: "Você é um mentor de negócios focado em ajudar revendedores de produtos de beleza no Brasil. Seja motivador, prático e direto.",
          temperature: 0.7,
        },
      });
      return response.text || "Foque na qualidade do produto e no resultado imediato! Ofereça demonstrações para fechar mais vendas.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "O segredo do sucesso é a constância. Comece hoje mesmo oferecendo para sua rede de contatos!";
    }
  }
}

export const geminiService = new GeminiService();
