import { useEffect, useState } from 'react';

export default function History() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    fetch('/api/history')
      .then((res) => res.json())
      .then(setSummaries);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">📜 Summary History</h1>
      {summaries.map((s, i) => (
        <div key={i} className="mb-4 p-4 border rounded">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(s.createdAt).toLocaleString()}
          </p>
          <p className="mb-2"><strong>Original:</strong> {s.originalText.slice(0, 150)}...</p>
          <p><strong>Summary:</strong> {s.summary}</p>
        </div>
      ))}
    </div>
  );
}
