"use client"

import styles from "./messages.module.css";
import { useRef, useEffect, useState } from "react";
import Modal from "../modal/modal";
import messagesData from "./messages.json";
import Image from 'next/image'


export default function Messages() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedMessage, setSelectedMessage] = useState<{ heading: string; info: string; photo: string} | null>(null);

  const openModal = (heading: string, info: string, photo:string) => {
    setSelectedMessage({ heading, info, photo });
    modalRef.current?.showModal();
  };

  return (


    <>

      <div className={styles.wrapper}>

        <div className={styles.unexpendable}>
          {messagesData.messages.map((message:any , index:any) => (
            <div key={index} className={styles.message}>
              <div className={styles.title}>{message.title}</div>

              <div className={styles.content}>



                <div className={index % 2 === 0 ? styles.info : styles.infoReverse} >

                  <div className={styles.profilephoto}>
                    <Image width= {200} height = {200} src={message.image} alt={message.title} />

                  </div>
                  <div className={styles.para}>
                    <div className={styles.summary}>{message.summary}</div>
                    <button onClick={() => openModal(message.title, message.info, message.image)} className={styles.readmore}>
                      READ MORE
                      <div className={styles.arrow}>
                        <Image width={100} height={10} src={messagesData.arrow} alt="open" />
                      </div>
                    </button>
                  </div>
                </div>


              </div>

            </div>
          ))
          }

          {selectedMessage && <Modal photo ={selectedMessage.photo} heading={selectedMessage.heading} info={selectedMessage.info} ref={modalRef}></Modal>}

        </div>
      </div>


    </>



  );
}




