import React from 'react';
import { ProcessStep } from './types/portfolio';

const STEPS: ProcessStep[] = [
  { step: '01', title: 'IDEA', desc: 'Concept & Inspiration' },
  { step: '02', title: 'PROMPT', desc: 'AI Generation & Refinement' },
  { step: '03', title: 'ANIMATION', desc: 'Motion & Polish' },
  { step: '04', title: 'FINAL RENDER', desc: 'Color & Sound' },
];

export const ProcessPipeline: React.FC = () => {
  return (
    <section className="hud-card">
      <span className="section-tag">4. The Process</span>
      <h3 style={{ marginBottom: '16px' }}>From idea to final frame</h3>

      <div className="grid-4">
        {STEPS.map((s) => (
          <div key={s.step} style={{ borderLeft: '2px solid var(--cyan-accent)', paddingLeft: '12px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--cyan-accent)', fontFamily: 'var(--font-mono)' }}>
              {s.step}
            </span>
            <h4 style={{ fontSize: '0.9rem', margin: '4px 0' }}>{s.title}</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};