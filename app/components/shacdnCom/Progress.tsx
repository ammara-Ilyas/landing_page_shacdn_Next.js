"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
interface ProgressType {
  width: number;
}
const ProgressBar: React.FC<ProgressType> = ({ width }) => {
  const [progress, setProgress] = useState(width);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  console.log(width);

  return <Progress value={progress} />;
};

export default ProgressBar;
