"use client";
import Carousel from "./components/carousel/carousel";
import CarouselData from "./components/carousel/carousel.json";
import styles from "./aboutiiti.module.css"
import data from "./data.json"
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListBoxWrapper";

export default function AboutIITIndore() {

  let tabs = [
    {
      id: "1",
      label: "Undergraduate Programs",
      content: "Bachelor of Technology (B.Tech) in several engineering disciplines such as Computer Science, Electrical Engineering, Mechanical Engineering, Civil Engineering, and Metallurgy Engineering."
    },
    {
      id: "2",
      label: "Postgraduate Programs",
      content: "Master of Technology (M.Tech), Master of Science (M.Sc), and Master of Science in Research (MS-Research) in diverse specializations."
    },
    {
      id: "3",
      label: "Doctoral Programs",
      content: "Programs in engineering, science, and humanities"
    }
  ];

  return (
    <div >

      <div className={styles.introcard}>
        <div>
          <Carousel {...CarouselData} />
        </div>

        <div className={styles.intro}>
        <div className="header2 leading-normal">About IITI</div>
          {data.intro}
          <Link href={data.iitihome} target="_blank">
      <Button color="primary" variant="flat"
      radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold">
         IIT Indore Home
      </Button></Link> 
        </div>
      </div>


      <div className={styles.questitle}>Academics</div>

    <div className={styles.content}>


      <div className="para">
        {data.academicsstarter}
      </div>
    
    <div className=" flex flex-row justify-between items-start w-[100%]">
      <div className="flex w-[60%] flex-col my-[2rem] justify-center ">
      <Tabs aria-label="Dynamic tabs" items={tabs} radius="md" color="secondary">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody className=" text-justify para ">
                <div className=" w-[48vw]">
                {item.content}
                </div>
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
        <div className="flex w-[40%] flex-col my-[2rem] justify-center items-center">
    <ListboxWrapper>

      <Listbox
        aria-label="Example with disabled actions" 
        disabledKeys={["Quick Links"]}
        
      >
        <ListboxItem key="Quick Links">Quick Links</ListboxItem>
        <ListboxItem key="iitiacad" className="text-danger" variant="flat" color="primary" href="https://academic.iiti.ac.in/" target="_blank">IITI Academics Home</ListboxItem>
        <ListboxItem key="acad" className="text-danger" variant="flat" color="primary" href="/aboutus/academicprograms">Academic Programs</ListboxItem>
      </Listbox>
      </ListboxWrapper>
      </div>
      </div>

      <div className="para">
        {data.academicsend}
      </div>


      <div className={styles.questitle}>Research And Innovation</div>




      <div className={styles.questitle}>Infrastructure</div>



      <div className={styles.questitle}>Faculty</div>



      <div className={styles.questitle}>Student Life</div>



      <div className={styles.questitle}>Industry Collaboration and Placements</div>



      </div>
      <div className="header2 leading-normal mt-16">Conclusion</div>
<div className={styles.conclude}>
      IIT Indore, with its robust academic programs, cutting-edge research, and vibrant campus life, stands as a beacon of higher education in India. The institute continues to strive towards its mission of nurturing innovative minds and contributing to the technological and scientific advancement of the nation and the world.
      </div>
    </div>






  );
}
