// components/CallToActionSection.tsx
'use client'; // This component will be a client component
import "../components-css/CallToActionSection.css"; 

import React, { useEffect, useState } from "react";
import ContainerLaptop from "./ContainerLaptop"; // Adjust path as needed
// Assuming 'varela' is a font object you're importing, e.g., from next/font/google
import { Varela_Round } from 'next/font/google'; // Example import for varela font


import { Playpen_Sans_Hebrew } from 'next/font/google';

const varela = Varela_Round({ subsets: ['latin'], weight: '400' });

const CallToActionSection: React.FC = () => {
    // State to control when animations should start
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Set isAnimated to true after the initial render, triggering both animations
        setIsAnimated(true);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div
            className={`call-to-action-container`}
            style={{
                width: "100%",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                zIndex: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                flexDirection: "row",
                gap: "2rem",
            }}
        >
            <div
                className="large-svg-foward"
                style={{ width: "10%", maxHeight: "5rem" }}
            >
                <ContainerLaptop isAnimated={isAnimated} />
            </div>

            <div
                style={{
                    width: "100%",
                    position: 'absolute',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
                // Conditionally apply the 'animate' class to trigger the CSS animation
                className={`call-to-action-text-container ${isAnimated ? 'animate' : ''}`}
            >
                <h1
                    style={{
                        zIndex: 4,
                        position: "relative",
                        top: "55%", // This will be the start for the CSS animation
                        left: "0",
                        textAlign: "center",
                        fontSize: "2rem",
                    }}
                    className={`${varela.className} call-to-action-h1`}
                >
                    אתר איטי זה הפסד — תהפוך אותו לנכס שמביא לקוחות מגוגל.
                </h1>
                <button
                    style={{
                        padding: "0.75em",
                        color: "black",
                        backgroundColor: '#FFFF00',
                        fontSize: "1rem",
                        fontWeight: 700,
                        transition: 'background-color 0.3s ease',

                    }}

                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFDD00')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFFF00')}
                >
                    דברו איתי - נתחיל לשפר
                </button>
            </div>
        </div>
    );
};

export default CallToActionSection;