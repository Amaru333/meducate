import { Progress } from "@/components/ui/progress";
import React from "react";

interface CourseProgressProps {
  value: number;
}

function CourseProgress({ value }: CourseProgressProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <p className="text-sm font-medium mb-4">Course Progress</p>
      <div className="flex flex-row gap-x-2 items-center">
        <Progress value={value} className="flex-1" />
        <p className="font-semibold">{value.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default CourseProgress;
