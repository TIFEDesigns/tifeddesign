"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ContactFormState } from '../types/portfolio';

export const ContactTerminal: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="hud-card">
      <div>

        <div>


          <div style={{ 
            display: 'flex',
            justify: 'space-between',
            padding: '12px',
            marginBottom: '24px',
            borderBottom: '1px solid var(--bg-card-border)' }}>
            <h2>6. CONTACT </h2>
            <h3 style={{ color: 'var(--cyan-accent)' }}>Let's create something amazing</h3>
          </div>

          <div style={{ 
          display: 'flex',
          gap: '1.5rem'
          }}>
            <div style={{ width:'60%'}}>

              <form onSubmit={handleSubmit} className="terminal-box">
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>// ENTER YOUR DETAILS</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Message / Project Brief..." 
                  rows={4} 
                  value={form.message} 
                  onChange={handleChange} 
                  required 
                />
                <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          

          
            <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            padding: '32px',
            gap: '12px',
            marginBottom: '24px',
            width: '40%',
            backgroundColor: '#02040a',
            alignSelf: 'center',
            border: '1px solid var(--bg-card-border)',
            borderRadius: '8px'}}>
              <h3> DIRECT CHANNELS </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                <a href="mailto:tifeddesigns@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <span style={{ padding: '7px', color:'var(--cyan-accent)', backgroundColor: '#1E293B', borderRadius: '3px'}}>@</span>
                  <span>tifeddesigns@gmail.com</span>
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <span style={{ padding: '7px', color:'var(--cyan-accent)', backgroundColor: '#1E293B', borderRadius: '3px'}}>IG</span>
                  <span>tifed_designs</span>
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <span style={{ padding: '7px', color:'var(--cyan-accent)', backgroundColor: '#1E293B', borderRadius: '3px'}}>TT</span>
                  <span>tifed_designs</span>
                </a>
              </div>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
};