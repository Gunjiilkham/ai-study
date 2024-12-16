"use client";

import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        // Call API to register (add logic here)
        console.log("Registering with:", { name, email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-teal-400">Register</h1>
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
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
                    placeholder="Create a password"
                />
                <Button text="Register" onClick={handleRegister} />
                <p className="mt-4 text-center text-gray-400">
                    Already have an account? <a href="/login" className="text-teal-400 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
