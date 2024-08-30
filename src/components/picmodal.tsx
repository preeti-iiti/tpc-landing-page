"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "@/data/messages.json"

export default function AnimatedModalDemo() {
  const images = [
    "",
  ];
  const paragraphs = data.messages[1].info.split(". ");
  const signature = data.messages[1].signature.split(". ");
  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="px-4 py-2 rounded-xl bg-[#2e85b7]   text-white text-lg font-bold">
            Read More
          </span>
          
        </ModalTrigger>
        <ModalBody >
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              From the{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              {"Professor-In-Charge, Training & Placement"}
              </span>{" "}
              
            </h4>
          
            <div className="flex justify-center items-center">
              
                  <Image
                    src={data.messages[1].image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
             
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start text-justify mx-auto ">
             
             {paragraphs.map(
                  (para: string, index: React.Key | null | undefined) => (
                    <p key={index} className="text-justify">
                      {para}
                    </p>
                  )
                )}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
          {signature.map(
                      (sign: string, index: React.Key | null | undefined) => (
                        <p
                          key={index}
                          className=" mt-2 font-bold poppins text-lg font text-justify"
                        >
                          {sign}
                        </p>
                      )
                    )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

