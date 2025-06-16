import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StyledJsxRegistry from "./registry";
// import Demo1 from "../components/Demo1.svg";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import SendQuestionToTal from "@/components/SendQuestionToTal";
// import MySvg from "@/components/mySvg";
// import MySvg2 from "@/components/mySvg2";
// import HeaderLayout from "@/components/AboutLayout";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tal Yohanan Ziv Moshel",
    template:
      "%s - Tal Yohanan Ziv Moshel" /*this is for /posts... for example*/,
  },
  description:
    "Come and read my awesome Web Development and Music content! " /* this is the default text shown when posting a link to our website in social media */,
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
        className={inter.className}
        style={{
          width: "100vw",
          minHeight: "100svh",
          position: "relative",
          height: "fit-content",
          overflowX: "hidden",
        }}
      >
        <main style={{ zIndex: "1" }}>{children}</main>
        {/* <SendQuestionToTal /> */}
        <Footer />
      </body>
    </html>
  );
}
