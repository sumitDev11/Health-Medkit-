import React from 'react'
import Navbar from './Navbar'
import MedicalReportAnalyzer from './MedicalReportAnalyzer'
export default function Herosection() {
  return (
    <div className='border h-dvh w-full relative overflow-x-hidden'>
       <Navbar />
       <MedicalReportAnalyzer />
       <div className=' z-[-10]   absolute top-[-25%] left-[-5%] w-auto h-[20rem] aspect-square rounded-full rounded-tr-none  bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)] '>
     
    </div>
    <div className=' z-[-10]   absolute top-[-10%] right-[-2%] w-auto h-[85%] aspect-square rounded-full rounded-tr-none bg-[linear-gradient(to_bottom,#288DBF_0%,#5CAACD_37%,#70B5D3_52%,#78B9D5_57%,#81BED7_64%,#9BCCDE_82%,#B4DAE5_100%)] '>
    <img src="/docter.png" alt="hero" className='absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-auto h-[75%] aspect-auto object-cover  ' />
    <img src="/boat.png" alt="hero" className='absolute bottom-0 top-[45%] -translate-y-1/2 w-auto h-[44%] aspect-auto object-cover rounded-full ' /> 
    </div>
    </div>
  )
}
