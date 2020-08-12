import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";
import React, { useEffect } from 'react'
import { Button, Text, Flex, Input } from "@chakra-ui/core";
import { useClipboard } from "@chakra-ui/core";

function Code({value}) {
    const { onCopy, hasCopied } = useClipboard(value);
    return (
      <>
        <Flex mb={2}>
          <Input value={value} isReadOnly placeholder={value} />
          <Button color={ hasCopied ? "white" : "black"} backgroundColor={hasCopied ? "rgb(56, 161, 104)" : "rgb(237, 242, 246)" } onClick={onCopy} ml={2}>
            {hasCopied ? "Copied!" : "Copy"}
          </Button>
        </Flex>
      </>
    );
  }

const ModalCode = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    useEffect(() => {
        if (props.isOpen) {
            onOpen()
        }
    }, []) 

    const handleNewMission = () => {
        window.location.reload()
        props.history.push('/moltoit/new')
    }
    
    return (
      <>  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Your mission has started! 🚀</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="light" mb="1rem">
                Please copy and save the following code, you will be able to come again in about 1 hour to check the status of your mission. 🛰 
              </Text>
              <Code value={props.code}/>
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => handleNewMission()}variant="ghost">Create new mission</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ModalCode;