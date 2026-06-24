"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type VideoTileProps = {
  title?: string;
  subtitle?: string;
  image: string;
  hoverVideo: string;
  filmVideo: string;
};

export default function VideoTile({
  title,
  subtitle,
  image,
  hoverVideo,
  filmVideo,
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    video.play().catch(() => {});

    video.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.style.opacity = "0";
  };

  return (
    <>
      <div
        className="video-tile"
        onClick={() => setOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={image}
          alt={title || "thumbnail"}
          width={1600}
          height={900}
          className="image-fill"
        />

        <video
          ref={videoRef}
          src={hoverVideo}
          muted
          loop
          playsInline
          className="hover-video"
        />

        {(title || subtitle) && (
          <div className="tile-text">
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
      </div>

      {open && (
        <div
          className="fullscreen-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <video
            src={filmVideo}
            autoPlay
            controls
            className="fullscreen-video"
          />
        </div>
      )}
    </>
  );
}