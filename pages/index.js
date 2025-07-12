import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);

    const res = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);

    await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalText: text, summary: data.summary }),
    });
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
    <h1 className="text-4xl font-bold text-center mb-6"> Blog Summarizer</h1>

    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Paste your blog content here..."
      className="w-full h-40 p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      onClick={handleSummarize}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition"
      disabled={loading || !text}
    >
      {loading ? 'Summarizing...' : 'Summarize'}
    </button>

    {summary && (
      <div className="mt-6 p-4 bg-gray-50 border rounded">
        <h2 className="text-lg font-semibold mb-2"> Summary:</h2>
        <p>{summary}</p>
      </div>
    )}
  </div>
</div>

  );
}
