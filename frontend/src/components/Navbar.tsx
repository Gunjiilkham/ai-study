import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <a className="text-blue-400 text-2xl font-extrabold hover:text-blue-300 transition duration-300">
                        AI Study Buddy
                    </a>
                </Link>

                {/* Hamburger Menu */}
                <button
                    className="text-gray-400 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/">
                        <a className="text-gray-400 hover:text-white transition duration-300">
                            Home
                        </a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="text-gray-400 hover:text-white transition duration-300">
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/features">
                        <a className="text-gray-400 hover:text-white transition duration-300">
                            Features
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-400 hover:text-white transition duration-300">
                            About
                        </a>
                    </Link>
                </div>

                {/* Login/Sign-Up */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login">
                        <a className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300">
                            Login
                        </a>
                    </Link>
                    <Link href="/register">
                        <a className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition duration-300">
                            Sign Up
                        </a>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <Link href="/">
                        <a className="block py-2 px-4 text-gray-400 hover:text-white">Home</a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="block py-2 px-4 text-gray-400 hover:text-white">Dashboard</a>
                    </Link>
                    <Link href="/features">
                        <a className="block py-2 px-4 text-gray-400 hover:text-white">Features</a>
                    </Link>
                    <Link href="/about">
                        <a className="block py-2 px-4 text-gray-400 hover:text-white">About</a>
                    </Link>
                    <div className="flex items-center space-x-4 px-4 py-2">
                        <Link href="/login">
                            <a className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 transition duration-300">
                                Login
                            </a>
                        </Link>
                        <Link href="/register">
                            <a className="block w-full text-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg py-2 transition duration-300">
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
