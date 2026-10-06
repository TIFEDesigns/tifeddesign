import React from 'react';

const SKILLS = [
  { name: 'Runway (Gen-3)', type: 'AI Animation', level: 98, icon: 'Zap' },
  { name: 'Midjourney V6', type: 'AI Generation', level: 95, icon: 'Sparkles' },
  { name: 'Pika Labs', type: 'AI Motion', level: 90, icon: 'Film' },
  { name: 'After Effects', type: 'Motion Graphics', level: 96, icon: 'Layers' },
  { name: 'Blender 3D', type: '3D & VFX', level: 88, icon: 'Box' },
  { name: 'ComfyUI & SDXL', type: 'Workflows', level: 94, icon: 'Cpu' },
  { name: 'DaVinci Resolve', type: 'Color & Sound', level: 92, icon: 'Monitor' },
  { name: 'Figma & UI', type: 'Layout Design', level: 85, icon: 'Grid' }
];

export const SkillsGrid: React.FC = () => {
  return (
    <section id="about" className="hud-card">
      <div className='skills-title'>
        <h2 className="section-tag">
            5. Skills & Tools
        </h2>
        <span className='software-mastery'>Tools I use to bring ideas to life</span>
      </div>

      <div className="grid-4">
        {SKILLS.map((skill) => (
          <div 
            key={skill.name}
            className="skill-card"
          >
            <div className="skill-card-header">
              <span className="skill-type">{skill.type}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>

            <h3 className="skill-name">
              {skill.name}
            </h3>

            {/* Level Bar */}
            <div className="skill-bar">
              <div 
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};