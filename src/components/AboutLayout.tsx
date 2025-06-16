import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import MySvg2 from "@/components/mySvg2";
import ContainerLaptop from "./ContainerLaptop";
import '../components-css/AboutLayout.css';

export const inter = Inter({ subsets: ["latin"] });


const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});


const AboutLayout: React.FC = () => {
  return (
    <header style={{ position: "relative", height: "60svh" }}>
      <HeroImage src="/pc-background-image.webp" width="100%" />

      <Navbar />

      <div
        className={`call-to-action-container`}
        style={{
          width: "100%",
          position: "relative",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "fit-content",
          flexDirection: "row",
          gap: "2rem",
        }}
      >
        <div className='large-svg-foward' style={{ width: "20%" }}>
          <ContainerLaptop />
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:'1rem',
    
          }}
        >
          <h1
            style={{
              zIndex: 4,
              position: "relative",
              top: "65%",
              left: "0",
              textAlign: "center",
              fontSize:'2rem'
            }}
            className={`${varela.className} call-to-action-h1`}
          >
            אתר איטי זה הפסד — תהפוך אותו לנכס שמביא לקוחות מגוגל.
          </h1>
          <button
            style={{
              padding: "0.5rem",
              backgroundColor: "yellow",
              color: "black",
              fontSize:'1rem',
              fontWeight:700
            }}
          >
            דברו איתי - נתחיל לשפר
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
          width: "100vw",
          height: "60svh",
          position: "absolute",
          top: "0",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              height: "fit-content",
              width: "100%",
              zIndex:3
            }}
          >
            <MySvg2 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutLayout;
