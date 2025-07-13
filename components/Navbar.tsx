'use client';
import React from 'react';
import Link from 'next/link';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="overflow-hidden w-full flex justify-between items-center p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black flex items-center">
        <Stethoscope className="w-8 h-8 mr-2" />
        Med<span className="text-blue-500">Kit</span>
      </h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="/features" className="text-gray-700 hover:text-black">Features</Link>
        <Link href="/forum" className="text-gray-700 hover:text-black">Forum</Link>
        <Link href="/more" className="text-gray-700 hover:text-black">More</Link>
      </div>

      {/* Login / Signup Buttons */}
      <div className="relative flex space-x-0">
        {/* Background decoration */}
        <div
          id="loginbtnbox"
          className="pointer-events-none h-[calc(100%+4px)] w-16 absolute bg-gradient-to-b from-[#3493C3] to-[#3895C2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        ></div>

        {/* Login Button */}
        <Link href="/login">
          <button className="w-28 py-2 pl-3 bg-[#D2F8FF] rounded-lg text-left rounded-l-full">Login</button>
        </Link>

        {/* Sign Up Button */}
        <Link href="/signup">
           <button className="bg-[#005664] text-white w-28 py-2 pr-3 rounded-lg text-right rounded-r-full">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
