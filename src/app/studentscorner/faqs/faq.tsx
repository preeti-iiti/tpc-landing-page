"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "./faq.module.css";
import data from './faq.json';

export default function Faq() {


  return (
    <div className={styles.wrapper}>
      <h2>Student FAQ's</h2>
      <Accordion selectionMode="multiple" variant="splitted">
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
