
"use client";

import React, { useState } from "react";
import "./ProcessPipeline.css";

type ProcessStage = {
  step: string;
  title: string;
  subtitle: string;
  phase: string;
  desc: string;
  detail: string;
  checklist: string;
};

const STEPS: ProcessStage[] = [
  {
    step: "01",
    title: "IDEA & STORYBOARD",
    subtitle: "Concept & Narrative Architecture",
    phase: "PHASE 1",
    desc: "Defining core visual moodboards, script beats, style tokens, and camera movement blueprints before AI diffusion.",
    detail:
      "Drafting text prompts, camera angles (pan, zoom, orbit), lighting tokens, and color palettes.",
    checklist: "TEMPORAL CONSISTENCY VERIFIED",
  },
  {
    step: "02",
    title: "PROMPT & LATENT SPACE",
    subtitle: "AI Generation & Seed Tuning",
    phase: "PHASE 2",
    desc: "Generating keyframe sequences in Midjourney or ComfyUI with ControlNet pose and depth maps for frame stability.",
    detail:
      "Refining prompts, testing seeds, and exploring compositions until the visual direction feels right.",
    checklist: "VISUAL DIRECTION ESTABLISHED",
  },
  {
    step: "03",
    title: "ANIMATION & INTERPOLATION",
    subtitle: "Motion Vectors & RIFE 60fps",
    phase: "PHASE 3",
    desc: "Synthesizing temporal flow through AnimateDiff, Runway Gen-3, and optical flow frame interpolation.",
    detail:
      "Building movement from selected keyframes, refining transitions, and smoothing motion between frames.",
    checklist: "MOTION FLOW REVIEWED",
  },
  {
    step: "04",
    title: "FINAL RENDER & POLISH",
    subtitle: "Color Grading, Audio & 3D Composite",
    phase: "PHASE 4",
    desc: "Upscaling to 4K ProRes via Topaz Video AI, compositing extra 3D VFX in Blender, and mastering spatial audio.",
    detail:
      "Finishing the visual grade, refining effects, balancing sound, and preparing the final export.",
    checklist: "FINAL OUTPUT QUALITY CHECKED",
  },
];

const WORKFLOW_IMAGE =
  "https://images.unsplash.com/photo-1593078166033-9b0b8d8a1e9b?auto=format&fit=crop&w=1200&q=85";

export const ProcessPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = STEPS[activeStep];

  return (
    <section id="process" className="process-section">
      <header className="process-header">
        <div className="process-heading">
          <span className="process-icon" aria-hidden="true">
            ◈
          </span>

          <h2>
            <span>4.</span> THE PROCESS
          </h2>

          <span className="process-subtitle">
            // PRODUCTION PIPELINE
          </span>
        </div>

        <span className="process-count">4-STEP WORKFLOW</span>
      </header>

      {/* FOUR PROCESS STAGES */}
      <div className="process-steps">
        {STEPS.map((step, index) => (
          <button
            key={step.step}
            type="button"
            className={`process-card ${
              activeStep === index ? "is-active" : ""
            }`}
            onClick={() => setActiveStep(index)}
            aria-pressed={activeStep === index}
          >
            <div className="process-card-top">
              <span className="process-number">{step.step}</span>
              <span className="process-phase">{step.phase}</span>
            </div>

            <h3>{step.title}</h3>
            <p className="process-card-subtitle">{step.subtitle}</p>
            <p className="process-card-description">{step.desc}</p>
          </button>
        ))}
      </div>

      {/* SELECTED STAGE DETAILS */}
      <div className="process-feature">
        <div className="process-image-wrap">
          <img
            src={WORKFLOW_IMAGE}
            alt="Creative production workspace"
            className="process-image"
            loading="lazy"
          />

          <div className="process-image-overlay" />

          <span className="process-image-tag">
            ACTIVE PHASE VISUAL // {currentStep.step}
          </span>
        </div>

        <div className="process-details" aria-live="polite">
          <span className="process-detail-label">
            // WORKFLOW SPECIFICATION
          </span>

          <span className="process-detail-phase">
            {currentStep.phase}
          </span>

          <h3>{currentStep.title}</h3>

          <p className="process-detail-description">
            {currentStep.detail}
          </p>

          <div className="process-verification">
            <span className="verification-icon" aria-hidden="true">
              ✓
            </span>
            <span>{currentStep.checklist}</span>
          </div>

          <div className="process-navigation">
            <span>
              STEP {currentStep.step} / 04
            </span>

            <div className="process-navigation-buttons">
              <button
                type="button"
                onClick={() =>
                  setActiveStep((activeStep + STEPS.length - 1) % STEPS.length)
                }
                aria-label="Previous process step"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveStep((activeStep + 1) % STEPS.length)
                }
                aria-label="Next process step"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPipeline;
