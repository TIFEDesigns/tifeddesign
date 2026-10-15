import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="contact-footer">
        <p>
          © {new Date().getFullYear()} TIFED — AI ANIMATION & DIGITAL
          EXPERIENCES. ALL RIGHTS RESERVED.
        </p>

        <span>ENGINEERED WITH REACT, CSS & CANVAS SHADERS</span>
      </footer>
  );
};