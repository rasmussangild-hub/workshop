"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({ onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const year = 2026;
  const firstDay = new Date(year, currentMonth, 1);
  const lastDay = new Date(year, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const toggleDateSelection = (day: number) => {
    const date = new Date(year, currentMonth, day);
    const dateString = date.toDateString();

    const isSelected = selectedDates.some(
      (d) => d.toDateString() === dateString
    );

    if (isSelected) {
      setSelectedDates(selectedDates.filter((d) => d.toDateString() !== dateString));
    } else {
      setSelectedDates([...selectedDates, date]);
      onDateSelect?.(date);
    }
  };

  const isDateSelected = (day: number) => {
    const date = new Date(year, currentMonth, day);
    return selectedDates.some((d) => d.toDateString() === date.toDateString());
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const previousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const clearAllDates = () => {
    setSelectedDates([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Calendar Container */}
      <div className="bg-white rounded-2xl shadow-mediterranean-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-mediterranean-blue to-mediterranean-blue-light px-6 py-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-mediterranean-blue-dark rounded-lg transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold">
              {MONTHS[currentMonth]} {year}
            </h2>

            <button
              onClick={nextMonth}
              className="p-2 hover:bg-mediterranean-blue-dark rounded-lg transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={clearAllDates}
              disabled={selectedDates.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-mediterranean-coral hover:bg-mediterranean-coral-light disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all text-sm"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
            <div className="text-sm font-semibold ml-auto flex items-center">
              {selectedDates.length} date{selectedDates.length !== 1 ? "s" : ""}{" "}
              selected
            </div>
          </div>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-mediterranean-sand">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="p-3 text-center font-bold text-mediterranean-blue text-sm"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1 p-4">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="p-3" />;
            }

            const selected = isDateSelected(day);
            const today = isToday(day);

            return (
              <button
                key={day}
                onClick={() => toggleDateSelection(day)}
                className={`p-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selected
                    ? "bg-gradient-to-br from-mediterranean-blue to-mediterranean-blue-light text-white shadow-mediterranean-lg"
                    : today
                      ? "bg-mediterranean-yellow text-mediterranean-blue border-2 border-mediterranean-blue"
                      : "bg-gray-100 text-gray-800 hover:bg-mediterranean-sand"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Selected Dates Info */}
        {selectedDates.length > 0 && (
          <div className="bg-mediterranean-sand px-6 py-4 border-t-2 border-mediterranean-blue">
            <h3 className="font-bold text-mediterranean-blue mb-3">
              📅 Your Bookings:
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedDates
                .sort((a, b) => a.getTime() - b.getTime())
                .map((date) => (
                  <div
                    key={date.toDateString()}
                    className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg border-2 border-mediterranean-blue text-sm font-semibold text-mediterranean-blue"
                  >
                    {date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                    <button
                      onClick={() => {
                        setSelectedDates(
                          selectedDates.filter(
                            (d) => d.toDateString() !== date.toDateString()
                          )
                        );
                      }}
                      className="ml-1 hover:text-mediterranean-coral transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="bg-gray-50 px-6 py-4 border-t-2 border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">📌 Legend:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-mediterranean-blue to-mediterranean-blue-light rounded" />
              <span className="text-gray-700">Selected date</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-mediterranean-yellow border-2 border-mediterranean-blue rounded" />
              <span className="text-gray-700">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded" />
              <span className="text-gray-700">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
