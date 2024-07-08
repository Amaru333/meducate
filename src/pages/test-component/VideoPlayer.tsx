"use client";
import React from "react";
import ReactPlayer from "react-player";

import { FaPlay, FaPause } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import { formatSeconds } from "../../../utils/functions";
import { Slider } from "@/components/ui/slider";
import { SliderWithoutThumb } from "@/components/ui/sliderWithoutThumb";

function VideoPlayer({ playerRef }: { playerRef: any }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackRate, setPlaybackRate] = React.useState(1.0);
  const [seek, setSeek] = React.useState(0);
  const [seeking, setSeeking] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const [duration, setDuration] = React.useState(0);

  const playbackSpeeds = [1.0, 1.5, 2.0];

  return (
    <div className="w-fit group/video relative">
      <div className="bg-black w-full p-4 opacity-0 group-hover/video:opacity-90 transition-all absolute top-0 left-0">
        <p className="text-white line-clamp-1">Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video Title of the video </p>
      </div>
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
      <div className="bg-black p-4 flex flex-col opacity-0 group-hover/video:opacity-90 transition-all absolute bottom-0 left-0 w-full">
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
            <p className="text-white">{formatSeconds(seek * duration)}</p>
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
                playerRef?.current?.seekTo(seek * duration >= 10 ? (seek * duration - 10) / duration : 0);
                setSeek(seek * duration >= 10 ? (seek * duration - 10) / duration : 0);
              }}
            />
            {!isPlaying ? <FaPlay className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" onClick={() => setIsPlaying(true)} /> : <FaPause className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" onClick={() => setIsPlaying(false)} />}
            <TbRewindForward10
              className="text-white hover:text-primary transition-all cursor-pointer active:scale-90"
              onClick={() => {
                playerRef?.current?.seekTo(seek * duration < duration - 10 ? (seek * duration + 10) / duration : 0);
                setSeek(seek * duration < duration - 10 ? (seek * duration + 10) / duration : 0.99999);
              }}
            />
          </div>
          <div className="flex items-center w-20 gap-x-2">
            {volume > 0 ? <HiSpeakerWave className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" /> : <HiSpeakerXMark className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" />}
            <div className="w-full">
              <SliderWithoutThumb min={0} max={1} step={0.01} value={[volume]} onValueChange={(e) => setVolume(e[0])} />
            </div>
            {/* <HiSpeakerXMark className="text-white hover:text-primary transition-all cursor-pointer active:scale-90" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
