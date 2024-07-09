import React from "react";
import CourseVideo from "./CourseVideo";
import CourseProgress from "./CourseProgress";
import CourseVideoList from "./CourseVideoList";

function IndividualCourseVideoPage() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <CourseVideo />
      </div>
      <div className="col-span-4 flex flex-col gap-8">
        <CourseProgress />
        <CourseVideoList />
      </div>
    </div>
  );
}

export default IndividualCourseVideoPage;
