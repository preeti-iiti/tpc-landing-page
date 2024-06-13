"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "./faq.module.css";
import data from '../faq.json';

export default function Faq() {


  return (
    <div className={styles.wrapper}>
      
      <Accordion selectionMode="single"  variant="splitted" fullWidth={true} >

        {data.faq.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={<span className={styles.accordionTitle}>{item.Question}</span>}
           
          >
            <div className={styles.accordionContent}>{item.Answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
