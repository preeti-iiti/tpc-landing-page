
"use client";
import React from "react";
import styles from "./recruit.module.css";
import { useState } from "react";
import data from "./data.json";
import {Image} from "@nextui-org/image";


export default function WhyRecruit() {

      const [color, setColor] = useState("text-[#115398]");




    return (
     <div>
     
  
    <div className={`${styles.hover4} text-[2rem]`}>Why <span className={`${color} transition-all duration-1000 brightness-[80%]`}>Recruit </span> From IIT Indore ? </div>

<div className={styles.grid}>
  <div className={styles.card} onMouseEnter={()=>{setColor("text-[#67a8ac]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}>
  <Image  src={data[5]} alt="" className=" scale-[0.6]" />
  </div>
  <div className={styles.card} onMouseEnter={()=>{setColor("text-[#67a8ac]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}>
  <Image src={data[6]} alt=""  className=" scale-[0.7]" />
  </div>
  <div className={styles.card} onMouseEnter={()=>{setColor("text-[#67a8ac]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}>
  <Image src={data[7]} alt=""  className=" scale-[0.7]"/>
  </div>
  <div className={styles.card} onMouseEnter={()=>{setColor("text-[#67a8ac]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}>
  <Image src={data[8]} alt=""   className=" scale-[0.9]"/>
  </div>
</div>

      <div className="questitle mb-5 mt-5">Highlights</div>
      <div className=" flex flex-col gap-10">
    <div className={`${styles.block} border-l-[2px]  border-[#08da4e] `} onMouseEnter={()=>{setColor("text-[#219949]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}> <span className="para ">{data[0]}</span> </div>
    <div className={`${styles.block} border-l-[2px] border-[#e9222c] `} onMouseEnter={()=>{setColor("text-[#e9222c]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}> <span className="para ">{data[1]}</span> </div>
    <div className={`${styles.block} border-l-[2px] border-[#2db6fa] `} onMouseEnter={()=>{setColor("text-[#2db6fa]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}> <span className="para ">{data[2]}</span> </div>
    <div className={`${styles.block} border-l-[2px] border-[#f68c09] `} onMouseEnter={()=>{setColor("text-[#f68c09]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}> <span className="para ">{data[3]}</span> </div>
    <div className={`${styles.block} border-l-[2px] border-[#f6099b] `} onMouseEnter={()=>{setColor("text-[#f6099b]")}} onMouseLeave={()=>{setColor("text-[#115398]")}}> <span className="para ">{data[4]}</span> </div>
    </div>
    


  
   
     </div>
      
    );
  }
  