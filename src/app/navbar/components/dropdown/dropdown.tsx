
import styles from "./dropdown.module.css"
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'


export default function Dropdown(props: any) {




  return (

    <div className={styles.menu}>
    <ul>
    {props.modal.map((val: any, index: any) => {
              {
                  return(

                    <li>
                    
                    <Link href={val.link}>{val.title}</Link>
                  
                    </li>


                  )





                  

              }})}
    </ul>
    
    
    
    </div>
   

  );
}
