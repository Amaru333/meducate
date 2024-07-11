import VideoPlayer from "@/components/VideoPlayer";
import { QuestionInterface } from "@/constants/interfaces";
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
  onEnded?: () => void;
}

function CourseVideo({ title, description, videoURL, questions, onEnded }: CourseVideoProps) {
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
