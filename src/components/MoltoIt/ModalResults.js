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
import React, { useEffect } from 'react';
import { Button, Text, Flex, Input } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const ModalResults = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (props.isOpen) {
      onOpen();
    }
  }, []);

  const handleState = () => {
    props.handleStatus(false);
    onClose();
  };
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={() => handleState()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your mission has finished! 🛰</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="light" mb="1rem">
              If you want to see your results please click in Go to results, but
              don't worry remember you can always come later. 😁
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              I'll come later
            </Button>
            <Button variant="outline">
              {' '}
              <Link
                style={{ color: 'black' }}
                to={`/moltoit/results/${props.code}`}
              >
                Go to results
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalResults;
