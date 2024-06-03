"use client"


import { useState, useEffect }  from "react"
import styles from "@/css/carousel.module.css"

export default function Carousel(props: any) {


  const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === props.images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
              
            }
            
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <>
    

        <div className={styles.wrapper}>

          <div className={styles.unexpandable}>


          <div className={styles.location}>
          <img src={props.locationicon} alt="located at" className={styles.icon}/>
          <div>IIT, INDORE</div>
          </div>

          <div className={styles.gallery}>
          <img src={props.images[currentIndex]} />
          </div>

        <div className={styles.dots}>
         
        </div>





          </div>

        </div>


      </>



   

  );
}
