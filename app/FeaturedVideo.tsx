"use client";

import React, { useState } from 'react';

export const FeaturedVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="hud-card">
      <span className="section-tag">1. Featured Animation</span>
      <h2 style={{ marginBottom: '16px' }}>The Last Light</h2>
      <div className="hero-preview" style={{ height: '400px', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80" 
          alt="Featured Animation Frame" 
        />
        <button 
          className="btn-primary" 
          style={{ position: 'absolute', bottom: '20px', left: '20px' }}
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying ? 'PAUSE PLAYBACK' : 'PLAY ANIMATION (02:48)'}
        </button>
      </div>
    </section>
  );
};