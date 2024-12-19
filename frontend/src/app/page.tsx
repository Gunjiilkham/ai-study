"use client";

import React from "react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="text-center py-16">
                <h1 className="text-5xl font-extrabold text-blue-400">
                    Welcome to AI Study Buddy
                </h1>
                <p className="text-gray-300 mt-4 text-lg">
                    Your AI-powered assistant for smarter studying.
                </p>
            </section>

            {/* Features Section */}
            <section className="py-12">
                <h2 className="text-center text-3xl font-bold text-blue-300 mb-8">
                    Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                    <FeatureCard
                        title="Summarize Notes"
                        description="Quickly generate concise summaries from your notes or text."
                    />
                    <FeatureCard
                        title="AI-Powered Q&A"
                        description="Ask questions and get accurate AI-powered answers."
                    />
                    <FeatureCard
                        title="Create Study Plans"
                        description="Generate personalized study plans for better time management."
                    />
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-8 bg-gray-800">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                    Ready to get started?
                </h2>
                <div className="flex justify-center gap-4">
                    <a href="/login">
                        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
                            Login
                        </button>
                    </a>
                    <a href="/register">
                        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg text-white">
                            Sign Up
                        </button>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-4 bg-gray-900 text-gray-400">
                © {new Date().getFullYear()} AI Study Buddy. All rights reserved.
            </footer>
        </div>
    );
}
