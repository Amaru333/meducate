import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React from "react";
import { TiTick } from "react-icons/ti";

import moment from "moment";

interface Course {
  title: string;
}

interface Props {
  course: Course;
}

function CertificateProgressCard({ course }: any) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <div className="ml-4">
          <p className="text-lg font-semibold line-clamp-1">{course?.course?.title}</p>
          <div className="flex mt-2 gap-x-2 items-center w-96">
            <Progress value={100} className="h-2" />
            <p className="text-xs font-semibold">100%</p>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p>Completed on:</p>
        <p className="font-semibold">{moment(course?.createdAt).utc().format("DD MMM, YYYY [at] HH:mm")}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-x-1">
          <div className="bg-green-500 rounded-full w-3 h-3 flex items-center justify-center">
            <TiTick className="text-white w-2 h-2" />
          </div>
          <p className="text-xs text-gray-500">Completed</p>
        </div>
        <Link href={"/dashboard/certificates/" + course?._id} className="mt-1">
          <button className="text-sm font-bold text-primary hover:opacity-80">VIEW CERTIFICATE</button>
        </Link>
      </div>
    </div>
  );
}

export default CertificateProgressCard;
