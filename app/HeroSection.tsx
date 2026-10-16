
import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <main className="hero-shell">
      <section id="home" className="hero-panel">
        <div className="hero-content">
          <span className="section-tag">
            <span className="tag-bolt">ϟ</span>
            WELCOME TO MY WORLD // NEXT-GEN AI ANIMATION
          </span>

          <h1 className="gradient-title">
            <span className="title-white">AI ANIMATION</span>
            <span className="title-cyan">BEYOND</span>
            <span className="title-gradient">IMAGINATION</span>
          </h1>

          <p className="hero-description">
            I create cinematic AI animations, immersive generative
            visuals, and interactive digital experiences that bring
            high-concept futuristic ideas to life.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              ENTER THE EXPERIENCE <span>›</span>
            </a>

            <a href="#lab" className="btn-secondary">
              <span className="sliders-icon">☷</span>
              OPEN AI LAB
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>120+</strong>
              <span>AI SCENES GENERATED</span>
            </div>

            <div className="stat-item">
              <strong>60 FPS</strong>
              <span>FLUID INTERPOLATION</span>
            </div>

            <div className="stat-item">
              <strong>4K RES</strong>
              <span>ULTRA HD RENDER</span>
            </div>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-artwork" aria-hidden="true">
          </div>

          <div className="preview-label">
            <span>// LIVE CANVAS PREVIEW</span>
            <span className="ready-status">
              <i /> READY
            </span>
          </div>

          <div className="preview-caption">
            <span className="featured-label">// FEATURED REEL</span>
            <h2>The Last Light — Sci-Fi Short</h2>

            <a href="#work" className="watch-button">
              <span>▶</span> WATCH FULL FILM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
