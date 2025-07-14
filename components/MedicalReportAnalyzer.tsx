"use client";

import { useState } from "react";
import { Stethoscope } from "lucide-react";
import UploadCard from "./UploadCard";
// import ResultsCard from "./ResultsCard";

export default function MedicalReportAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [analysisMethod, setAnalysisMethod] = useState<"url" | "upload">(
    "upload"
  );

  const handleAnalyze = async () => {
    setIsAnalyzing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
  };

  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col justify-center mb-8 mt-20">
        <div className="flex items-center mb-4">
          <Stethoscope className="w-8 h-8 mr-2" />
          <h1 className="text-3xl text-left font-bold ">Decode Your <span className="text-blue-500">Medical</span> Report in Second </h1> 
        </div>
        <h2 className="text-2xl text-left font-bold"> AI-Powered</h2>
       {/* <AnalysisSteps />*/}
      </div>

      <UploadCard
        isAnalyzing={isAnalyzing}
        onAnalyze={handleAnalyze}
        analysisMethod={analysisMethod}
        setAnalysisMethod={setAnalysisMethod}
        setIsAnalyzing={setIsAnalyzing}
      />
    </div>
  );
}
