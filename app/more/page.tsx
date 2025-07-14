'use client';
import React from 'react';
import { Info, UserCog, FileSearch, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const CustomStyles = () => (
  <style jsx global>{`
    .hero-bg-pattern {
      background-color: #f2f7fa;
      background-image: radial-gradient(#dbe9f0 1px, transparent 1px);
      background-size: 16px 16px;
    }

    .gradient-text {
      background: linear-gradient(45deg, #005664, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `}</style>
);

export default function MorePage() {
  return (
    <>
      <CustomStyles />
      <Navbar />
      <div className="min-h-screen hero-bg-pattern py-16 sm:py-24 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* --- HEADER --- */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#005664] mb-4">
              Explore <span className="gradient-text">MedKit</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the powerful tools at your fingertips. From AI-powered insights to complete control over your health data, we&#39ve designed everything for your clarity and confidence.
            </p>
          </div>

          {/* --- SECTIONS CONTAINER --- */}
          <div className="space-y-20">
            {/* 1. Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Health Dashboard Analytics"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Health Dashboard</h2>
                <p className="text-gray-700 mb-5">
                  Your command center for a complete health overview. It intelligently organizes your recent uploads, AI-generated insights, and tracked vitals.
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Go to Dashboard <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* 2. Upload History */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/ai-summary.jpg"
                  alt="AI-powered medical summary"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl">
                  <FileSearch className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Upload History & Analysis</h2>
                <p className="text-gray-700 mb-5">
                  A secure, searchable archive of your medical life. Find exactly what you need with powerful search, and review AI summaries anytime.
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  View Full History <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* 3. Account Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="User managing account settings"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
                  <UserCog className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Account & Personalization</h2>
                <p className="text-gray-700 mb-5">
                  It&apos;s your health. Manage your profile, strengthen security with 2FA, and tailor the AI for more relevant health insights.
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Manage Account <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* 4. About MedKit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80"
                  alt="Team behind MedKit"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">About MedKit</h2>
                <p className="text-gray-700 mb-5">
                  Our mission is to democratize health information. We are a passionate team building tools that empower you to manage your health with confidence.
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Learn More <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
