'use client'
import React from 'react';

const CallToActionButton = () => (
    <button
        style={{
            padding: "0.75em",
            color: "black",
            backgroundColor: '#FFFF00',
            fontSize: "1rem",
            fontWeight: 700,
            transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#FFDD00')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#FFFF00')}
    >
        <a
            style={{ display: 'block', width: '100%', height: '100%', color: 'inherit', textDecoration: 'none' }}
            href="#contact-form"
        >
            דברו איתי - נתחיל לשפר
        </a>
    </button>
);

export default CallToActionButton;