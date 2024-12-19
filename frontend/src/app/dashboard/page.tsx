"use client";

import React, { useState } from "react";

export default function Dashboard() {
    const [text, setText] = useState<string>("");
    const [summary, setSummary] = useState<string>("");

    const handleSummarize = async () => {
        const response = await fetch("/api/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        setSummary(data.summary);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-800 py-4 text-center text-blue-400 text-2xl">
                Dashboard
            </header>
            <main className="container mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold mb-6 text-blue-400">Summarize Notes</h1>
                <textarea
                    className="w-full p-4 rounded-lg bg-gray-700 text-gray-200"
                    rows={5}
                    placeholder="Enter text to summarize..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button
                    className="mt-4 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={handleSummarize}
                >
                    Summarize
                </button>
                {summary && (
                    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                        <h2 className="text-lg font-bold text-blue-400">Summary</h2>
                        <p className="text-gray-300">{summary}</p>
                    </div>
                )}
            </main>
        </div>
    );
}
