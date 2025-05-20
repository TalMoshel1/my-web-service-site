import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tal Yohanan Ziv Moshel" ,
    template: "%s - Tal Yohanan Ziv Moshel", /*this is for /posts... for example*/
  },
  description: "Come and read my awesome Web Development and Music content! ", /* this is the default text shown when posting a link to our website in social media */
  twitter: { /* this will be explecitly for twitter */
    card: "summary_large_image", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" style={{direction: "rtl"}}>
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
