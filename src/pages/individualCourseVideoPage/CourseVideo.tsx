import VideoPlayer from "@/components/VideoPlayer";
import { VIEWING_ACTIVITY_ENDPOINT } from "@/constants/APIRoutes";
import { QuestionInterface } from "@/constants/interfaces";
import httpRequest from "@/utils/httpRequest";
import { useParams } from "next/navigation";
import React from "react";

interface CourseVideoProps {
  title: string;
  description: string;
  videoURL: string;
  duration: number;
  questions: [
    {
      timestamp: number;
      _id: string;
      question: QuestionInterface;
    }
  ];
}

function CourseVideo({ title, description, videoURL, questions, duration }: CourseVideoProps) {
  const params = useParams();
  const onEnded = () => {
    httpRequest
      .post(VIEWING_ACTIVITY_ENDPOINT, { course: params?.["course-slug"], lecture: params?.["video-slug"], duration: duration })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="rounded-2xl overflow-hidden w-full">
        <VideoPlayer videoURL={videoURL} questions={questions} onEnded={onEnded} />
      </div>
      <p className="mt-6 font-semibold text-3xl">{title}</p>
      <p className="text-sm text-gray-700 mt-4">{description}</p>
    </div>
  );
}

export default CourseVideo;
