import DefaultCourseCard from "@/components/courseCards/DefaultCourseCard";
import React from "react";

function RecommendedSection() {
  return (
    <div className="mt-12">
      <p className="text-2xl font-semibold w-full border-b pb-4">Recommended for you</p>
      <div className="grid grid-cols-3 gap-x-8 mt-8">
        <DefaultCourseCard />
        <DefaultCourseCard />
        <DefaultCourseCard />
      </div>
    </div>
  );
}

export default RecommendedSection;
