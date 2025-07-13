import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm: text-gmax-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-smray-800  text-blue-700">
              MedKit is an AI-powered tool designed to translate complex medical reports into simple, easy-to-understand language. Our goal is to help users quickly grasp the key information in their health documents without feeling overwhelmed.
            </p>
            <p className="mt-4 text-sm text-blue-700">
              We believe that access to understandable medical information should be universal. MedKit empowers users to stay informed about their health by breaking down barriers created by technical jargon.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-black">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-blue-700">Phone:</p>
            <a href="tel:850-123-5021" className="text-blue-700 transition-colors duration-300 hover:text-deep-purple-800">850-123-5021</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-blue-700">Email:</p>
            <a href="mailto:info@lorem.mail" className="text-blue-700 transition-colors duration-300 hover:text-deep-purple-800">info@lorem.mail</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-blue-700">Address:</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-blue-700 transition-colors duration-300 hover:text-deep-purple-800">
              312 Lovely Street, NY
            </a>
          </div>
        </div>

        <div>
          <span className="text-base font-bold tracking-wide text-black">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <Link href="/" className="text-blue-700 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9
                c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1
                c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4
                c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6
                C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-black">© Copyright 2025 Lorem Inc. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/" className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</Link>
          </li>
          <li>
            <Link href="/" className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
