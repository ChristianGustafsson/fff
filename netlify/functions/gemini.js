import { GoogleGenAI } from '@google/genai';

export default async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: req.body.prompt || 'Say hello from Gemini!'
    });
    res.status(200).json({ result: response.text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
