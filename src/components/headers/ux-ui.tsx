import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import "@/components-css/AboutLayout.css";
import AnimatedLogo from "../AnimatedLogo";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const UxUiHeader: React.FC = () => {
  return (
    <header
      style={{ position: "relative", height: "25rem", overflow: "hidden" }}
    >
      <HeroImage src="/uxui.webp" width="100%" height='100%'/>

      <Navbar />

      <AnimatedLogo />

      <div
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
                    חווית משתמש (UX): המפתח לבניית אתר מנצח וקידום אתרים (SEO) אפקטיבי

                </h1>
          
            </div>
        </div>



      <div
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
          width: "100vw",
          height: "25rem",
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
              zIndex: 3,
            }}
          >
            <SvgBottomShapedCorner />
          </div>
        </div>
      </div>
    </header>
  );
};

export default UxUiHeader;
