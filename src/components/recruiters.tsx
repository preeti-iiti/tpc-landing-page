"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import {products} from "@/data/ourrecruiters";
import { motion } from 'framer-motion';

const fadeInFromBehind = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0 },
};

export default function Recruiters() {
  return (
  <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromBehind}
      transition={{ duration: 2 }} // Adjust the duration as needed
      
    >
  <HeroParallax products={products} />
  </motion.div>

)
  ;
}

