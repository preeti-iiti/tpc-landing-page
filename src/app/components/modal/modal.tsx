import React from "react";
import styles from "./modal.module.css";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function ModalUI(props:any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div className="flex flex-col gap-2">
      <Button radius="full" className="bg-gradient-to-tr from-[#0488D3] to-[#115398] text-white shadow-lg" onPress={onOpen}>Read More</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="5xl"
        backdrop="opaque"
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div>
                {props.title.slice(0, 8)}
                  </div>
               <div className="">
                {props.title.slice(8) }
               </div>
                </div>
              </ModalHeader>
              <ModalBody>
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
