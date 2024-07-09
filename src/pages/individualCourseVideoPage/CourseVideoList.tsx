"use client";
import { DUMMY_COURSE_ITEMS } from "@/constants/dummyData";
import { formatSeconds } from "@/utils/functions";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { TiTick } from "react-icons/ti";

function CourseVideoList() {
  const params = useParams();
  console.log(params);
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      {DUMMY_COURSE_ITEMS.map((item, idx) => (
        <Link href={item.id.toString()} key={idx} className={`flex w-full items-center justify-between p-3 text-sm rounded-2xl hover:bg-primary hover:bg-opacity-20 transition-all ${params?.["video-slug"] === item.id.toString() ? "bg-primary bg-opacity-10" : "bg-transparent"}`}>
          <div>
            <p>
              {idx + 1}. {item.title}
            </p>
            <p className="text-xs text-gray-400 w-full text-start mt-1">{formatSeconds(item.duration)}</p>
          </div>
          {item.finished && (
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
              <TiTick className="text-white" />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default CourseVideoList;
