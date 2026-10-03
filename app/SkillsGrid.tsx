import React from 'react';

const TOOLS: string[] = [
  'Runway (Gen-3)', 
  'Midjourney', 
  'Pika Labs', 
  'After Effects', 
  'Blender 3D', 
  'DaVinci Resolve', 
  'Photoshop', 
  'Figma'
];

export const SkillsGrid: React.FC = () => {
  return (
    <section id="about" className="hud-card">
      <span className="section-tag">5. Skills & Tools</span>
      <h3 style={{ marginBottom: '16px' }}>Tools I use to bring ideas to life</h3>

      <div className="grid-4">
        {TOOLS.map((tool, idx) => (
          <div 
            key={idx} 
            style={{ 
              background: 'rgba(0,0,0,0.4)', 
              border: '1px solid var(--bg-card-border)', 
              borderRadius: '8px', 
              padding: '12px', 
              textAlign: 'center',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
};