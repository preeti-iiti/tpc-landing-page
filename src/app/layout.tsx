import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from 'next/link';

import Navbar from "@/app/navbar"
import Footer from "@/app/footer"
import FooterData from "@/data/footer.json";
import NavbarData from "@/data/navbar.json";


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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
      <Providers>
      <Navbar {...NavbarData} />
      <div style={{height: "5rem"}}></div>
        {children}
        <Footer {...FooterData}/>
       </Providers>
        </body>
    </html>
  );
}
