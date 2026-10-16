
"use client";

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import "./Contact.css";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject details:\n${form.message}`
    );

    window.location.href =
      `mailto:tifeddesigns@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>

          <span className="section-number">06.</span>

          <h2 className="section-title">LET'S CONNECT</h2>

          <span className="section-subtitle">
            // PROJECT INQUIRIES
          </span>
        </div>

        <span className="section-status">OPEN FOR PROJECTS</span>
      </div>



      <div className="contact-layout">
        <div className="contact-terminal">
          <div className="contact-card-heading">
            <span>START A CONVERSATION</span>
            <span className="contact-card-meta">NEW INQUIRY / 01</span>
          </div>

          <p className="contact-form-intro">
            Have an idea for an AI animation, product visual, or creative
            project? Tell me a little about it.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">YOUR NAME</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">EMAIL ADDRESS</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">PROJECT DETAILS</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Describe your idea, deliverables, or timeline..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              <span>SEND INQUIRY</span>
              <Send size={15} aria-hidden="true" />
            </button>

            <p className="contact-form-note">
              Your email app will open with your message prepared for you to send.
            </p>
          </form>
        </div>

        <aside className="contact-sidebar">
          <div className="contact-channels">
            <div className="contact-card-heading">
              <span>DIRECT CHANNELS</span>
              <span className="contact-card-meta">03 AVAILABLE</span>
            </div>

            <a
              className="contact-channel"
              href="mailto:tifeddesigns@gmail.com"
            >
              <span className="contact-channel-symbol">@</span>
              <span className="contact-channel-details">
                <small>EMAIL</small>
                <span>tifeddesigns@gmail.com</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <a
              className="contact-channel"
              href="https://www.instagram.com/tifed_designs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-symbol">IG</span>
              <span className="contact-channel-details">
                <small>INSTAGRAM</small>
                <span>@tifed_designs</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <a
              className="contact-channel"
              href="https://www.tiktok.com/@tifed_designs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-symbol">TT</span>
              <span className="contact-channel-details">
                <small>TIKTOK</small>
                <span>@tifed_designs</span>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="contact-availability">
            <span className="contact-availability-dot" />
            <div>
              <span>GOT AN IDEA?</span>
              <p>Let's explore what we can create together.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
