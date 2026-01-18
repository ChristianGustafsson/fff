import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_CLOUD_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: 'Say hello from Gemini!'
    });
    console.log('Gemini response:', response.text);
  } catch (err) {
    console.error('Error running Gemini:', err);
  }
}

main();
