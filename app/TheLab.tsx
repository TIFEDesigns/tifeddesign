"use client";

import React, { useState, ChangeEvent } from 'react';

export const TheLab: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [motion, setMotion] = useState<number>(50);

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleMotionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMotion(Number(e.target.value));
  };

  return (
    <section id="lab" className="hud-card">
      <span className="section-tag">2. The Lab</span>
      <h3 style={{ marginBottom: '12px' }}>Interactive AI Playground</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
        Test parameters and trigger generative canvas state shifts.
      </p>

      <div className="lab-input-box">
        <input 
          type="text" 
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Describe animation prompt..." 
        />
      </div>

      <div className="slider-group">
        <label>MOTION SCALE: {motion}%</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={motion}
          onChange={handleMotionChange}
        />
      </div>

      <button className="btn-primary" style={{ marginTop: '16px', width: '100%' }}>
        GENERATE LATENT PREVIEW
      </button>
    </section>
  );
};