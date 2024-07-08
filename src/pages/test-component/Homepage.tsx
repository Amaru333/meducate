"use client";
import React from "react";
import { BaseReactPlayerProps } from "react-player/base";
import dynamic from "next/dynamic";
const VideoPlayer = dynamic(() => import("./VideoPlayer"), { ssr: false });

function Homepage() {
  const playerRef = React.useRef<BaseReactPlayerProps>(null);
  return <VideoPlayer playerRef={playerRef} />;
}

export default Homepage;
