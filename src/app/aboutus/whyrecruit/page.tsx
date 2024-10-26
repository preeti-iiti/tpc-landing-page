"use client";
import React from "react";
import styles from "./recruit.module.css";
import { useState, useEffect } from "react";
import data from "./data.json";
import { Image } from "@nextui-org/image";

export default function WhyRecruit() {
  const [color, setColor] = useState("text-[#115398]");

  const handleMouseEnter = (newColor: any) => setColor(newColor);
  const handleMouseLeave = () => setColor("text-[#115398]");

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY< 500)
      setScrollY(window.scrollY);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  return (
    <div>
      

      <div className={styles.grid}>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/data/rankings/1.png" alt="" className="scale-[0.6]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/data/rankings/2.png" alt="" className="scale-[0.7]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/data/rankings/3.png" alt="" className="scale-[0.7]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/data/rankings/4.png" alt="" className="scale-[0.9]" />
        </div>
      </div>

      <div className="questitle mb-5 mt-5">Highlights</div>
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item,index)=>(<>
          <div
          className={` shadow-md relative  flex justify-around  h-[250px] w-[45%]  rounded-3xl`}
          style={{ left:   index>1 && index % 2 != 0 ?  `${scrollY*0.7 - 337 }px` :  ``, right: index>1 && index % 2 === 0 ?  `${scrollY*0.7 - 337 }px` :  ``, top: index>1 ? `${-scrollY*(index-2)*0.55 + (index-2)*270 }px` :"" }}
        >
          <div className=" w-[40%] h-full bg-sky-700 rounded-l-3xl rounded-r-none flex items-center justify-center text-white text-[5rem]">{index+1}</div>
          {/* <div className=" w-[40%] h-full bg-sky-400 rounded-l-none rounded-r-3xl flex items-center justify-center text-white text-[5rem]"></div> */}
          <div className=" w-full h-full bg-white rounded-l-none rounded-r-3xl flex items-center justify-center text-sky-700 text-[1rem] p-6">{item}</div>
          
          
         
        </div>
        </>))}
      </div>
    </div>
  );
}
