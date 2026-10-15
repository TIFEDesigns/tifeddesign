
"use client";

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import "./Contact.css";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // This is a frontend demo. Connect an email service or API
    // before treating a submission as a message that was delivered.
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject brief:\n${form.message}`
    );

    window.location.href =
      `mailto:tifeddesigns@gmail.com?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-layout">
          {/* LEFT: TERMINAL CONTACT FORM */}
          <div className="contact-terminal">
            <div className="terminal-header">
              <div className="terminal-window-dots" aria-hidden="true">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
              </div>

              <span className="terminal-filename">
                prompt_commission.sh
              </span>

              <span className="terminal-version">
                TIFED_TERMINAL_V4
              </span>
            </div>

            {formSubmitted ? (
              <div className="contact-success" role="status">
                <CheckCircle2
                  className="contact-success-icon"
                  size={42}
                  aria-hidden="true"
                />

                <h2>COMMISSION PROMPT PREPARED</h2>

                <p>
                  Your email application should open with your project
                  inquiry ready to send. Complete the send action there
                  to deliver your message.
                </p>

                <button
                  type="button"
                  className="contact-reset-button"
                  onClick={() => setFormSubmitted(false)}
                >
                  SEND ANOTHER PROMPT
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    <span aria-hidden="true">&gt;</span> INPUT YOUR NAME:
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g., Sarah Connor"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    <span aria-hidden="true">&gt;</span> INPUT YOUR EMAIL:
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="e.g., sarah@cyberdyne.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    <span aria-hidden="true">&gt;</span> PROMPT BRIEF / PROJECT DETAILS:
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Describe project concept, timeline, budget range..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit">
                  <Send size={15} aria-hidden="true" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: CONTACT CHANNELS AND FEATURED IMAGE */}
          <aside className="contact-sidebar">
            <div className="contact-channels">
              <h2>DIRECT CHANNELS</h2>

              <a
                className="contact-channel"
                href="mailto:tifeddesigns@gmail.com"
              >
                <span className="contact-channel-icon" aria-hidden="true">
                  @
                </span>
                <span>tifeddesigns@gmail.com</span>
              </a>

              <a
                className="contact-channel"
                href="https://www.instagram.com/tifed_designs/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-channel-icon" aria-hidden="true">
                  IG
                </span>
                <span>@tifed_designs</span>
              </a>

              <a
                className="contact-channel"
                href="https://www.tiktok.com/@tifed_designs"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-channel-icon" aria-hidden="true">
                  TT
                </span>
                <span>@tifed_designs</span>
              </a>
            </div>

            <div className="contact-artwork">
              <img
                src="/images/contact-character.webp"
                alt="Featured AI animation character artwork"
                loading="lazy"
              />

              <div className="contact-artwork-overlay" />

              <p>"Not just a portfolio... but an experience."</p>
            </div>
          </aside>
        </div>
      </section>

    </>
  );
};

export default Contact;
