"use client"


import { useState, useEffect } from "react"
import styles from "./carousel.module.css"
import React, { Component, MouseEvent } from 'react';
import {Image} from '@nextui-org/react'
import { motion } from 'framer-motion';
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const fadeInFromBehind = {
  hidden: { opacity: 0, x: 0 , scale : 0.5 },
  visible: { opacity: 1, x: 0 , scale : 1 },
};

export default function Carousel(props: any) {


  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {

      setCurrentIndex(currentIndex => (currentIndex === props.images.length - 1 ? 0 : currentIndex + 1));

    }, 5000)

    return () => clearInterval(intervalId);
  }, [props.images.length])

  return (
    <>

          <div className={styles.carousel}>

          <div className={styles.gallery}>
          <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
                 variants={ fadeInFromBehind}
                 transition={{ duration: 1 }} // Adjust the duration as needed
                 
               >
           <div className={styles.shadow}>
          <Image  isZoomed  src={props.images[currentIndex]} alt="tpc images" className={styles.displaypic}/>
          </div>
          </motion.div>
          
          <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
                 variants={ fadeInFromBehind}
                 transition={{ duration: 1 }} // Adjust the duration as needed
                 
               >
            <div className={styles.dots}>

              {props.images.map((image: string, index: number) => {

                if (index === currentIndex) {
                  return (
                    <button onClick={() => setCurrentIndex(index)} key={index}>
                  <div className={styles.activedot} key={index}>.</div>
                  </button>
              )}
                else {
                  return(
                  <button onClick={() => setCurrentIndex(index)} key={index} >
                 <div className={styles.inactivedot} key={index}>.</div>
                  </button>
                  )
                }})}

            </div>
            </motion.div>
            
            

          </div>

          <div className={styles.sidebar}>
              {props.images.map((image: string, index: number) => (
                 <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }} // Adjust amount based on when you want the animation to trigger
                 variants={ index === 2 || index === 4  ? fadeInFromLeft : fadeInFromRight}
                 transition={{ duration: 1 }} // Adjust the duration as needed
                 key={index}
                 
               >
                <div className={styles.shadow2}  style={{ display: index === currentIndex ? "none" : "block" }  }>
                <button key={index} onClick={() => setCurrentIndex(index)} style={{ display: index === currentIndex ? "none" : "block" } }>
                <Image radius="none" isZoomed key={index} alt="gallery" src={image} className={styles.thumbimg} />
                </button>
                </div>
                </motion.div>
              ))

              }
            </div>


            </div>



       


    </>





  );
}






// "use client"


// import { useState, useEffect } from "react"
// import styles from "./carousel.module.css"
// import React, { Component, MouseEvent } from 'react';
// import {Image} from "@nextui-org/react";

// export default function Carousel(props: any) {


//   const [currentIndex, setCurrentIndex] = useState(0);



//   useEffect(() => {
//     const intervalId = setInterval(() => {

//       setCurrentIndex(currentIndex => (currentIndex === props.images.length - 1 ? 0 : currentIndex + 1));

//     }, 5000)

//     return () => clearInterval(intervalId);
//   }, [props.images.length])

//   return (
//     <>

//           <div className={styles.carousel}>

//           <div className={styles.gallery}>

//           <div className={styles.imagewrap}>
//           <Image isZoomed src={props.images[currentIndex]} className={styles.displaypic} radius="sm" alt="tpc images" />
//           </div>
//             <div className={styles.dots}>

//               {props.images.map((image: string, index: number) => {

//                 if (index === currentIndex) {
//                   return (
//                     <button onClick={() => setCurrentIndex(index)} key={index}>
//                   <div className={styles.activedot} key={index}>.</div>
//                   </button>
//               )}
//                 else {
//                   return(
//                   <button onClick={() => setCurrentIndex(index)} key={index} >
//                  <div className={styles.inactivedot} key={index}>.</div>
//                   </button>
//                   )
//                 }})}

//             </div>

            

//           </div>

//           <div className={styles.sidebar}>
//               {props.images.map((image: string, index: number) => (
//                 <button key={index} onClick={() => setCurrentIndex(index)} style={{ display: index === currentIndex ? "none" : "block" } }>
//                 <Image removeWrapper isZoomed key={index} radius="sm" alt="gallery" src={image}  className={styles.thumbnails} />
//                 </button>
//               ))

//               }
//             </div>


//             </div>



       


//     </>





//   );
// }
