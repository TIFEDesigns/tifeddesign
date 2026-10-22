
"use client";

import React, { useState } from "react";
import "./TheLab.css";

type StylePreset =
  | "Cyberpunk"
  | "Anime"
  | "Photorealistic"
  | "Dark Fantasy";

export const TheLab: React.FC = () => {
  const [prompt, setPrompt] = useState(
    "A cyberpunk neon cityscape at sunset, flying vehicles, cinematic lighting, ultra-detailed --motion 8.5"
  );

  const [preset, setPreset] = useState<StylePreset>("Cyberpunk");
  const [motion, setMotion] = useState(7.5);
  const [styleWeight, setStyleWeight] = useState(85);
  const [glitch, setGlitch] = useState(2);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handlePreset = (style: StylePreset) => {
    setPreset(style);
    setGenerated(false);

    const prompts: Record<StylePreset, string> = {
      Cyberpunk:
        "A cyberpunk neon cityscape at sunset, flying vehicles, cinematic lighting, ultra-detailed --motion 8.5",
      Anime:
        "A cinematic anime scene, expressive characters, dramatic lighting, flowing movement",
      Photorealistic:
        "A photorealistic cinematic landscape, natural lighting, intricate details, atmospheric depth",
      "Dark Fantasy":
        "A dark fantasy world, ancient ruins, mystical fog, glowing magic, cinematic atmosphere",
    };

    setPrompt(prompts[style]);
  };

  return (
    <section id="lab" className="section">
      <header className="section-header">
        <div className="section-heading">
          <span className="section-icon">☷</span>

        {/*
          <span className="section-number">2.</span> */}

          <h2 className="section-title">
            THE LAB
          </h2>
          <span className="section-subtitle">
            // AI GENERATIVE SANDBOX
          </span>
        </div>

        <span className="lab-badge">INTERACTIVE GENERATOR</span>
      </header>

      <div className="lab-layout">
        {/* LEFT: GENERATOR CONTROLS */}
        <div className="lab-controls">
          <div className="prompt-heading">
            <label htmlFor="lab-prompt">PROMPT INPUT</label>
            <span>STABLE DIFFUSION / ANIMATEDIFF</span>
          </div>

          <div className="prompt-box">
            <textarea
              id="lab-prompt"
              value={prompt}
              onChange={(event) => {
                setPrompt(event.target.value);
                setGenerated(false);
              }}
              placeholder="Describe your animation..."
              rows={3}
            />

            <button
              type="button"
              className="prompt-clear"
              onClick={() => {
                setPrompt("");
                setGenerated(false);
              }}
            >
              CLEAR / SAMPLE
            </button>
          </div>

          <div className="presets-section">
            <p className="control-label">// STYLE PRESETS</p>

            <div className="preset-grid">
              {(
                [
                  "Cyberpunk",
                  "Anime",
                  "Photorealistic",
                  "Dark Fantasy",
                ] as StylePreset[]
              ).map((style) => (
                <button
                  key={style}
                  type="button"
                  className={`preset-button ${
                    preset === style ? "active" : ""
                  }`}
                  onClick={() => handlePreset(style)}
                  aria-pressed={preset === style}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="lab-divider" />

          <div className="lab-slider-group">
            <div className="slider-heading">
              <label htmlFor="motion-slider">MOTION SCALE</label>
              <strong>{motion.toFixed(1)}x</strong>
            </div>

            <input
              id="motion-slider"
              className="lab-range cyan-range"
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={motion}
              onChange={(event) => {
                setMotion(Number(event.target.value));
                setGenerated(false);
              }}
            />
          </div>

          <div className="lab-slider-group">
            <div className="slider-heading">
              <label htmlFor="weight-slider">STYLE WEIGHT</label>
              <strong>{styleWeight}%</strong>
            </div>

            <input
              id="weight-slider"
              className="lab-range cyan-range"
              type="range"
              min="0"
              max="100"
              value={styleWeight}
              onChange={(event) => {
                setStyleWeight(Number(event.target.value));
                setGenerated(false);
              }}
            />
          </div>

          <div className="lab-slider-group">
            <div className="slider-heading">
              <label htmlFor="glitch-slider">
                GLITCH / ARTIFACT FACTOR
              </label>
              <strong className="glitch-value">{glitch}</strong>
            </div>

            <input
              id="glitch-slider"
              className="lab-range pink-range"
              type="range"
              min="0"
              max="5"
              step="1"
              value={glitch}
              onChange={(event) => {
                setGlitch(Number(event.target.value));
                setGenerated(false);
              }}
            />
          </div>

          <div className="lab-meta">
            <span>SEED: 482910</span>
            <span>FPS: 60</span>
          </div>

          <button
            type="button"
            className="lab-generate-button"
            onClick={handleGenerate}
            disabled={!prompt.trim()}
          >
            <span>✧</span>
            {generated ? "PREVIEW PARAMETERS UPDATED" : "GENERATE ANIMATION CANVAS"}
          </button>
        </div>

        {/* RIGHT: VISUAL PREVIEW */}
        <div className="lab-output">
          <div
            className={`shader-canvas ${
              generated ? "shader-updated" : ""
            }`}
            data-style={preset}
            style={
              {
                "--motion-speed": `${11 - motion}s`,
                "--glitch-opacity": glitch / 10,
                "--style-weight": styleWeight / 100,
              } as React.CSSProperties
            }
          >
            <div className="canvas-top-line" />

            <div className="canvas-mode">
              MODE: {preset.toUpperCase()} // MOTION: {motion.toFixed(1)}x
            </div>

            <div
              className="pixel-field"
              aria-label={`${preset} style shader visualization`}
              role="img"
            >
              <div className="pixel-cloud pixel-cloud-left" />
              <div className="pixel-cloud pixel-cloud-right" />
              <div className="pixel-cloud pixel-cloud-bottom-left" />
              <div className="pixel-cloud pixel-cloud-bottom-right" />

              <svg
                className="shader-wave"
                viewBox="0 0 620 260"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 155 C35 165 48 185 76 164 S125 128 145 90 S190 35 221 60 S258 140 285 148 S320 190 347 164 S390 130 415 86 S455 42 481 65 S520 105 542 140 S585 175 620 155"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <div className="shader-scanline" />
            </div>

            <span className="shader-caption">
              REAL-TIME SHADER SIMULATION
            </span>
          </div>

          {/* TERMINAL */}
          <div className="lab-terminal" aria-live="polite">
            <p className="terminal-line terminal-muted">
              <span>&gt;</span>{" "}
              {generated
                ? "PREVIEW PARAMETERS UPDATED"
                : "INITIALIZING GENERATIVE ENVIRONMENT..."}
            </p>

            <p className="terminal-line terminal-green">
              <span>&gt;</span>{" "}
              {generated
                ? `STYLE: ${preset.toUpperCase()} | MOTION: ${motion.toFixed(1)}x | WEIGHT: ${styleWeight}%`
                : "LATENT SPACE LOADED: 1024x1024 MODEL READY"}
            </p>

            {generated && (
              <p className="terminal-line terminal-cyan">
                <span>&gt;</span>{" "}
                GLITCH: {glitch} | SEED: 482910 | SIMULATION READY
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLab;
