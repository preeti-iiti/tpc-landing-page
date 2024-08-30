"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const fadeInFromRight = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
};

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  

  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(true);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    console.log(scrollYProgress.get());
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if(scrollYProgress.get() < 0.05){
        setVisible(true);
        
      }
      else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    
        
      
    }
  });




  return (

    <AnimatePresence mode="wait">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromRight}
      transition={{ duration: 1 }} // Adjust the duration as needed
      
    >
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn("fixed mb-1 inset-x-0 max-w-[full] mx-auto z-50 flex justify-center shadow-lg ", className)}
      >

        <div  className={cn(" w-[1440px]   ", className)}>

   
      <Menu setActive={setActive}>

        <div className="flex items-center gap-2">
        <Link href="/"><Image width={60} height={45} src="/data/logo/iiti.png" alt="iit indore" className="{styles.iitilogo}" /></Link>
        <div className=" h-[5rem]  overflow-hidden flex flex-col justify-center gap-[0rem] poppins">
              <div className="flex">
            <Link href="/" color="foreground"><div className= "{styles.tpc}">Training and Placement Cell</div></Link>
            <Link href="/" color="foreground"><div className= "{styles.divider1}">&nbsp; | &nbsp;</div></Link>
            <Link href="/" color="foreground"><div className= "{`${styles.tpc} ${styles.hindi}`}">प्रशिक्षण एवं नियोजन कक्ष</div></Link>
            </div>
            <div className="flex">
            <Link href="/" color="foreground"><div className="{styles.iiti}">Indian Institute of Technology, Indore </div></Link>
            <Link href="/" color="foreground"><div className="{styles.divider2}">&nbsp; | &nbsp;</div></Link>
            <Link href="/" color="foreground"><div className="{`${styles.iiti} ${styles.hindi}`}">भारतीय प्रौद्योगिकी संस्थान, इंदौर </div></Link>
            </div>
            </div>
        </div>
<div className=" relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2]  flex justify-between items-center space-x-4  py-1">
      <Link href="/">  
      <div>Home</div>
      </Link>

      
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutus/aboutiitindore">About IITI</HoveredLink>
            <HoveredLink href="/aboutus/academicprograms">Academic Programs</HoveredLink>
            <HoveredLink href="/aboutus/whyrecruit">Why Recruit from IITI</HoveredLink>
            <HoveredLink href="/aboutus/studentactivities">Student Activities</HoveredLink>
            <HoveredLink href="/aboutus/achievements">Achievements</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Students' Corner">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://tpc.iiti.ac.in/login">Student Login</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Recruiters' Corner">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://tpc.iiti.ac.in/login">Recruiter Login</HoveredLink>
            <HoveredLink href="/data/pdf/brochure.pdf">Brochure</HoveredLink>
            <HoveredLink href="/recruiterscorner/timelines">Timelines</HoveredLink>
            <HoveredLink href="/recruiterscorner/demographics">Demographics</HoveredLink>
            <HoveredLink href="/recruiterscorner/recruiterfaqs">FAQs</HoveredLink>
            <HoveredLink href="/data/pdf/AIPC_Guidelines_Updated.pdf">AIPC Guidelines</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/externalopportunities">  
      <div>External Opportunities</div>
      </Link>
       <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contactus/abouttpc">About T&P Cell</HoveredLink>
            <HoveredLink href="/contactus/staff&team">Staff & Team</HoveredLink>
            <HoveredLink href="/contactus/faculty">Faculty</HoveredLink>
            <HoveredLink href="#footer">How to Reach IITI?</HoveredLink>

          </div>
        </MenuItem>
        </div>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>

      </div>
  

    </motion.div>
    </motion.div>
    </AnimatePresence>
  
  );
}
