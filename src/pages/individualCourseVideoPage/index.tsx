"use client";

import React, { useEffect } from "react";
import CourseVideo from "./CourseVideo";
import CourseProgress from "./CourseProgress";
import CourseVideoList from "./CourseVideoList";
import { LectureInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import { LECTURE_ENDPOINT } from "@/constants/APIRoutes";
import { useParams } from "next/navigation";
import { toast } from "sonner";

function IndividualCourseVideoPage() {
  const params = useParams();
  const [lectureData, setLectureData] = React.useState<LectureInterface>();
  useEffect(() => {
    httpRequest
      .get(LECTURE_ENDPOINT + "/" + params?.["video-slug"])
      .then((res) => {
        setLectureData(res.data);
      })
      .catch((err) => {
        toast("An error occurred. Please try again.", { style: { background: "red", color: "white" } });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(lectureData, "lectureData");
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">{lectureData && <CourseVideo title={lectureData?.title} description={lectureData?.description} videoURL={lectureData?.video?.url} questions={lectureData?.questions} />}</div>
      <div className="col-span-4 flex flex-col gap-8">
        <CourseProgress />
        <CourseVideoList />
      </div>
    </div>
  );
}

export default IndividualCourseVideoPage;
