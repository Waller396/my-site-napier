"use client";

import MuxPlayer from "@mux/mux-player-react";

type MuxVideoPlayerProps = {
  playbackId: string;
  title: string;
};

export default function MuxVideoPlayer({
  playbackId,
  title,
}: MuxVideoPlayerProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      metadata={{
        video_id: playbackId,
        video_title: title,
      }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
