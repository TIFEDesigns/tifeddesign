
"use client";

import React from "react";
import { Cpu, Sparkles } from "lucide-react";
import type { HeaderProps } from "./types/portfolio";
import "./Header.css";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "LAB", href: "#lab" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export const Header: React.FC<HeaderProps> = ({
  isAiMode,
  setIsAiMode,
}) => {
  return (
    <header className="tifed-header">
      <a className="tifed-brand" href="#home" aria-label="TIFED home">
        <span className="tifed-brand-icon">
          <Cpu size={21} strokeWidth={1.8} />
        </span>

        <span className="tifed-brand-text">
          <strong>TIFED</strong>
          <small>AI ANIMATOR</small>
        </span>
      </a>

      <nav className="tifed-navigation" aria-label="Main navigation">
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={index === 0 ? "tifed-nav-link is-home" : "tifed-nav-link"}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="tifed-header-actions">
        <span className="tifed-header-descriptor">
          AI ANIMATION &amp; VISUAL EXPERIENCES
        </span>

        <button
          type="button"
          className={`tifed-ai-toggle ${isAiMode ? "is-on" : ""}`}
          onClick={() => setIsAiMode((prev) => !prev)}
          aria-pressed={isAiMode}
        >
          <Sparkles size={14} aria-hidden="true" />
          <span>AI DREAM MODE</span>
          <span className="tifed-ai-status">
            {isAiMode ? "ON" : "OFF"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
