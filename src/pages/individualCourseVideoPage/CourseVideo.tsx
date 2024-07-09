import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

function CourseVideo() {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden w-full">
        <VideoPlayer />
      </div>
      <p className="mt-6 font-semibold text-3xl">Title of the course video</p>
    </div>
  );
}

export default CourseVideo;
