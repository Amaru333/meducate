"use client";
import React from "react";
import { BaseReactPlayerProps } from "react-player/base";
import dynamic from "next/dynamic";
const ReactPlayerWrapper = dynamic(() => import("./ReactPlayerWrapper"), { ssr: false });

function VideoPlayer() {
  const playerRef = React.useRef<BaseReactPlayerProps>(null);
  return <ReactPlayerWrapper playerRef={playerRef} />;
}

export default VideoPlayer;
