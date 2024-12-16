"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

interface MessageResponse {
    message: string;
}

interface SummaryResponse {
    summary: string;
}

function TextArea({ text, setText }: { text: string; setText: (value: string) => void }) {
    return (
        <textarea
            className="w-full p-4 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 outline-none shadow-md transition-transform transform hover:scale-105"
            rows={5}
            placeholder="Enter text to summarize..."
            value={text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        ></textarea>
    );
}

function SummaryDisplay({ summary }: { summary: string }) {
    return (
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-extrabold text-teal-300 mb-3">Summary</h2>
            <p className="text-gray-300 leading-relaxed">{summary}</p>
        </div>
    );
}

export default function App() {
    const [message, setMessage] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:5000"}/api/message`
                );
                const data: MessageResponse = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMessage();
    }, []);

    const handleSummarize = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:5000"}/api/summarize`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text }),
                }
            );
            const data: SummaryResponse = await response.json();
            setSummary(data.summary || "Error generating summary.");
        } catch (error) {
            console.error("Error:", error);
            setSummary("Error connecting to backend.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <header className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-700 shadow-md">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-extrabold text-center text-teal-300 tracking-wide">
                        AI Study Buddy
                    </h1>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <div className="container max-w-3xl p-8 bg-gray-800 rounded-lg shadow-xl">
                    <p className="text-center mb-6 text-gray-400 text-lg">{message}</p>
                    <TextArea text={text} setText={setText} />
                    <button
                        onClick={handleSummarize}
                        className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-md transform hover:scale-105"
                        disabled={loading}
                    >
                        {loading ? "Summarizing..." : "Summarize"}
                    </button>
                    {summary && <SummaryDisplay summary={summary} />}
                </div>
            </main>

            <footer className="w-full py-6 bg-gray-800 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} <span className="text-teal-300">AI Study Buddy</span>. All rights reserved.</p>
            </footer>
        </div>
    );
}
