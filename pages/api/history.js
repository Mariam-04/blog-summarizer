import { summaries } from '../../lib/staticDB';

export default function handler(req, res) {
  res.status(200).json(summaries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
}
