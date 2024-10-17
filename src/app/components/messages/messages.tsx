"use client";

import styles from "./messages.module.css";
import { useRef, useEffect, useState } from "react";
import Modal from "../modal/modal";
import messagesData from "./messages.json";

import Image from "next/image";

export default function Messages() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedMessage, setSelectedMessage] = useState<{
    heading: string;
    info: string;
    photo: string;
  } | null>(null);

  const openModal = (heading: string, info: string, photo: string) => {
    setSelectedMessage({ heading, info, photo });
    modalRef.current?.showModal();
  };

  return (
    <>
      {messagesData.messages.map((message: any, index: any) => (
        <div key={index} className="  flex flex-col items-start">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]">
            {message.title}
          </h2>
          <div className={index % 2 === 0 ? styles.info : styles.infoReverse}>
            <div className="   min-w-max  flex flex-col gap-5 justify-center">
              <Image
                width={200}
                height={200}
                src={message.image}
                alt={message.title}
                className={` object-contain border-sky-700 bg-white text-white shadow-xl w-[250px]   border-[2px] rounded-3xl `}
              />
              <Modal {...message}></Modal>
            </div>
            <div
              className={` ${
                index % 2 === 0
                  ? "border-sky-700 bg-white text-black shadow-2xl shadow-sky-700/20 items-start"
                  : "border-sky-700 bg-white text-black shadow-2xl shadow-sky-700/20  items-end"
              }  p-10 flex flex-col justify-center   rounded-3xl  gap-7 `}
            >
              <div
                className={`${styles.summary} para `}
                style={{ fontSize: "0.9rem" }}
              >
                {message.summary}
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedMessage && (
        <Modal
          photo={selectedMessage.photo}
          heading={selectedMessage.heading}
          info={selectedMessage.info}
          ref={modalRef}
        ></Modal>
      )}
    </>
  );
}
