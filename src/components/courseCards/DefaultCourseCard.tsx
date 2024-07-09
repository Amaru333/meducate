import Image from "next/image";
import Link from "next/link";
import React from "react";

function DefaultCourseCard() {
  return (
    <div className="rounded-2xl shadow-md bg-white p-1 min-w-80">
      <Image alt="Thumbnail" src="/images/stock-thumbnail-1.png" width={0} height={0} sizes="100vw" className="h-64 w-full object-none rounded-2xl" />
      <div className="p-2">
        <p className="text-xs font-bold text-gray-500 my-1">SURGERY</p>
        <p className="text-lg font-semibold line-clamp-1">Surgery requirements to perform a surgery on a test subject</p>
        <p className="line-clamp-4 text-xs mt-2 text-gray-700">
          Irure nulla aute do reprehenderit veniam sint mollit duis laboris aliqua adipisicing. Lorem ex consequat excepteur in velit incididunt esse nisi est adipisicing non. Nostrud sint consectetur nisi ut voluptate do ea anim id ex commodo mollit consequat. Minim pariatur anim non sint. Dolore
          nostrud sint adipisicing excepteur officia est consequat cupidatat sint eu laborum in incididunt.
        </p>
        <div className="flex justify-end my-4">
          <Link href="/dashboard/courses/how-to-do-surgery" className="font-bold text-xs text-primary hover:opacity-80">
            START COURSE
          </Link>
        </div>
        <div className="bg-gray-200 flex justify-between items-center p-2 px-6 rounded-xl">
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">10</span> lectures
          </p>
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">100</span> quizzes
          </p>
          <p className="text-[0.625rem]">
            <span className="font-bold text-xs">100</span> minutes
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefaultCourseCard;
