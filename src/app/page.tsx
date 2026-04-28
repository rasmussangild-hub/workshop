"use client";

import { useState } from "react";
import UserLogin from "@/components/UserLogin";
import Calendar from "@/components/Calendar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
  };

  if (!isLoggedIn) {
    return <UserLogin onLogin={handleLogin} />;
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome, {currentUser}! 👋
            </h1>
            <p className="text-blue-100">
              Book your preferred dates for 2026
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-white text-mediterranean-blue font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Logout
          </button>
        </div>

        {/* Calendar */}
        <Calendar
          onDateSelect={(date) => {
            console.log("Selected date:", date);
          }}
        />

        {/* Footer Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-mediterranean-blue mb-2">
              🌊 Mediterranean Vibes
            </h3>
            <p className="text-gray-600">
              Enjoy our beautiful Mediterranean color palette
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-mediterranean-coral mb-2">
              📅 Easy Booking
            </h3>
            <p className="text-gray-600">
              Click on any date to make your booking
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-mediterranean-olive mb-2">
              👥 Multi-User
            </h3>
            <p className="text-gray-600">
              Different users can access and book independently
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
