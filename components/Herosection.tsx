'use client'; // Required if you're using this component in a Client Component context

import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import MedicalReportAnalyzer from './MedicalReportAnalyzer';

export default function Herosection() {
  return (
    <div className="border h-dvh w-full relative overflow-x-hidden">
      <Navbar />
      <MedicalReportAnalyzer />

      {/* Left Background Circle */}
      <div className="z-[-10] absolute top-[-25%] left-[-5%] w-auto h-[20rem] aspect-square rounded-full rounded-tr-none bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)]" />

      {/* Right Background + Images */}
      <div className="z-[-10] absolute top-[-10%] right-[-2%] w-auto h-[85%] aspect-square rounded-full rounded-tr-none bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)]">
        
        <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-auto h-[75%]">
          <Image
            src="/docter.png"
            alt="Doctor illustration"
            fill={false}
            width={400} // adjust based on actual image
            height={400}
            className="w-auto h-full object-cover"
          />
        </div>

        <div className="absolute top-[45%] -translate-y-1/2 w-auto h-[44%]">
          <Image
            src="/boat.png"
            alt="Floating boat"
            fill={false}
            width={300} // adjust based on image
            height={300}
            className="w-auto h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
