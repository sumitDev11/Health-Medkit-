import React from 'react'
import Navbar from './Navbar'
import MedicalReportAnalyzer from './MedicalReportAnalyzer'
import Image from 'next/image'

export default function Herosection() {
  return (
    <div className='border h-dvh w-full relative overflow-x-hidden'>
      <Navbar />
      <MedicalReportAnalyzer />

      {/* Left Gradient Background Circle */}
      <div className='z-[-10] absolute top-[-25%] left-[-5%] w-auto h-[20rem] aspect-square rounded-full rounded-tr-none bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)]' />

      {/* Right Gradient Background with Images */}
      <div className='z-[-10] absolute top-[-10%] right-[-2%] w-auto h-[85%] aspect-square rounded-full rounded-tr-none bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)]'>
        <Image
          src="/docter.png"
          alt="hero"
          fill
          className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-auto h-[75%] object-contain"
          style={{ objectFit: 'contain' }}
          priority
        />
        <Image
          src="/boat.png"
          alt="hero"
          fill
          className="absolute top-[45%] -translate-y-1/2 w-auto h-[44%] object-contain rounded-full"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
