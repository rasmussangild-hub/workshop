"use client";

import { useState } from "react";
import { LogIn } from "lucide-react";

interface UserLoginProps {
  onLogin: (username: string) => void;
}

export default function UserLogin({ onLogin }: UserLoginProps) {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onLogin(username.trim());
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-mediterranean-blue to-mediterranean-coral rounded-full mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-mediterranean-blue mb-2">
            Welcome
          </h1>
          <p className="text-gray-600">
            Mediterranean Calendar Booking System
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Enter Your Name
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., Sebastian"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-mediterranean-blue focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !username.trim()}
            className="w-full py-3 bg-gradient-to-r from-mediterranean-blue to-mediterranean-coral text-white font-bold rounded-lg hover:shadow-mediterranean-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all"
          >
            {isLoading ? "Logging in..." : "Login to Book"}
          </button>
        </form>

        {/* Features */}
        <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-3">
          <div className="flex items-start">
            <span className="text-mediterranean-yellow mr-3">🌊</span>
            <p className="text-sm text-gray-700">
              Beautiful Mediterranean design
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-mediterranean-coral mr-3">📅</span>
            <p className="text-sm text-gray-700">Book any date in 2026</p>
          </div>
          <div className="flex items-start">
            <span className="text-mediterranean-olive mr-3">👥</span>
            <p className="text-sm text-gray-700">
              Independent user bookings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
