import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import AosInitializer from "@/components/AosInitializer"; // Adjust path as needed
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import AboutHeaderLayout from "@/components/AboutLayout";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: {
    default: "טל מושל",
    template:
      "%s - טל מושל" /*this is for /posts... for example*/,
  },
  description:
    "מתכנת React" /* this is the default text shown when posting a link to our website in social media */,
  twitter: {
    /* this will be explecitly for twitter */ card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="he" style={{ direction: "rtl" }}>
      <body
        style={{
          minHeight: "100svh",
          position: "relative",
          height: "fit-content",
          boxSizing: "border-box",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AosInitializer>
          <main
            style={{
              zIndex: "1",
              width: "100%",
              flexGrow: "1",
              overflow: "hidden",
              paddingBottom: "0px !important",
            }}
          >
            {/* <AboutHeaderLayout/> */}
            {/* <Navbar /> */}

            {children}
          </main>
        </AosInitializer>
        {/* <SendQuestionToTal /> */}
        <Footer />
      </body>
    </html>
  );
}
