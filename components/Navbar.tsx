import React from 'react';
import { FileText, Shield, BarChart, Brain, Globe, Upload } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="overflow-hidden w-full flex justify-between items-center p-6 ">
    <h1 className="text-2xl font-bold text-black flex"> <Stethoscope className="w-8 h-8 mr-2" />Med<span className="text-blue-500">Kit</span></h1>
     <div className="space-x-6">
         <a href="#" className="text-gray-700 hover:text-black">Features</a>
         <a href="#" className="text-gray-700 hover:text-black">Forum</a>
         <a href="#" className="text-gray-700 hover:text-black">More</a>
     </div>
 
     <div className=" relative">
         <div  id='loginbtnbox'  className=' h-[calc(100%+4px)]   w-16 absolute bg-gradient-to-b from-[#3493C3] to-[#3895C2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>

         </div>
         <button className="w-28 py-2 pl-3  bg-[#D2F8FF] rounded-lg text-left rounded-l-full">Login</button>
         <button className="bg-[#005664] text-white w-28 py-2 pr-3 rounded-lg text-right rounded-r-full ">Sign Up</button>
     </div>        
   
   
   </nav>

  );
};
export default Navbar;




