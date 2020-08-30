import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/core';
import { useDisclosure } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Text } from '@chakra-ui/core';
import { useWindowSize } from '../Hooks/useWindowSize';

const ModalCode = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (props.open) {
      onOpen();
    } else {
      onClose();
    }
  }, []);

  const handleClose = () => {
    onClose();
    props.isClose();
  };

  return (
    <>
      <Modal
        style={{ width: '200px !important' }}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={() => handleClose()}
        isCentered={true}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.motor.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="light" mb="1rem">
              {props.motor.description}
            </Text>

            <Text>
              Max thrust: {props.motor.maxThrust} {props.motor.maxThrustUnits}
            </Text>
            <Text>
              Specific Impulse: {props.motor.specificImpulse}{' '}
              {props.motor.specificImpulseUnits}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="primary" mr={3} onClick={() => handleClose()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCode;
