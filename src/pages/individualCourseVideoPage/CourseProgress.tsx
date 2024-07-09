import { Progress } from "@/components/ui/progress";
import React from "react";

function CourseProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <p className="text-sm font-medium mb-4">How to do surgery</p>
      <Progress value={33} />
    </div>
  );
}

export default CourseProgress;
