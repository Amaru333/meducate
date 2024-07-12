"use client";
import React, { useEffect, useState } from "react";
import DefaultCourseCard from "@/components/courseCards/DefaultCourseCard";

import { CourseInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import { RECOMMENDED_COURSE_ENDPOINT } from "@/constants/APIRoutes";

function RecommendedSection() {
  const [recommendedCourses, setRecommendedCourses] = useState<[CourseInterface] | []>([]);

  useEffect(() => {
    httpRequest.get(RECOMMENDED_COURSE_ENDPOINT).then((res) => {
      setRecommendedCourses(res.data);
    });
  }, []);
  return (
    <div className="mt-12">
      <p className="text-2xl font-semibold w-full border-b pb-4">Recommended for you</p>
      <div className="grid grid-cols-3 gap-x-8 mt-8">
        {recommendedCourses.map((course, i) => (
          <DefaultCourseCard data={course} key={i} className="col-span-2 lg:col-span-1" />
        ))}
      </div>
    </div>
  );
}

export default RecommendedSection;
