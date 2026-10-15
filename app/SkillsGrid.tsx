
import React from "react";
import { Cpu } from "lucide-react";
import "./SkillsGrid.css";

type Skill = {
  name: string;
  type: string;
  level: number;
};

const SKILLS: Skill[] = [
  { name: "Runway (Gen-3)", type: "AI Animation", level: 98 },
  { name: "Midjourney V6", type: "AI Generation", level: 95 },
  { name: "Pika Labs", type: "AI Motion", level: 90 },
  { name: "After Effects", type: "Motion Graphics", level: 96 },
  { name: "Blender 3D", type: "3D & VFX", level: 88 },
  { name: "ComfyUI & SDXL", type: "Workflows", level: 94 },
  { name: "DaVinci Resolve", type: "Color & Sound", level: 92 },
  { name: "Figma & UI", type: "Layout Design", level: 85 },
];

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <div className="skills-heading">
          <Cpu
            className="skills-heading-icon"
            size={19}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <h2>
            <span className="skills-section-number">7.</span>
            SKILLS &amp; TOOLS
          </h2>

          <span className="skills-heading-subtitle">
            // TECH STACK
          </span>
        </div>

        <span className="skills-header-status">
          SOFTWARE MASTERY
        </span>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-card-header">
              <span className="skill-type">{skill.type}</span>

              <span
                className="skill-level"
                aria-label={`${skill.level} percent`}
              >
                {skill.level}%
              </span>
            </div>

            <h3 className="skill-name">{skill.name}</h3>

            <div
              className="skill-bar"
              role="progressbar"
              aria-label={`${skill.name} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.level}
            >
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
