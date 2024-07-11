"use client";

import React, { useEffect } from "react";
import CourseVideo from "./CourseVideo";
import CourseProgress from "./CourseProgress";
import CourseVideoList from "./CourseVideoList";
import { LectureInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import { COMPLETED_LECTURES_ACTIVITY_ENDPOINT, COURSE_LECTURES_ENDPOINT, LECTURE_ENDPOINT, VIEWING_ACTIVITY_ENDPOINT } from "@/constants/APIRoutes";
import { useParams } from "next/navigation";
import { toast } from "sonner";

interface LectureListProps {
  index: number;
  _id: string;
  lecture: LectureInterface;
}

function IndividualCourseVideoPage() {
  const params = useParams();
  const [lectureData, setLectureData] = React.useState<LectureInterface>();
  const [completedLectures, setCompletedLectures] = React.useState<string[]>([]);
  const [lectureList, setLectureList] = React.useState<[LectureListProps] | []>([]);

  useEffect(() => {
    const getLecturePageData = async () => {
      try {
        const resCourseList = await httpRequest.get(COURSE_LECTURES_ENDPOINT + "/" + params?.["course-slug"]);
        setLectureList(resCourseList.data);
        const resLectureData = await httpRequest.get(LECTURE_ENDPOINT + "/" + params?.["video-slug"]);
        setLectureData(resLectureData.data);
        const resCompletedLectures = await httpRequest.get(COMPLETED_LECTURES_ACTIVITY_ENDPOINT + "/" + params?.["course-slug"]);
        setCompletedLectures(resCompletedLectures.data);
      } catch (err) {
        toast("An error occurred. Please try again.", { style: { background: "red", color: "white" } });
      }
    };
    getLecturePageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onEnded = () => {
    httpRequest
      .post(VIEWING_ACTIVITY_ENDPOINT, { course: params?.["course-slug"], lecture: params?.["video-slug"], duration: lectureData?.video?.duration })
      .then((res) => {
        console.log(res);
        if (!completedLectures.includes(params?.["video-slug"] as string)) {
          setCompletedLectures([...completedLectures, params?.["video-slug"] as string]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const courseProgress = (completedLectures.length / lectureList.length) * 100;
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">{lectureData && <CourseVideo title={lectureData?.title} description={lectureData?.description} videoURL={lectureData?.video?.url} questions={lectureData?.questions} duration={lectureData?.video?.duration} onEnded={onEnded} />}</div>
      <div className="col-span-4 flex flex-col gap-8">
        <CourseProgress value={courseProgress} />
        <CourseVideoList completedLectures={completedLectures} lectureList={lectureList} />
      </div>
    </div>
  );
}

export default IndividualCourseVideoPage;
