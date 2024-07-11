"use client";
import React from "react";
import { BaseReactPlayerProps } from "react-player/base";
import dynamic from "next/dynamic";
import { QuestionInterface } from "@/constants/interfaces";
const ReactPlayerWrapper = dynamic(() => import("./ReactPlayerWrapper"), { ssr: false });

interface VideoPlayerProps {
  videoURL: string;
  questions: [
    {
      timestamp: number;
      _id: string;
      question: QuestionInterface;
    }
  ];
  onEnded?: () => void;
}

function VideoPlayer({ videoURL, questions, onEnded }: VideoPlayerProps) {
  const playerRef = React.useRef<BaseReactPlayerProps>(null);
  return <ReactPlayerWrapper videoURL={videoURL} questions={questions} playerRef={playerRef} onEnded={onEnded} />;
}

export default VideoPlayer;
