"use client";

import { Progress } from "@/components/ui/progress";
import { RECENTLY_WATCHED_COURSE_ENDPOINT } from "@/constants/APIRoutes";
import { DUMMY_COURSE_ITEMS } from "@/constants/dummyData";
import { formatSeconds } from "@/utils/functions";
import httpRequest from "@/utils/httpRequest";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function ContinueCourseCard() {
  const [courseDetails, setCourseDetails] = React.useState<any>();
  useEffect(() => {
    httpRequest
      .get(RECENTLY_WATCHED_COURSE_ENDPOINT)
      .then((res) => {
        setCourseDetails(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return courseDetails ? (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex flex-col lg:flex-row">
        <Image alt="thumbnail" src="/images/stock-thumbnail-1.png" width={300} height={0} sizes="100vw" className="object-contain rounded-2xl" />
        <div className="pl-4 flex flex-col">
          <div className="flex-1">
            <p className="text-2xl font-medium">{courseDetails?.title}</p>
            <p className="text-sm">
              Lecture {courseDetails?.lectureToWatch?.index}: {courseDetails?.lectureToWatch?.lecture?.title} <span className="text-xs font-light text-gray-500">({formatSeconds(DUMMY_COURSE_ITEMS[2].duration)} mins)</span>
            </p>
            <p className="line-clamp-2 text-sm my-2">{courseDetails?.description}</p>
            <Progress value={parseFloat(courseDetails?.progress)} className="h-2 mt-4" />
            <p className="italic text-xs font-light text-gray-500 mt-1">{courseDetails?.progress}% completed</p>
          </div>
          <div className="flex gap-x-4 mt-4 text-xs">
            <Link href={"/dashboard/courses/" + courseDetails?.slug} className="px-4 py-2 text-primary rounded-xl bg-opacity-100 hover:bg-opacity-90 transition-all active:scale-95">
              Start Over
            </Link>
            <Link href={"/dashboard/courses/" + courseDetails?.slug + "/" + courseDetails?.lectureToWatch?.lecture?._id} className="bg-primary px-4 py-2 text-white rounded-xl bg-opacity-100 hover:bg-opacity-90 transition-all active:scale-95">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default ContinueCourseCard;
