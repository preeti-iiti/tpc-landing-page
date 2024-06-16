
import styles from '../../gymkhana.module.css'

import { Button } from "@nextui-org/react";
import Link from 'next/link';
import {Image} from "@nextui-org/image";
import data from "../../data.json";
export default function CardUI(props:any){

return(

            <section className={styles.table}>
                
                {props.Clubs.map((club: { img: string; title: string; link: string; }, index: number) => (

                    <div className={styles.card} key={index}>
                        <Image src={club.img} alt={club.title} />
                        <div className=" text-[0.8rem] font-semibold">{club.title}</div>
                        
                        <Link href={club.link} target='_blank'>
                        <div className={styles.insta}>
                        <div>
                       <Image src={data.insta} className=' brightness-0 invert-[1] ' />
                       </div>
                        </div>
                        </Link>
                    </div>
                ))}
            
            </section>




)



}