"use client";
import React, { useEffect } from "react";
import "../components-css/Navbar.css";
import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const scrolledBeyond = useScrollBeyond20svh();

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: scrolledBeyond ? "white" : "transparent",
        color: scrolledBeyond ? "rgba(0, 56, 184, 1)" : "white",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 5,
        height: scrolledBeyond ? "3rem" : "5rem",
        transition:
          "height 0.3s ease-in-out, background-color 0.3s ease-in-out",
        // display:'flex'
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          height: "100%",
          border:'1px solid green'
        }}
      >
        <ul className="navbar-links ul-display-none ul-shown">
          <li>
            <a href="/home">בית</a>
          </li>
          <li>
            <a href="/about">אודות</a>
          </li>
          <li>
            <a href="/about">צרו קשר</a>
          </li>
        </ul>
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
