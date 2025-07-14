"use client";

import { useState, useCallback } from "react";
import { Activity, FileText, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ResultsCard from "./ResultsCard";

interface UploadCardProps {
  isAnalyzing: boolean;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  onAnalyze: () => void;
  analysisMethod: "url" | "upload";
  setAnalysisMethod: (method: "url" | "upload") => void;
}

export default function UploadCard({
  isAnalyzing,
  setIsAnalyzing,
  onAnalyze,
  analysisMethod,
  setAnalysisMethod,
}: UploadCardProps) {
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    },
    []
  );

  const removeFile = useCallback(() => {
    setFile(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (analysisMethod === "upload" && file) {
      setIsAnalyzing(true);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log({ result });

        if (!response.ok) {
          throw new Error(result.error || "File upload failed");
        }

        console.log({ result });
        toast({
          title: "File processed successfully",
          description: "Your medical report has been analyzed.",
        });
        setAnalysisResult(result);
        onAnalyze();
      } catch (error) {
        console.log("Error:", error);
        toast({
          title: "Error",
          description:
            error instanceof Error
              ? error.message
              : "There was a problem processing your file.",
          variant: "destructive",
        });
      } finally {
        setIsAnalyzing(false);
      }
    } else if (analysisMethod === "url" && fileUrl) {
      // Handle URL analysis here
      onAnalyze();
    }
  };

  return (
    <>
      <Card className="max-w-2xl  mb-8 bg-white mt-10 ">
       <CardHeader>
          <CardTitle className="text-blue-700">
            Upload Your Medical Report
          </CardTitle>
         
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs
              value={analysisMethod}
              onValueChange={(value) =>
                setAnalysisMethod(value as "url" | "upload")
              }
              className="w-full"
            >
              
              <TabsContent value="upload">
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                  className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center cursor-pointer transition-colors hover:bg-blue-50"
                >
                  {file ? (
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <span className="text-blue-700 font-medium">
                        {file.name}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                      >
                        <X className="w-4 h-4 text-blue-700" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                      <p className="text-base text-gray-700 font-medium flex flex-col">
                        Drag and drop files here, or click to select files.
                        <span className="text-gray-700">
                          You can upload a file up to 15 MB.
                        </span>
                        <span className="text-sm text-gray-500 mt-1">
                          Supported file types: PDF, JPEG, PNG.
                        </span>
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.png,.jpeg"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                </div>
              </TabsContent>
              <TabsContent value="url">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter report URL"
                    type="url"
                    value={fileUrl}
                    onChange={(e) => setFileUrl(e.target.value)}
                    className="flex-1 border-blue-200 focus:ring-blue-500"
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Tooltip for better file quality */}
            <div className="relative mt-2">
              <span className="text-sm text-gray-500 mt-1">
                For better analysis, please upload clear and high-quality files.
                Avoid blurry or incomplete documents.
              </span>
            </div>

            <Button
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={
                isAnalyzing || (analysisMethod === "url" ? !fileUrl : !file)
              }
            >
              {isAnalyzing ? (
                <>
                  <Activity className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Analyze Report
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {analysisResult && (
        <div className="max-w-2xl mx-auto mb-8">
          <ResultsCard analysisResult={analysisResult} />
        </div>
      )}
    </>
  );
}
