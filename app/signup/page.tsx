'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // (Optional) Add signup validation or API call here...

    // ✅ After successful sign up, redirect to Login page
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f8ff] px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#005664] mb-6">📝 Create Account</h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="text-gray-600">Full Name</label>
            <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
          </div>

          <div>
            <label className="text-gray-600">Email</label>
            <input type="email" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" required />
          </div>

          <div>
            <label className="text-gray-600">Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="••••••••" required />
          </div>

          <div>
            <label className="text-gray-600">Confirm Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="••••••••" required />
          </div>

          <button type="submit" className="w-full bg-[#005664] text-white py-3 rounded-lg hover:bg-[#004450] transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link href="/login" className="text-blue-600 underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
