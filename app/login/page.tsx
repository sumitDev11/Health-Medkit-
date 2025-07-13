'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // (Optional) Add form validation / auth logic here...

    // Redirect to home page
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f8ff] px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#005664] mb-6">
          🔐 Login to Med<span className="text-blue-500">Kit</span>
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#005664] text-white py-3 rounded-lg hover:bg-[#004450] transition">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <Link href="/signup" className="text-blue-600 underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
