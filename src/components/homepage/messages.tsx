"use client"

import styles from "@/css/messages.module.css";
import { useRef, useEffect, useState } from "react";
import Modal from "./modal";

import messagesData from "./demo.json";

export default function Messages() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<{ heading: string; info: string } | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      setImgHeight(imgRef.current.clientHeight);
    }
  }, []);

  const openModal = (heading: string, info: string) => {
    setSelectedMessage({ heading, info });
    modalRef.current?.showModal();
  };

  return (
    <div className={styles.messages}>
      {messagesData.map((message, index) => (
        <div key={index}>
          <h2>{message.heading}</h2>
          <div className={index % 2 === 0 ? styles.info : styles.infoReverse} style={{ height: imgHeight || 'auto' }}>
            <img ref={imgRef} src="Director.png" alt="" onLoad={() => setImgHeight(imgRef.current?.clientHeight || null)} />
            <div className={styles.para}>
              <p>{message.summary}</p>
              <button onClick={() => openModal(message.heading, message.info)}>
                READ MORE &mdash;&mdash;&mdash;&gt;
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedMessage && <Modal ref={modalRef} heading={selectedMessage.heading} info={selectedMessage.info}></Modal>}
    </div>
  );
}
