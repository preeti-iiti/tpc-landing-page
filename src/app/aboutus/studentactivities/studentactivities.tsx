
import React from 'react';
import styles from './activities.module.css';
import data from './data.json';
import {Image} from "@nextui-org/image";
import Link from 'next/link';   

export default function Activities() {
    return (
        <>
            <div className={styles.cardContainer}>
                {data.activities.map((activity, index) => (
                    <div key={index} className={styles.card}>
                       
                        <Image   src={activity.img} alt={activity.title} className={styles.image}  />
                   
                        {/* <h3 className={styles.title}>{activity.title}</h3> */}
                   
                        <Link href={activity.link} target='_blank'>
                        <div className={`para text-[0.8rem] ${styles.overlay} text-white`}><div className=' font-bold text-[1rem]'>{activity.title}</div>{activity.description}
                        
                        <Image src={data.insta} alt="insta" width={40} className=' brightness-0 invert-[1] relative left-[150px]' />
                         </div>
                         </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
