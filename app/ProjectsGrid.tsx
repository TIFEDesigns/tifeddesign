
"use client";

import React, { useState } from "react";
import "./ProjectsGrid.css";

type PortfolioProject = {
  id: string;
  category: string;
  client: string;
  year: string;
  title: string;
  tags: string[];
  image: string;
  description: string;
};

const PROJECTS: PortfolioProject[] = [
  {
    id: "01",
    category: "Product Animation",
    client: "Toke Cosmetics",
    year: "2026",
    title: "Shea Butter Product Launch",
    tags: ["Brand Visual", "Product Commercial"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    description:
      "A futuristic product-launch concept combining atmospheric lighting, digital environments, and motion-led visual storytelling.",
  },
  {
    id: "02",
    category: "World Building",
    client: "Toke Cosmetics",
    year: "2026",
    title: "Natural Soap Product Launch",
    tags: ["Brand Visual", "Concept Art"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
    description:
      "An atmospheric world-building study exploring monumental architecture, cinematic environments, and a mysterious futuristic setting.",
  },
  {
    id: "03",
    category: "Character Animation",
    client: "Neon Anima",
    year: "2025",
    title: "Kira // AI Cyber Heroine",
    tags: ["Short Film", "Anime Fusion"],
    image:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=900&q=85",
    description:
      "A cinematic character concept built around dramatic atmosphere, visual mood, and the world of futuristic science fiction.",
  },
  {
    id: "04",
    category: "Motion Graphics",
    client: "Apex Motors",
    year: "2025",
    title: "Hyperdrive Velocity",
    tags: ["Commercial", "3D Motion"],
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    description:
      "A motion-graphics concept inspired by speed, scale, dramatic landscapes, and premium automotive campaign visuals.",
  },
];

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <section id="work" className="section">
      <header className="section-header">
        <div className="section-heading">
          <span className="section-icon" aria-hidden="true">
            ▦
          </span>

        {/*
          <span className="section-number">3.</span> */}

          <h2 className="section-title">
            PROJECTS
          </h2>

          <span className="section-subtitle">
            // CURATED PORTFOLIO
          </span>
        </div>

        <span className="section-status">CLICK FOR DETAILS</span>
      </header>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <button
            type="button"
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="project-image-wrap">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-category">
                {project.category}
              </span>

              <span className="project-open-icon" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>CLIENT: {project.client}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <img
              className="project-modal-image"
              src={selectedProject.image}
              alt=""
            />

            <div className="project-modal-content">
              <span className="project-modal-label">
                // {selectedProject.category.toUpperCase()}
              </span>

              <h3 id="project-modal-title">
                {selectedProject.title}
              </h3>

              <p>{selectedProject.description}</p>

              <div className="project-modal-meta">
                <span>CLIENT: {selectedProject.client}</span>
                <span>YEAR: {selectedProject.year}</span>
              </div>

              <div className="project-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
