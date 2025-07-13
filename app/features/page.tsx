'use client';
import React from 'react';
import { Rocket, Brain, ShieldCheck, ClipboardList, LineChart, Languages, CheckCircle } from 'lucide-react';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
const CustomStyles = () => (
  <style jsx global>{`
    .hero-bg-pattern {
      background-color: #f8fafc; /* A very light gray */
      background-image: radial-gradient(#eef2f7 1px, transparent 1px);
      background-size: 20px 20px;
    }
    .gradient-text-features {
      background: linear-gradient(45deg, #2563eb, #9333ea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `}</style>
);


export default function Features() {
  return (
    <>
      <CustomStyles />
       <Navbar />
      <div className="min-h-screen hero-bg-pattern py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* --- HERO HEADER --- */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#005664] mb-4">
              The Future of Health Understanding is <span className="gradient-text-features">Here.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {"MedKit isn't just a document scanner; it's your personal health intelligence engine."}

            </p>
          </div>

          {/* --- FEATURES CONTAINER --- */}
          <div className="space-y-20">

            {/* === 1. AI-Based Report Analysis (Image on Right) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                 <Image src="/Data.jpg" alt="AI scanning a medical document" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl"><Rocket className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">AI-Powered Data Extraction</h2>
                <p className="text-gray-700 mb-5">
                  Stop squinting at blurry PDFs and stop manual data entry. Our advanced Optical Character Recognition (OCR) technology reads any report you upload—be it a high-resolution PDF or a simple photo of a printout—and accurately extracts every crucial data point.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Upload any format: PDF, JPG, PNG.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> High-precision, error-reducing OCR.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Securely digitizes your paper trail.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">Upload Your First Report <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>
            
            {/* === 2. Simplified Explanation (Image on Left) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/summaries.jpg" alt="Complex medical data being simplified into clear language" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                 <div className="inline-block p-4 mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl"><Brain className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Jargon-Free Summaries</h2>
                <p className="text-gray-700 mb-5">
                  Medical reports are written for doctors, not for patients. We fix that. Our GPT-powered Natural Language Processing (NLP) engine reads the extracted data and translates intimidating medical jargon into plain, easy-to-understand language so you can finally grasp what your report actually says.
                </p>
                 <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Key takeaways highlighted at the top.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Explanations for every single marker.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Empowers you for doctor conversations.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">See a Sample Summary <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>

            {/* === 3. Risk Scoring System (Image on Right) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image src="/deep.png" alt="A health dashboard showing a color-coded risk score" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                 <div className="inline-block p-4 mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl"><ShieldCheck className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Intuitive Risk Scoring</h2>
                <p className="text-gray-700 mb-5">
                  Our system analyzes your biomarker values against standard medical ranges to provide an instant, color-coded risk assessment. This early warning system helps you immediately identify which results are normal and which require attention, so you can prioritize your health concerns effectively.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-500" /> Green, Yellow, and Red alerts.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-500" /> Contextual analysis of out-of-range values.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-500" /> Focuses your attention where it's needed.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">Understand Your Score <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>
            
            {/* === 4. Doctor Recommendations (Image on Left) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/Health.jpg" alt="Doctor and patient discussing results on a tablet" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                 <div className="inline-block p-4 mb-4 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-2xl"><ClipboardList className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Actionable Recommendations</h2>
                <p className="text-gray-700 mb-5">
                  Information without action is useless. MedKit provides general lifestyle and dietary suggestions based on your report's findings. We also generate a clean, shareable summary that you can easily send to your doctor, making your next consultation more productive than ever.
                </p>
                 <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-500" /> Personalized lifestyle tips.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-500" /> Generates questions to ask your doctor.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-500" /> One-click sharing for consultations.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105">Prepare for Your Next Visit <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>

            {/* === 5. Trend Analysis (Image on Right) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <Image src="/bar.jpg" alt="A graph showing a health metric improving over time" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                 <div className="inline-block p-4 mb-4 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl"><LineChart className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Historical Trend Analysis</h2>
                <p className="text-gray-700 mb-5">
                  A single report is a snapshot; your health is a movie. MedKit securely stores your previous reports and plots key markers over time. This allows you and your doctor to visualize trends, track progress, and detect the early signs of chronic or recurring health issues before they become serious.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-indigo-500" /> Connects the dots between reports.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-indigo-500" /> Visualize your progress or declines.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-indigo-500" /> Essential for managing chronic conditions.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">View Your Health Timeline <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>

            {/* === 6. Multi-Language Support (Image on Left) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/language.jpg" alt="A mobile phone showing a language selection menu" width={1280} height={720} className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
              </div>
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                 <div className="inline-block p-4 mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl"><Languages className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Multi-Language Support</h2>
                <p className="text-gray-700 mb-5">
                  Health is a universal concern, but language can be a barrier. MedKit breaks down these walls by translating your simplified report summaries into multiple regional Indian languages. This ensures that everyone in your family, regardless of language preference, can access and understand vital health information.
                </p>
                 <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-pink-500" /> Instant translation to multiple languages.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-pink-500" /> Promotes health inclusivity for all.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-pink-500" /> Empower family members to help.</li>
                </ul>
                {/* <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">Choose Your Language <ChevronRight className="w-5 h-5" /></button> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}