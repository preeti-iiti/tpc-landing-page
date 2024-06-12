import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from 'next/link';
import Image from 'next/image'
import { motion } from "framer-motion"

import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import FooterData from "./footer/footer.json";
import NavbarData from "./navbar/navbar.json";


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

      <Navbar {...NavbarData} />

        {children}
        <Footer {...FooterData}/>
 
        </body>
    </html>
  );
}
