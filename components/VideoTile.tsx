"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

type VideoTileProps = {
  title?: string;
  subtitle?: string;
  image: string;
  hoverVideo: string;
  filmVideo?: string;
  muxPlaybackId?: string;
};

export default function VideoTile({
  title,
  subtitle,
  image,
  hoverVideo,
  filmVideo,
  muxPlaybackId,
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateHoverSupport = () => {
      setCanHover(hoverQuery.matches);
    };

    updateHoverSupport();
    hoverQuery.addEventListener("change", updateHoverSupport);

    return () => {
      hoverQuery.removeEventListener("change", updateHoverSupport);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!canHover) return;

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

  const openFilm = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className="video-tile"
        role="button"
        tabIndex={0}
        aria-label={`Play ${title || "film"}`}
        onClick={openFilm}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFilm();
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={image}
          alt={title || "Film thumbnail"}
          width={1600}
          height={900}
          sizes="(max-width: 640px) calc(100vw - 32px),
                 (max-width: 900px) 50vw,
                 33vw"
          className="image-fill"
        />

        {canHover && (
          <video
            ref={videoRef}
            src={hoverVideo}
            muted
            loop
            playsInline
            preload="none"
            className="hover-video"
          />
        )}

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
            aria-label="Close film"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {muxPlaybackId ? (
            <MuxPlayer
              playbackId={muxPlaybackId}
              autoPlay
              metadata={{
                video_id: muxPlaybackId,
                video_title: title || "Film",
              }}
              className="fullscreen-video"
            />
          ) : (
            <video
              src={filmVideo}
              autoPlay
              controls
              playsInline
              className="fullscreen-video"
            />
          )}
        </div>
      )}
    </>
  );
}