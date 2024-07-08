"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import { FaPlay, FaPause } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import { formatSeconds } from "@/utils/functions";
import { Slider } from "@/components/ui/slider";
import { SliderWithoutThumb } from "@/components/ui/sliderWithoutThumb";

import { DUMMY_QUESTIONS } from "@/constants/dummyData";

import confettiAnimation from "./confetti.json";
import Lottie from "lottie-react";

function VideoPlayer({ playerRef }: { playerRef: any }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackRate, setPlaybackRate] = React.useState(1.0);
  const [seek, setSeek] = React.useState(0);
  const [seeking, setSeeking] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const [duration, setDuration] = React.useState(0);
  const [showQuestions, setShowQuestions] = React.useState(false);
  const [isAnimationShown, setIsAnimationShown] = React.useState(false);
  const [submittedAnswer, setSubmittedAnswer] = React.useState<boolean>(false);

  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const playbackSpeeds = [1.0, 1.5, 2.0];
  const roundedTime = Math.round(seek * duration);

  const nextQuestion = DUMMY_QUESTIONS.filter((question) => question.timeStamp >= roundedTime)[0];
  console.log(selectedOption, submittedAnswer, !selectedOption || submittedAnswer, "selectedOption, submittedAnswer");
  const submitAnswer = () => {
    setSubmittedAnswer(true);
    if (nextQuestion.correctAnswer === selectedOption) {
      setIsAnimationShown(true);
    } else {
      setTimeout(() => {
        setShowQuestions(false);
        setSelectedOption(null);
        setSubmittedAnswer(false);
        setIsPlaying(true);
      }, 3000);
    }
  };

  useEffect(() => {
    if (nextQuestion && roundedTime === nextQuestion.timeStamp) {
      setShowQuestions(true);
      setIsPlaying(false);
    } else {
      setShowQuestions(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundedTime]);
  return (
    <div className="w-fit group/video relative">
      {!showQuestions && (
        <div className="bg-black/30 backdrop-blur-lg w-full p-4 opacity-0 group-hover/video:opacity-100 transition-all absolute top-0 left-0">
          <p className="text-white line-clamp-1">Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video </p>
        </div>
      )}
      <div onClick={() => setIsPlaying((previous) => !previous)}>
        <ReactPlayer
          url="/videos/dummy-1.mp4"
          volume={volume}
          controls={false}
          ref={playerRef}
          playing={isPlaying}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          playbackRate={playbackRate}
          onDuration={(duration) => setDuration(duration)}
          onProgress={(state) => {
            if (!seeking) setSeek(state.played);
          }}
        />
      </div>
      {isAnimationShown && (
        <div className="absolute top-0 left-[calc(50%-150px)] z-40">
          <Lottie
            animationData={confettiAnimation}
            style={{ width: 400, height: 400 }}
            loop={1}
            onComplete={() => {
              setIsAnimationShown(false);
              setShowQuestions(false);
              setSelectedOption(null);
              setSubmittedAnswer(false);
              setIsPlaying(true);
            }}
          />
        </div>
      )}
      {showQuestions && (
        <div className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-70 p-8 flex items-end z-30">
          <div className="bg-white rounded-2xl text-sm p-4 w-full">
            <p className="pb-4">{nextQuestion.question}</p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {nextQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`rounded-lg p-2 text-left hover:bg-primary hover:bg-opacity-90 hover:text-white transition-all active:scale-95 
                ${
                  option === selectedOption && submittedAnswer && option === nextQuestion.correctAnswer
                    ? "bg-green-700 text-white"
                    : option === selectedOption && submittedAnswer && option !== nextQuestion.correctAnswer
                    ? "bg-red-100 text-red-700"
                    : option === nextQuestion.correctAnswer && submittedAnswer
                    ? "bg-green-700 text-white"
                    : option === selectedOption
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black"
                }
                `}
                  onClick={() => setSelectedOption(option)}
                >
                  <p>{option}</p>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center mt-4">
              <button disabled={!selectedOption || submittedAnswer} onClick={submitAnswer} className="bg-primary hover:bg-opacity-90 active:scale-95 transition-all text-white px-8 py-2 rounded-xl text-xs disabled:bg-gray-400">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {!showQuestions && (
        <div className="bg-black/30 backdrop-blur-lg p-4 flex flex-col opacity-0 group-hover/video:opacity-100 transition-all absolute bottom-0 left-0 w-full">
          <div className="w-full flex flex-col">
            <Slider
              // defaultValue={[seek]}
              max={0.99999}
              step={0.01}
              value={[seek]}
              onPointerUp={(e) => {
                setSeeking(false);
              }}
              onValueCommit={(e) => {
                playerRef?.current?.seekTo(e[0]);
              }}
              onPointerDown={(e: any) => {
                setSeeking(true);
              }}
              onValueChange={(e) => {
                setSeek(e[0]);
              }}
            />
            <div className="flex items-center justify-between text-[0.625rem] mt-1.5">
              <p className="text-white">{formatSeconds(roundedTime)}</p>
              <p className="text-white">{formatSeconds(duration)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex w-16 justify-between">
              {playbackSpeeds.map((speed) => (
                <button key={speed} className={`text-[0.625rem] hover:text-primary transition-all cursor-pointer active:scale-90 ${playbackRate === speed ? "text-primary font-bold" : "text-white"}`} onClick={() => setPlaybackRate(speed)}>
                  {speed}x
                </button>
              ))}
            </div>
            <div className="flex items-center gap-x-8">
              <TbRewindBackward10
                className="text-white hover:text-primary transition-all cursor-pointer active:scale-90"
                onClick={() => {
                  playerRef?.current?.seekTo(roundedTime >= 10 ? (roundedTime - 10) / duration : 0);
                  setSeek(roundedTime >= 10 ? (roundedTime - 10) / duration : 0);
                }}
              />
              {!isPlaying ? <FaPlay className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" onClick={() => setIsPlaying(true)} /> : <FaPause className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" onClick={() => setIsPlaying(false)} />}
              <TbRewindForward10
                className="text-white hover:text-primary transition-all cursor-pointer active:scale-90"
                onClick={() => {
                  playerRef?.current?.seekTo(roundedTime < duration - 10 ? (roundedTime + 10) / duration : 0);
                  setSeek(roundedTime < duration - 10 ? (roundedTime + 10) / duration : 0.99999);
                }}
              />
            </div>
            <div className="flex items-center w-20 gap-x-2">
              {volume > 0 ? <HiSpeakerWave className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" /> : <HiSpeakerXMark className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" />}
              <div className="w-full">
                <SliderWithoutThumb min={0} max={1} step={0.01} value={[volume]} onValueChange={(e) => setVolume(e[0])} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
