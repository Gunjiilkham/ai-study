"use client";

import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:5000"}/api/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                alert("Login successful!");
                // Store token or navigate to the dashboard
            } else {
                setError(data.error || "An error occurred.");
            }
        } catch (err) {
            setError("An error occurred while connecting to the server.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
                />
                {error && <p className="text-red-500 text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
