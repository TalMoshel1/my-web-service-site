"use client";

import React, { useState } from "react";
import { Varela_Round } from "next/font/google";
import AnimatedOnScrollButNotOnLoad from "./AnimatedOnScrollButNotOnLoad";

const varela = Varela_Round({ subsets: ["latin"], weight: "400" });

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

interface ValidationResult {
  success: boolean;
  nameError?: string;
  phoneError?: string;
}

const checkData = (name: any, phone: any): ValidationResult => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^\d{9,10}$/;

  // let nameError: string | undefined;
  // let phoneError: string | undefined;

  if (!nameRegex.test(name)) {
    setNameError('שם חייב לכלול אותיות ורווחים בלבד');
  } else {
    setNameError('');
  }

  if (!phoneRegex.test(phone)) {
    setPhoneError('מספר חייב לכלול 9/10 ספרות בלבד');
  } else {
    setPhoneError('');
  }

  if (nameError || phoneError) {
    return {
      success: false,
      nameError,
      phoneError,
    };
  } else {
    return {
      success: true,
    };
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("Updated formData:", { ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = checkData(formData.name, formData.phone);
    if (!validation.success) {
      console.log('validation failed')
      return;
    }
    console.log("Form submitted with:", formData);

    const result = await fetch(
      "https://8b9de3728139.ngrok-free.app/submit-details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (result.ok) {
      alert("Message sent!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <AnimatedOnScrollButNotOnLoad threshold={0.1}> 


        <form
          onSubmit={handleSubmit}
          style={{
            width: "20rem",
            margin: '10.5em auto',
                        // margin: '11.5em auto',

            boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
            direction: "rtl",
            boxSizing: "border-box",
            backgroundColor: "transparent",
            position: "absolute",
            top: "0",
            left: "100%",
            transform: "translateX(-50%)",
            zIndex: 4,
            textAlign: "center",
          }}
          className={varela.className}
          data-aos="fade-up"
           id="contact-form"
        >
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5em",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            שם מלא
          </label>
          {nameError && <p style={{marginBottom: '0.75rem', fontSize: '1rem', color: 'red',   backgroundColor:'rgba(255,255,255,0.7)'}}>{nameError}</p>}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75em",
              marginBottom: "1.25em",
              border: "1px solid #ccc",
              fontSize: "1rem",
              boxSizing: "border-box",
              textAlign: "center",
            }}
            required
          />

          <label
            htmlFor="phone"
            style={{
              display: "block",
              marginBottom: "0.5em",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            מספר טלפון
          </label>
          {phoneError && <p style={{marginBottom: '0.75rem', fontSize: '1rem', color: 'red', backgroundColor:'rgba(255,255,255,0.7)'}}>{phoneError}</p>}

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75em",
              marginBottom: "2em",
              border: "1px solid #ccc",
              fontSize: "1rem",
              boxSizing: "border-box",
              textAlign: "center",
            }}
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.875em",
              backgroundColor: "#FFFF00",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.5s ease",
              color: "black",
              fontWeight: "700",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFDD00")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFFF00")
            }
          >
            שליחה
          </button>
        </form>
      </AnimatedOnScrollButNotOnLoad>
    </>
  );
};

export default Form;
