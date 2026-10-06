"use client";

import React, { useState } from 'react';
import './globals.css';

import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeaturedVideo } from './FeaturedVideo';
import { TheLab } from './TheLab';
import { ProjectsGrid } from './ProjectsGrid';
import { ProcessPipeline } from './ProcessPipeline';
import { SkillsGrid } from './SkillsGrid';
import { Footer } from './Footer';

export default function Home(): React.JSX.Element {
  const [isAiMode, setIsAiMode] = useState<boolean>(true);

  return (
    <div className={`app-wrapper ${isAiMode ? 'ai-dream-mode' : ''}`}>
      <div className="container">
        <Header isAiMode={isAiMode} setIsAiMode={setIsAiMode} />
        <HeroSection />
        <FeaturedVideo />
        <TheLab />
        <ProjectsGrid />
        <ProcessPipeline />
        <SkillsGrid />
        <ContactTerminal />
        <Footer />
      </div>
    </div>
  );
}