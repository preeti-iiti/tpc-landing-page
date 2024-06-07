"use client"
import styles from "@/css/homepage/navbar.module.css"
import Link from "next/link";
import React, { useState ,useEffect, useRef } from 'react'



export default function Navbar(props: any) {




  return (
    <div className={styles.wrapper}>
      <div className={styles.unexpendable}>

        <div className={styles.logo}>
          <Link href="/">
          <img src={props.logo} alt="iit indore" className={styles.iitilogo} />
          </Link>

          <div className={styles.name}>
            <div className={styles.tpc}><Link href="/"><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Training and Placement Cell</span></Link></div>
            <div className={styles.iiti}><Link href="/"><span className={styles.hindi}>भारतीय प्रौद्योगिकी संस्थान, इंदौर</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Indian Institute of technology, Indore</span></Link></div>
          </div>
          
        </div>

        <div className={styles.modals}>
          <ul>

            {

              props.buttons.map((val: any,index:any) => {
                {
                  let abc = val.ismodal
                  if (abc) {
                    return <li className={styles.modalbutton} key={index}><Link href="/aboutus/aboutiitindore">{val.title}</Link><Link href="/aboutus/aboutiitindore"><img src={val.modalbutton} className={styles.dropdown} alt="\/"></img></Link></li>
                  }
                  else {
                    return <li className={styles.modalbutton} key={index}>{val.title}</li>
                  }

                }
              }

              )

            }


          </ul>

        </div>

        <div className={styles.menu}>

          <div className={styles.topbar}></div>
          <div className={styles.midbar}></div>
          <div className={styles.lowbar}></div>

        </div>



      </div>
    </div>

  );
}
