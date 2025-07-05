'use client';

import React, { useState } from 'react';
import { Varela_Round } from 'next/font/google';
import AnimatedOnScrollButNotOnLoad from './AnimatedOnScrollButNotOnLoad';

const varela = Varela_Round({ subsets: ['latin'], weight: '400' });

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log('Updated formData:', { ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);

    const result = await fetch('https://talmoshelasaservice2.runmydocker-app.com/submit-details', {
    //   const result = await fetch('http://localhost:3001/test-post', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      alert('Message sent!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <AnimatedOnScrollButNotOnLoad threshold={0.1}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '20rem',
          margin: '40px auto',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          direction: 'rtl',
          fontFamily: 'Arial, sans-serif',
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: '0',
          left: '100%',
          transform: 'translateX(-50%)',
          zIndex: 4,
        }}
        className={varela.className}
        data-aos="fade-up"
      >
        <label
          htmlFor="name"
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          שם מלא
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box',
          }}
          required
        />

        <label
          htmlFor="phone"
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          מספר טלפון
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '30px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box',
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#FFFF00',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            color: 'black',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFDD00')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFFF00')}
        >
          שליחה
        </button>
      </form>
    </AnimatedOnScrollButNotOnLoad>
  );
};

export default Form;
