"use client";
import React from "react";
import styles from "./recruit.module.css";
import { useState } from "react";
import data from "./data.json";
import { Image } from "@nextui-org/image";

export default function WhyRecruit() {
  const [color, setColor] = useState("text-[#115398]");

  const handleMouseEnter = (newColor: any) => setColor(newColor);
  const handleMouseLeave = () => setColor("text-[#115398]");

  return (
    <div>
      <div className={`${styles.hover4} text-[2rem]`}>
        Why{" "}
        <span
          className={`${color} transition-all duration-1000 brightness-[80%]`}
        >
          Recruit{" "}
        </span>{" "}
        From IIT Indore ?
      </div>

      <div className={styles.grid}>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={data[9]} alt="" className="scale-[0.6]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={data[10]} alt="" className="scale-[0.7]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={data[11]} alt="" className="scale-[0.7]" />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={data[12]} alt="" className="scale-[0.9]" />
        </div>
      </div>

      <div className="questitle mb-5 mt-5">Highlights</div>
      <div className="flex flex-col gap-10">
        <div
          className={`${styles.block} border-l-[2px] border-[#08da4e]`}
          onMouseEnter={() => handleMouseEnter("text-[#08da4e]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[0]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#ff6347]`}
          onMouseEnter={() => handleMouseEnter("text-[#ff6347]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[1]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#1e90ff]`}
          onMouseEnter={() => handleMouseEnter("text-[#1e90ff]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[2]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#ff8c00]`}
          onMouseEnter={() => handleMouseEnter("text-[#ff8c00]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[3]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#ff1493]`}
          onMouseEnter={() => handleMouseEnter("text-[#ff1493]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[4]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#32cd32]`}
          onMouseEnter={() => handleMouseEnter("text-[#32cd32]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[5]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#4682b4]`}
          onMouseEnter={() => handleMouseEnter("text-[#4682b4]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[6]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#ff4500]`}
          onMouseEnter={() => handleMouseEnter("text-[#ff4500]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[7]}</span>
        </div>
        <div
          className={`${styles.block} border-l-[2px] border-[#daa520]`}
          onMouseEnter={() => handleMouseEnter("text-[#daa520]")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="para">{data[8]}</span>
        </div>
      </div>
    </div>
  );
}
