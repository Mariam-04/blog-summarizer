import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Summarize this:\n${text}` }],
    });

    const summary = completion.choices[0].message.content;
    res.status(200).json({ summary });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'OpenAI error' });
  }
}
