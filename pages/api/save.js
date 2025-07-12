import { summaries } from '../../lib/staticDB';

export default function handler(req, res) {
  const { originalText, summary } = req.body;

  if (!originalText || !summary) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const newEntry = {
    originalText,
    summary,
    createdAt: new Date(),
  };

  summaries.push(newEntry);
  res.status(200).json(newEntry);
}
