// app/auth/Spinner.js
"use client";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-t-sky-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-sm text-gray-700">Loading...</p>
    </div>
  );
}
