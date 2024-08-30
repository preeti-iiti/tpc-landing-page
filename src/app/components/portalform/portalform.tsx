"use client";
import styles from "./portalform.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};
const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
export default function PortalForm() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.unexpandable}>
        
          <div className={styles.info}>
            <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromLeft}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      
    >
            <h2>TRAINING AND PLACEMENT CELL</h2>
            <p>
              Training and Placement Cell IIT Indore, is the organization which
              handles all activities related to the campus placement of the
              graduating batch.
            </p>
          </motion.div>
          </div>
          <div className={styles.login}>
          <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromTop}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      
    >
            <h1>TPC PORTAL </h1>
            </motion.div>
            <div className={styles.button}>
            <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromLeft}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      
    >
              <button
                onClick={() => {
                  window.location.href = "https://tpc.iiti.ac.in/login";
                }}
                className=" hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <div>{"PORTAL"}</div>
                <div>{"LOGIN"} </div>
              </button>
              </motion.div>

              <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
      variants={fadeInFromRight}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      
    >
              <button
                onClick={() => {
                  window.location.href = "https://tpc.iiti.ac.in/JAF";
                }}
                className=" hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <div>{"JAF"}</div>
                <div className=" uppercase">{"File a new JAF"}</div>
              </button>
              </motion.div> 
            </div>
          </div>
        </div>

        <div className={styles.lines1}></div>
        <div className={styles.lines2}></div>
        <div className={styles.lines3}></div>
      </div>
    </>
  );
}
