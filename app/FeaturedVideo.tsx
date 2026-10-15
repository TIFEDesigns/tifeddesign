
"use client";

import React, { useRef, useState } from "react";
import { Maximize2, Pause, Play } from "lucide-react";
import "./FeaturedVideo.css";

type AnimationProject = {
  id: number;
  title: string;
  category: string;
  duration: string;
  poster: string;
  video: string;
  description: string;
  tools: string[];
};

const ANIMATIONS: AnimationProject[] = [
  {
    id: 1,
    title: "The Last Light",
    category: "AI SHORT FILM",
    duration: "02:48",
    poster:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    video: "/videos/the-last-light.mp4",
    description:
      "A dark sci-fi animation created using Midjourney V6, Runway Gen-3 Alpha, and AnimateDiff with custom LoRAs.",
    tools: ["Runway Gen-3", "ComfyUI", "AnimateDiff"],
  },
  {
    id: 2,
    title: "Cyber Genesis: Reborn",
    category: "WORLD BUILDING",
    duration: "01:35",
    poster:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85",
    video: "/videos/cyber-genesis.mp4",
    description:
      "A futuristic visual journey exploring character design, atmospheric lighting, and AI-generated environments.",
    tools: ["Midjourney", "Runway", "After Effects"],
  },
  {
    id: 3,
    title: "Neon Soul / Android Awakening",
    category: "CHARACTER RIGGING",
    duration: "03:12",
    poster:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    video: "/videos/neon-soul.mp4",
    description:
      "A cinematic character concept combining futuristic environments, motion design, and atmospheric visual effects.",
    tools: ["Blender 3D", "ComfyUI", "DaVinci Resolve"],
  },
];

export const FeaturedVideo: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = ANIMATIONS[selectedIndex];

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) return "00:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        // The video may be missing or playback may be blocked.
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  const selectAnimation = (index: number) => {
    setSelectedIndex(index);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  const seekVideo = (value: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    video.currentTime = value;
    setCurrentTime(value);
  };

  const openFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await video.requestFullscreen();
      }
    } catch {
      // Fullscreen may not be available in every browser.
    }
  };

  return (
    <section id="featured" className="featured-section">
      {/* SECTION HEADER */}
      <div className="featured-header">
        <div className="featured-heading">
          <span className="featured-heading-icon" aria-hidden="true">
            ▦
          </span>

          <h2>
            <span>1.</span> FEATURED ANIMATION
          </h2>
        </div>

        <span className="featured-counter">
          SELECT FILM ({selectedIndex + 1}/
          {String(ANIMATIONS.length).padStart(2, "0")})
        </span>
      </div>

      {/* FEATURED PLAYER + PLAYLIST */}
      <div className="featured-layout">
        <div className="featured-player">
          <div className="featured-screen">
            <video
              key={featured.id}
              ref={videoRef}
              className="featured-video"
              poster={featured.poster}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onLoadedMetadata={(e) =>
                setDuration(e.currentTarget.duration)
              }
              onTimeUpdate={(e) =>
                setCurrentTime(e.currentTarget.currentTime)
              }
            >
              <source src={featured.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>

            <div className="featured-screen-top">
              <span className="featured-film-label">
                {featured.category === "AI SHORT FILM"
                  ? "AI Short Film"
                  : featured.category}{" "}
                · 2026
              </span>

              <span className="featured-duration">
                {duration > 0
                  ? formatTime(duration)
                  : featured.duration}
              </span>
            </div>

            {!isPlaying && (
              <button
                type="button"
                className="featured-play-overlay"
                onClick={togglePlayback}
                aria-label={`Play ${featured.title}`}
              >
                <Play size={27} fill="currentColor" />
              </button>
            )}

            <div className="featured-player-controls">
              <input
                className="featured-progress"
                type="range"
                min={0}
                max={duration || 100}
                step="0.1"
                value={duration > 0 ? Math.min(currentTime, duration) : 0}
                onChange={(e) => seekVideo(Number(e.target.value))}
                aria-label="Video playback position"
                style={{
                  "--progress": `${
                    duration > 0 ? (currentTime / duration) * 100 : 0
                  }%`,
                } as React.CSSProperties}
              />

              <div className="featured-control-row">
                <button
                  type="button"
                  className="featured-inline-play"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause animation" : "Play animation"}
                >
                  {isPlaying ? (
                    <Pause size={17} fill="currentColor" />
                  ) : (
                    <Play size={17} fill="currentColor" />
                  )}
                </button>

                <span className="featured-now-playing">
                  {featured.title}
                </span>

                <div className="featured-tool-tags">
                  {featured.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="featured-fullscreen"
                  onClick={openFullscreen}
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 size={15} />
                </button>
              </div>
            </div>
          </div>

          <p className="featured-description">{featured.description}</p>
        </div>

        {/* SELECTABLE FILM LIST */}
        <aside className="featured-playlist">
          <div className="featured-playlist-label">
            // SELECT FEATURED REEL
          </div>

          <div className="featured-playlist-items">
            {ANIMATIONS.map((animation, index) => (
              <button
                type="button"
                key={animation.id}
                className={`featured-list-item ${
                  selectedIndex === index ? "is-selected" : ""
                }`}
                onClick={() => selectAnimation(index)}
                aria-pressed={selectedIndex === index}
              >
                <div className="featured-thumbnail">
                  <img src={animation.poster} alt="" loading="lazy" />

                  {selectedIndex === index && (
                    <span className="featured-thumbnail-play">
                      <Play size={17} fill="currentColor" />
                    </span>
                  )}
                </div>

                <div className="featured-list-info">
                  <span className="featured-list-category">
                    {animation.category}
                  </span>

                  <span className="featured-list-title">
                    {animation.title}
                  </span>

                  <span className="featured-list-duration">
                    DURATION: {animation.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FeaturedVideo;
