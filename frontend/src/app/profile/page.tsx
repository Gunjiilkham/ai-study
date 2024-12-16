"use client";

export default function Profile() {
    // Replace with real user data
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-teal-400">Profile</h1>
                <div className="text-lg">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p className="mt-2"><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
        </div>
    );
}
