"use client";

import DefaultCourseCard from "@/components/courseCards/DefaultCourseCard";
import { TRENDING_COURSE_ENDPOINT, USER_COURSE_ENDPOINT } from "@/constants/APIRoutes";
import { CourseInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import React, { useEffect } from "react";

function CoursesPage() {
  const [myCourses, setMyCourses] = React.useState<[CourseInterface] | []>([]);
  const [trendingCourses, setTrendingCourses] = React.useState<[CourseInterface] | []>([]);

  useEffect(() => {
    httpRequest.get(USER_COURSE_ENDPOINT).then((res) => {
      setMyCourses(res.data);
    });
    httpRequest.get(TRENDING_COURSE_ENDPOINT).then((res) => {
      setTrendingCourses(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col mb-6">
      <p className="text-2xl font-semibold mb-4 pt-8 px-8">My Courses</p>
      <div className="flex flex-row gap-x-8 overflow-x-scroll flex-1 w-[calc(100vw-256px)] no-scrollbar pb-2">
        <div className="w-8 h-full"></div>
        {myCourses.map((course, i) => (
          <DefaultCourseCard data={course} className="w-full max-w-80" key={i} />
        ))}
        <div className="w-8 h-full"></div>
      </div>
      <p className="text-2xl font-semibold mb-4 pt-8 px-8">Trending Courses</p>
      <div className="flex flex-row gap-x-8 overflow-x-scroll flex-1 w-[calc(100vw-256px)] no-scrollbar pb-2">
        <div className="w-8 h-full"></div>
        {trendingCourses.map((course, i) => (
          <DefaultCourseCard data={course} className="w-full max-w-80" key={i} />
        ))}
        <div className="w-8 h-full"></div>
      </div>
    </div>
  );
}

export default CoursesPage;
