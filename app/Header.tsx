"use client";

import React from 'react';
import { HeaderProps } from '../types/portfolio';

export const Header: React.FC<HeaderProps> = ({ isAiMode, setIsAiMode }) => {
  return (
    <header className="header-bar">
      <div className="logo">TIFED</div>
      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#work">WORK</a>
        <a href="#lab">LAB</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <button 
        className="btn-primary" 
        style={{ fontSize: '0.75rem', padding: '6px 16px' }}
        onClick={() => setIsAiMode((prev) => !prev)}
      >
        AI MODE: {isAiMode ? 'ON' : 'OFF'}
      </button>
    </header>
  );
};