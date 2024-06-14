"use client";
import styles from './gymkhana.module.css';
import { Button } from "@nextui-org/react";
import React from 'react';
import dataTech from './TechClubs.json'; // Import the JSON file
import dataCultural from './CulturalClubs.json'; // Import the JSON file
import Instagram from './instagram'

export default function Gymkhana() {
    return (
        <div className={styles.wrapper}>

            <div>
                <h1 className={styles.H1}> Student's Gymkhana</h1>
                <p>
                    The Student Gymkhana at IIT Indore is led by the Senate, consisting of executives and councillors. Elected representatives focus on fostering student development and leadership through coordinating events and maximizing individual potential. Numerous clubs and groups cater to diverse co-curricular interests.
                </p>
            </div>
            <h2>Tech Clubs</h2>
            <section className={styles.table}>
                {dataTech.techClubs.map((club: { img: string; title: string; link: string; }, index: number) => (
                    <div key={index}>
                        <img src={club.img} alt={club.title} />
                        <a target="_blank" href={club.link}>{club.title} 
                            <Button size='sm' className='bg-white' endContent={<Instagram />} onClick={(e) => e.preventDefault()}></Button>
                        </a>
                    </div>
                ))}
            </section>

            <h2>Cultural Clubs</h2>
            <section className={styles.table}>
                {dataCultural.culturalClubs.map((club: { img: string; title: string; link: string; }, index: number) => (
                    <div key={index}>
                        <img src={club.img} alt={club.title} />
                        <a target="_blank" href={club.link}>{club.title} 
                            <Button size='sm' className='bg-white' endContent={<Instagram />} onClick={(e) => e.preventDefault()}></Button>
                        </a>
                    </div>
                ))}
            </section>

        <div>
            <h1 className={styles.H1}> Students Gymkhana</h1>
            <p>
            The Student Gymkhana at IIT Indore is led by the Senate, consisting of executives and councillors. Elected representatives focus on fostering student development and leadership through coordinating events and maximizing individual potential. Numerous clubs and groups cater to diverse co-curricular interests.
            </p>
        </div>
        <h2>Tech clubs</h2>
        <section className={styles.table}>
            <div><img src="/data/logo/iiti.png" alt="" /></div>
        </section>

        </div>
    );
}
