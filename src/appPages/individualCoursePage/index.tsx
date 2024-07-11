"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaPlay, FaQuestion } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatSeconds } from "@/utils/functions";
import { CourseInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import { COURSE_ENDPOINT } from "@/constants/APIRoutes";
import { useParams } from "next/navigation";
import { toast } from "sonner";

function IndividualCoursePage() {
  const params = useParams();
  const [courseData, setCourseData] = React.useState<CourseInterface>();
  useEffect(() => {
    httpRequest
      .get(COURSE_ENDPOINT + "/" + params?.["course-slug"])
      .then((res) => {
        setCourseData(res.data);
      })
      .catch((err) => {
        toast("An error occurred. Please try again.", { style: { background: "red", color: "white" } });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let totalQuestions = 0;
  let totalDuration = 0;

  courseData?.lectures?.forEach((lectureObj) => {
    const lecture = lectureObj.lecture;
    totalQuestions += lecture.questions.length;
    totalDuration += lecture.video.duration;
  });

  const sortedLectures = courseData?.lectures.sort((a, b) => a.index - b.index);
  return (
    <div>
      <div className="max-w-screen-md">
        <p className="text-4xl font-semibold">{courseData?.title}</p>
        <p className="mt-3 text-gray-700">{courseData?.description}</p>
      </div>
      <div className="mt-10 mb-12">
        <div className="flex gap-x-4 text-gray-700">
          <div className="flex gap-x-2 items-center">
            <FaPlay className="text-xs" />
            <p className="text-sm">{courseData?.lectures?.length} lectures</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <FaQuestion className="text-sm" />
            <p className="text-sm">{totalQuestions} quizzes</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoTime className="text-sm" />
            <p className="text-sm">{formatSeconds(totalDuration)} minutes</p>
          </div>
        </div>
      </div>
      <Link href={"/dashboard/courses/" + courseData?.slug + "/" + sortedLectures?.[0].lecture._id}>
        <button className="bg-primary px-20 py-3 text-white rounded-xl bg-opacity-100 hover:bg-opacity-90transition-all active:scale-95">Start course</button>
      </Link>
      <p className="text-xs mt-2">
        <span className="font-bold">1,000,000</span> people have completed this course
      </p>
      <div className="mt-16">
        <p className="text-2xl font-semibold">Course outline</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md py-2 px-4 mt-4">
        {sortedLectures?.map((item, idx) => (
          <Accordion type="single" collapsible key={idx}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex">
                <div className="flex items-center gap-x-4">
                  <FaPlay className="w-3 h-3" /> {item.lecture.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.lecture.description}</p>
                <p className="text-xs font-light text-gray-500 mt-4">Lecture duration: {formatSeconds(item.lecture.video.duration)} mins</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default IndividualCoursePage;
