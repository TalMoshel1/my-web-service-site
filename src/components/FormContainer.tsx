import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import SvgTopShapedCorner from "@/components/SvgTopShapedCorner";
import ContainerLaptop from "./ContainerLaptop";
import "../components-css/AboutLayout.css";
import CallToActionSection from "./CallToActionSection";
import SvgBottomShapedCorner from "./SvgTopShapedCorner";
import Form from "./Form";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const FormContainer: React.FC = () => {
  return (
    <div
      style={{ position: "relative", height: "25rem"}}
    >
      <HeroImage src="/dark-background.webp" width="100%" />

      {/* <CallToActionSection /> */}
      <div
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
          width: "100vw",
          height: "25rem",
          position: "absolute",
          top: "0",
          zIndex: 3,
          display: 'flex',
          justifyContent:'center'
   
        }}
      >

        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "-1px",
              height: "fit-content",
              width: "100%",
              zIndex: 3,
            }}
          >
            <SvgTopShapedCorner />
          </div>
        </div>
        <Form />

      </div>
    </div>
  );
};

export default FormContainer;
