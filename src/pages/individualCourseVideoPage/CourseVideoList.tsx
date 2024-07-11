"use client";

import { LectureInterface } from "@/constants/interfaces";
import { formatSeconds } from "@/utils/functions";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { TiTick } from "react-icons/ti";

interface LectureListProps {
  index: number;
  _id: string;
  lecture: LectureInterface;
}
interface CourseVideoListProps {
  completedLectures: string[];
  lectureList: [LectureListProps] | [];
}

function CourseVideoList({ completedLectures, lectureList }: CourseVideoListProps) {
  const params = useParams();
  console.log(completedLectures, lectureList, "completedLectures, lectureList");
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      {lectureList.map((item, idx) => (
        <Link href={item.lecture._id} key={idx} className={`flex w-full items-center justify-between p-3 text-sm rounded-2xl hover:bg-primary hover:bg-opacity-20 gap-x-4 transition-all ${params?.["video-slug"] === item.lecture._id ? "bg-primary bg-opacity-10" : "bg-transparent"}`}>
          <div>
            <p className="line-clamp-1">
              {idx + 1}. {item.lecture.title}
            </p>
            <p className="text-xs text-gray-400 w-full text-start mt-1">{formatSeconds(item.lecture.video.duration)}</p>
          </div>
          <div>
            <div className={`${completedLectures?.includes(item.lecture._id) ? "bg-green-500" : "bg-gray-400"} rounded-full w-5 h-5 flex items-center justify-center`}>
              <TiTick className="text-white" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseVideoList;
