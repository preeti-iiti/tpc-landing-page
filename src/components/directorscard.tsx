"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Modal from "@/components/directormodal";
import { motion } from 'framer-motion';
const fadeInFromRight = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0 },
};

export default function ThreeDCardDemo() {
  return (
    <>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromRight}
      transition={{ duration: 1 }} // Adjust the duration as needed
      
    >
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%]  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#2e85b7]"
        >
          {"From the Director's Desk"}
        </CardItem>
        
        <div className=" flex gap-10 ">
        <CardItem translateZ="100" className="min-w-[15rem]  mt-4">
          <Image
            src="/data/people/message/suhas_s_joshi.png"
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
          {"At the outset, I would like to thank and congratulate IIT Indore community and our esteemed recruiters for the contribution and support to the Institute. I commend the students for living up to the expectations of our recruiters, especially during the pandemic over the last two years. I firmly believe that the Institute has certainly carved a niche for itself and is poised to scale even greater heights in the near future. It is evident from the distinguished list of Overseas and Indian companies including PSUs who have showed trust in our students. The conducive academic and research environment of the Institute has ensured the behavioral development of inquisitiveness, innovativeness, and entrepreneurship amongst students. Through our experienced faculty, world-class facilities, and higher teaching standards, IIT Indore graduates are excelling socially, technically, and humanely."}
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
        
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#2e85b7]   text-white text-xs font-bold"
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
      variants={fadeInFromRight}
      transition={{ duration: 2 }} // Adjust the duration as needed
      
    >
    <div className=" relative top-[calc(-100px)]">
    <Modal/>
    </div>
    </motion.div>
  </>

    
  );
}
