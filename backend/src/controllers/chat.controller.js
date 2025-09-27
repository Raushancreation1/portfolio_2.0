
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize providers lazily based on available keys
const GEMINI_KEY = process.env.GEMINI_API_KEY || '';

const geminiClient = (() => {
  try {
    if (!GEMINI_KEY) return null;
    return new GoogleGenerativeAI(GEMINI_KEY);
  } catch {
    return null;
  }
})();

export const chat = async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'message is required' });
    }

    // Prefer Gemini if available, else OpenAI, else echo
    if (geminiClient) {
      const model = geminiClient.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `You are a helpful assistant for a personal portfolio website. Answer briefly and helpfully.\n\nUser: ${message}`;
      const result = await model.generateContent(prompt);
      const reply = result?.response?.text()?.trim() || 'Sorry, I could not generate a response.';
      return res.json({ success: true, reply });
    }

    if (openaiClient) {
      const completion = await openaiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for a personal portfolio website.' },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 200,
      });
      const reply = completion.choices?.[0]?.message?.content?.trim() || 'Sorry, I could not generate a response.';
      return res.json({ success: true, reply });
    }

    // Fallback when no provider configured
    return res.json({ success: true, reply: `Echo: ${message}` });
  } catch (err) {
    console.error('Chat error:', err);
    return res.status(500).json({ success: false, error: 'Chat service error' });
  }
};
