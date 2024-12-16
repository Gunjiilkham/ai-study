"use client";

import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Call API to authenticate (add logic here)
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-teal-400">Login</h1>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <Button text="Login" onClick={handleLogin} />
                <p className="mt-4 text-center text-gray-400">
                    Don't have an account? <a href="/register" className="text-teal-400 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
}
