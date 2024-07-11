import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { CourseInterface } from "@/constants/interfaces";

interface DefaultCourseCardProps {
  className?: string;
  data: CourseInterface;
}

function DefaultCourseCard({ className, data }: DefaultCourseCardProps) {
  console.log(data, "COURSE DATA");
  let totalQuestions = 0;
  let totalDuration = 0;

  data?.lectures?.forEach((lectureObj) => {
    const lecture = lectureObj.lecture;
    totalQuestions += lecture.questions.length;
    totalDuration += lecture.video.duration;
  });
  return (
    <div className={cn("rounded-2xl shadow-md bg-white p-1", className)}>
      <Image alt="Thumbnail" src="/images/stock-thumbnail-1.png" width={0} height={0} sizes="100vw" className="h-64 w-full object-none rounded-2xl" />
      <div className="p-2">
        <p className="text-xs font-bold text-gray-500 my-1 uppercase">{data?.tag}</p>
        <p className="text-lg font-semibold line-clamp-1">{data?.title}</p>
        <p className="line-clamp-4 text-xs mt-2 text-gray-700">{data?.description}</p>
        <div className="flex justify-end my-4">
          <Link href={"/dashboard/courses/" + data.slug} className="font-bold text-xs text-primary hover:opacity-80">
            START COURSE
          </Link>
        </div>
        <div className="bg-gray-200 flex justify-between items-center p-2 px-6 rounded-xl">
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">{data?.lectures?.length}</span> lectures
          </p>
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">{totalQuestions}</span> quizzes
          </p>
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">{(totalDuration / 60).toFixed(0)}</span> minutes
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefaultCourseCard;
