import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/homepage/navbar"
import Footer from "@/components/homepage/footer"
import FooterData from "@/data/footer.json";
import NavbarData from "@/data/navbar.json";

import Faculty from "@/pages/faculty"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Training and Placement Cell, IIT Indore",
  description: "Students' Placement Office of IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar {...NavbarData} />
      <div style={{height: "5rem"}}></div>
        {children}
        {/* <Faculty/> */}
        <Footer {...FooterData}/>
        </body>
    </html>
  );
}
