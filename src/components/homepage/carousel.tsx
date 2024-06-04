"use client"


import { useState, useEffect } from "react"
import styles from "@/css/carousel.module.css"
import React, { Component, MouseEvent } from 'react';

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


      <div className={styles.wrapper}>

        <div className={styles.unexpandable}>


          <div className={styles.location}>
            <img src={props.locationicon} alt="located at" className={styles.icon} />
            <div>IIT, INDORE</div>
          </div>

          <div className={styles.carousel}>

          <div className={styles.gallery}>
            <img src={props.images[currentIndex]} alt="tpc images" />
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

            

          </div>

          <div className={styles.sidebar}>
              {props.images.map((image: string, index: number) => (
                <button key={index} onClick={() => setCurrentIndex(index)} style={{ display: index === currentIndex ? "none" : "block" } }>
                <img key={index} alt="gallery" src={image}  />
                </button>
              ))

              }
            </div>


            </div>



        </div>

      </div>


    </>





  );
}
