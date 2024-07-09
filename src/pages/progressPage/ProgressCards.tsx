import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React from "react";

interface Course {
  title: string;
}

interface Props {
  course: Course;
}

function ProgressCards({ course }: Props) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <div className="ml-4">
          <p className="text-lg font-semibold line-clamp-1">{course.title}</p>
          <div className="flex mt-2 gap-x-2 items-center w-96">
            <Progress value={30} className="h-2" />
            <p className="text-xs font-semibold">30%</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs text-gray-500">In progress</p>
        <Link href="/dashboard/courses/how-to-do-surgery/1">
          <button className="text-sm font-bold text-primary hover:opacity-80">CONTINUE</button>
        </Link>
      </div>
    </div>
  );
}

export default ProgressCards;
