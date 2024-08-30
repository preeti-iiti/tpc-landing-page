"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Modal from "@/components/picmodal";
import { motion } from 'framer-motion';

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0 },
};

export default function ThreeDCardDemo() {
  return (
    <>
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromLeft}
      transition={{ duration: 1 }} // Adjust the duration as needed
      
    >
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%]  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#2e85b7]"
        >
          {"From the Professor-In-Charge, Training & Placement"}
        </CardItem>
        
        <div className=" flex gap-10 flex-row-reverse ">
        <CardItem translateZ="100" className="min-w-[20rem]  mt-4">
          <Image
            src="/data/people/message/Dr. Pavan K Kankar.png"
            height="1000"
            width="1000"
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className=" flex flex-col">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 w-[full] min-h-[13rem] text-justify text-md  mt-2 dark:text-neutral-300"
        >
          {"On behalf of IIT Indore, I take this opportunity to invite corporates, academia, and research organizations to interact with our vibrant students for Internships, Training, and conducting Campus Placements. The institute focuses on producing top-quality technocrats and scientists for the growth of our modern society and caters to the needs of corporates and institutions alike."}
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#2e85b7] text-[white] text-xs font-bold"
          >
            Read More
          </CardItem>
          </div> */}
          </div>
        </div>
      </CardBody>
    </CardContainer>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromLeft}
      transition={{ duration: 2 }} // Adjust the duration as needed
      
    >
    <div className=" relative top-[calc(-100px)]">
    <Modal/>
    </div>
    </motion.div>
    </>
    
  );
}
