import React from "react";
import styles from "./modal.module.css";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import Image from 'next/image'

export default function ModalUI(props:any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div className="flex flex-col gap-2">
      <Button radius="full" className="bg-gradient-to-tr from-[#0488D3] to-[#115398] text-white shadow-lg" onPress={onOpen}>Read More</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        size="5xl"
        backdrop="opaque"
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex flex-row gap-3">
                  
               <div className="modal mx-[4px]">
                {props.title }
               </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-5 items-center para poppins">
                <div className=" border-3 border-[#0488D3]">
                  <Image src={props.image} width={200} height={300} alt={props.title} ></Image>
                </div>
                {props.info}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
