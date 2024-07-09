import DefaultCourseCard from "@/components/courseCards/DefaultCourseCard";
import React from "react";

function CoursesPage() {
  const c = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col mb-6">
      <p className="text-2xl font-semibold mb-4 pt-8 px-8">My Courses</p>
      <div className="flex flex-row gap-x-8 overflow-x-scroll flex-1 w-[calc(100vw-256px)] no-scrollbar pb-2">
        <div className="w-8 h-full"></div>
        {c.map((_, i) => (
          <DefaultCourseCard className="min-w-80" key={i} />
        ))}
        <div className="w-8 h-full"></div>
      </div>
      <p className="text-2xl font-semibold mb-4 pt-8 px-8">Trending Courses</p>
      <div className="flex flex-row gap-x-8 overflow-x-scroll flex-1 w-[calc(100vw-256px)] no-scrollbar pb-2">
        <div className="w-8 h-full"></div>
        {c.map((_, i) => (
          <DefaultCourseCard className="min-w-80" key={i} />
        ))}
        <div className="w-8 h-full"></div>
      </div>
    </div>
  );
}

export default CoursesPage;
