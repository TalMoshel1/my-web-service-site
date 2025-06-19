'use client'

import React from "react";
import { Varela_Round } from "next/font/google";
import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
import "../components-css/Logo.css";


const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const Logo: React.FC = () => {

  const scrolledBeyond = useScrollBeyond20svh();


  return (
    <div className='logo-container' style={{  textAlign: "center", position:'relative', overflow:'hidden', width: '100%', height: '100%' }}>
      <span
        style={{  position:'absolute', height:'100%', left:'0', top:scrolledBeyond? '-100px':'50%', transition: 'top 0.3s ease-in-out', fontWeight:'700', transform: 'translateY(-40%)'}}
        className={`${varela.className} logo-size`}
      >
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%'}}>

        <span>
        Tal M
        <svg
        className='svg-width svg'
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"

        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(0, 56, 184, 0.5)"
            strokeWidth="10"
            fill="white"
          />
          <polygon points="35,30 35,70 55,50" fill="rgba(0, 56, 184, 0.5)" />
          <polygon points="55,30 55,70 75,50" fill="rgba(0, 56, 184, 0.5)" />
        </svg>
        shel
        <br />
        </span>
       
        <span
          style={{ position: "relative", bottom: "3rem" }}
          className='job-description'
        >
          פיתוח אתרים
        </span>
        </div>

      </span>

      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%'}}>
     
      <span
        style={{ display: "inline", position:'absolute',left:'0',top:scrolledBeyond? '-58%':'0', height:'fit-content', transform: 'translateY(-5%)', transition: 'top 0.3s ease-in-out', visibility: scrolledBeyond ? 'visible' : 'hidden', fontWeight:'700' }}
        className={`${varela.className} logo-size`}      >

<div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%'}}>
<span>
Tal M
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className='svg-width svg'
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(0, 56, 184, 0.5)"
            strokeWidth="10"
            fill="white"
          />
          <polygon points="35,30 35,70 55,50" fill="rgba(0, 56, 184, 0.5)" />
          <polygon points="55,30 55,70 75,50" fill="rgba(0, 56, 184, 0.5)" />
        </svg>
        shel
        <br />
        <span
          style={{  position: "relative", bottom: "3rem" }}
          className='job-description'

        >
          פיתוח אתרים
        </span>

            </span>
          </div>

      </span>
      </div>

    </div>
  );
};

export default Logo;
