import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hud-card grid-2" style={{ alignItems: 'center' }}>
      <div className="hero-content">
        <span className="section-tag">// Welcome to my world</span>
        <h1 className="gradient-title">
          AI ANIMATION <br />
          BEYOND IMAGINATION
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          I create cinematic AI animations, immersive visuals, and interactive experience systems.
        </p>
        <div style={{ marginTop: '12px' }}>
          <a href="#work" className="btn-primary">ENTER THE EXPERIENCE →</a>
        </div>
      </div>
      <div className="hero-preview">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
          alt="AI Animation Preview" 
        />
      </div>
    </section>
  );
};