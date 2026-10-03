import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--bg-card-border)', 
      paddingTop: '24px', 
      display: 'flex', 
      justify: 'space-between', 
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'

    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px'}}>
        <div>TIFED © 2026 • AI ANIMATION & VISUAL EXPERIENCES. ALL RIGHTS RESERVED </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--cyan-accent)', fontSize: '0.7rem' }}>
            ENGINEERED WITH REACT, TAILWIND CSS & CANVAS SHADERS
          </p>
        </div>
      </div>
    </footer>
  );
};