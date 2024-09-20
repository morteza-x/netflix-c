"use client";
import { useBaseModal } from "@/__client/BaseModalProvider";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  //ModalHeader,
  //ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  LightMode,
  //ModalCloseButton,
  //Button,
} from "@chakra-ui/react";

export function BaseModal() {
  const {
    isOpen,
    //onOpen,
    onClose,
    child,
    data,
  }: {
    isOpen: boolean;
    //onOpen: () => any;
    onClose: () => any;
    child: any;
    data?: any;
  } = useBaseModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        scrollBehavior={"inside"}
        size={data?.size || "xl"}
      >
        <ModalOverlay />
        <ModalContent
          //borderRadius={6}
          //overflow={"hidden"}
          className="!rounded-lg !p-0"
        >
          {/* <ModalHeader
            padding={0}
            className="!bg-transparent bg-gray-900 overflow-hidden !p-0"
          ></ModalHeader>
          <LightMode>
            <ModalCloseButton className="mt-2 text-white z-10" />
          </LightMode> */}
          <ModalBody
            padding={0}
            className="
          !p-0 !bg-transparent bg-gray-900 
          relative rounded-lg overflow-hidden"
          >
            {child}

            <ModalCloseButton className="modalButton" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
