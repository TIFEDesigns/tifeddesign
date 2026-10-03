import React from 'react';
import { Project } from '../types/portfolio';

const PROJECTS: Project[] = [
  { id: '01', title: 'Product Animation', category: 'Brand Visual • 2026' },
  { id: '02', title: 'World Building', category: 'AI Landscape • 2026' },
  { id: '03', title: 'Character Animation', category: 'Short Film • 2026' },
  { id: '04', title: 'Motion Graphics', category: 'Commercial • 2026' },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <section id="work" className="hud-card">
      <span className="section-tag">3. Projects</span>
      <h3 style={{ marginBottom: '16px' }}>Ideas in motion</h3>

      <div className="grid-4">
        {PROJECTS.map((project) => (
          <div key={project.id} className="hud-card" style={{ padding: '16px' }}>
            <div style={{ height: '120px', background: '#111827', borderRadius: '8px', marginBottom: '12px' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--cyan-accent)' }}>{project.id}</span>
            <h4 style={{ fontSize: '0.95rem' }}>{project.title}</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};