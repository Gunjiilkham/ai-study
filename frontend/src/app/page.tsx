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
            className="w-full p-4 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 outline-none"
            rows={5}
            placeholder="Enter text to summarize..."
            value={text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        ></textarea>
    );
}

function SummaryDisplay({ summary }: { summary: string }) {
    return (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-xl font-bold text-teal-300 mb-2">Summary</h2>
            <p className="text-gray-300">{summary}</p>
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
            <header className="w-full py-4 bg-gray-800 shadow-md">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold text-teal-400 text-center">AI Study Buddy</h1>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <div className="container max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg">
                    <p className="text-center mb-6 text-gray-400">{message}</p>
                    <TextArea text={text} setText={setText} />
                    <button
                        onClick={handleSummarize}
                        className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-semibold transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Summarizing..." : "Summarize"}
                    </button>
                    {summary && <SummaryDisplay summary={summary} />}
                </div>
            </main>

            <footer className="w-full py-4 bg-gray-800 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} AI Study Buddy. All rights reserved.
            </footer>
        </div>
    );
}
