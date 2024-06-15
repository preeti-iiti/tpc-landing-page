import React from "react";
import {Button} from "@nextui-org/react";

import Faq from "./faqUI/faq";
import styles from "./recruiterfaq.module.css"
import data from './data.json';
import ques1 from './generalques.json'
import ques2 from './studentinfo.json'
import ques3 from './process.json'
import ques4 from './logisticssupport.json'
import ques5 from './postrecruit.json'

import Link from 'next/link';

export default function RecruiterFAQS() {
    return (
     <div className={styles.wrapper}>

      <div className={styles.title}>
      <div className="header2">Frequently Asked Questions <span className={styles.student}>By Recruiters</span> </div>  
        </div>
      <div className={styles.paras}>
        <div className={styles.starter}>
          {data.starter}
        </div>
        <div className={styles.button}>
        <Link href={data.brochure} target="_blank">
      <Button color="primary" variant="flat"
      radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold">
         Placement Brochure
      </Button></Link> 
      </div>
        </div>

        <div className={styles.questitle}>General Question</div>
        <Faq {...ques1}></Faq>
        <div className={styles.questitle}>Student Information</div>
        <Faq {...ques2}></Faq>
        <div className={styles.questitle}>Recruitment Process</div>
        <Faq {...ques3}></Faq>
        <div className={styles.questitle}>Logistics and Support</div>
        <Faq {...ques4}></Faq>
        <div className={styles.questitle}>Post Recruitment</div>
        <Faq {...ques5}></Faq>

        <div className={styles.paras}>
        <div className={styles.finisher}>
          {data.finisher}
        </div>
        <div className={styles.button}>
        <Link href={data.facilites}>
      <Button color="primary" variant="flat"
      radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold">
         explore facilites
      </Button></Link> 
      </div>
        </div>

 

     
  
   
     </div>
      
    );
  }
  