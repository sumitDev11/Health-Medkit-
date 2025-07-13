'use client';
import React from 'react';
import {
  MessageCircleMore,
  TestTube2,
  Pill,
  HeartPulse,
  BotMessageSquare,
  ChevronRight,
  PenSquare,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const CustomStyles = () => (
  <style jsx global>{`
    .hero-bg-pattern {
      background-color: #f9f9ff;
      background-image: radial-gradient(#e8e8f5 1px, transparent 1px);
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
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `}</style>
);

export default function ForumPage() {
  return (
    <>
      <CustomStyles />
      <Navbar />

      <div className="min-h-screen hero-bg-pattern py-16 sm:py-24 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <MessageCircleMore className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#005664] mb-4">
              MedKit <span className="gradient-text">Community Forum</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              A safe and supportive space to discuss health topics, share experiences, and learn from one another. Your journey is not a solo one.
            </p>
            {/* <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <PenSquare className="w-6 h-6" /> Start a New Discussion
            </button> */}
          </div>

          <div className="space-y-20">
            {/* Understanding Your Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image width={1280} height={720} src="/image1.jpg" alt="Medical Report" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl">
                  <TestTube2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Understanding Your Reports</h2>
                <p className="text-gray-700 mb-5">
                  Feeling overwhelmed by terms like CBC, LFT, or high-density lipoprotein? You're not alone. Share your reports (with personal info removed) and ask questions to the community.
                  <strong className="block mt-2 text-sm text-sky-700">Disclaimer: Discussions are for peer support, not medical advice.</strong>
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105">
                  Explore Report Topics <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* Medicines & Supplements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image width={1280} height={720} src="/pills - image.jpg" alt="Supplements" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Medicines & Supplements</h2>
                <p className="text-gray-700 mb-5">
                  From Vitamin D to Omega-3, there's a lot to navigate. Discuss your experiences with over-the-counter medications and health supplements. Share what's worked for you and learn from others.
                  <strong className="block mt-2 text-sm text-orange-700">Disclaimer: Always consult your doctor before starting or stopping any medication.</strong>
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Browse Medicine Topics <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* Diet & Lifestyle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image width={1280} height={720} src="/Diet.jpg" alt="Diet and Exercise" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl">
                  <HeartPulse className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Diet & Lifestyle</h2>
                <p className="text-gray-700 mb-5">
                  Health is a holistic journey. This is the place to share your favorite healthy recipes, discuss exercise routines, and explore mental wellness practices like meditation and yoga. Motivate and be motivated!
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-lime-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                  Join Lifestyle Conversations <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* AI Report Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image width={1280} height={720} src="/big.jpg" alt="AI & Data Visualization" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-slate-400 to-gray-500 rounded-2xl">
                  <BotMessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">AI Report Feedback</h2>
                <p className="text-gray-700 mb-5">
                  Help us make MedKit smarter! Was your AI-generated summary clear and accurate? Did it miss something important? Your feedback is invaluable for training our models and improving the tool for everyone.
                </p>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                  Provide Feedback <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
