import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputLeftElement,
  Icon,
  InputRightElement,
  InputGroup,
  useToast
} from '@chakra-ui/core';
import { useDisclosure } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Input } from '@chakra-ui/core';
import { useClipboard } from '@chakra-ui/core';
import { withMoltoItClient } from './../apiHOCs';

function Code({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder={value} />
        <Button
          color={hasCopied ? 'white' : 'black'}
          backgroundColor={
            hasCopied ? 'rgb(56, 161, 104)' : 'rgb(237, 242, 246)'
          }
          onClick={onCopy}
          ml={2}
        >
          {hasCopied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
    </>
  );
}

const ModalCode = ({ newProps, moltoItApiClient }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (newProps.open) {
      onOpen();
    }
  }, []);

  const handleSendEmail = async (code) => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      toast({
        position: 'top',
        title: 'Email',
        description:
          'We have detected you are not using a correct email. Please try again.',
        status: 'error',
        duration: 4000,
        isClosable: true
      });

      return;
    }

    if (!sent) {
      const res = await fetch(code, email);

      if (res.status === 200) {
        setSent(true);
        toast({
          position: 'top',
          description:
            "Please look into your mail, and if you can't see the our mail, please check into your spam folder.",
          title: 'Your code is on its way. ✉️',
          status: 'success',
          duration: 4000,
          isClosable: true
        });
      } else {
        setSent(false);
        toast({
          position: 'top',
          title: 'We had problems to send your code.',
          description: 'Please, wait 1 minute and try again.',
          status: 'error',
          duration: 4000,
          isClosable: true
        });
      }
    } else {
      toast({
        position: 'top',
        title: 'Code sent',
        description: 'You already sent the code.',
        status: 'success',
        duration: 4000,
        isClosable: true
      });
    }
  };

  const handleNewMission = () => {
    window.location.reload();
    newProps.history.push('/moltoit/new');
  };

  const fetch = async (code, to) => {
    try {
      const res = await moltoItApiClient.sendEmail(code, to);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Your mission has started!{' '}
            <span role="img" aria-label="emoji" aria-labelledby="emoji">
              🚀
            </span>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="light" mb="1rem">
              Please copy and save the following code, you will be able to come
              again in about 1 hour to check the status of your mission. 🛰
            </Text>
            <Code value={newProps.code} />
            <Text>If needed, we can also send your code to your email.</Text>

            <InputGroup size="md">
              <InputLeftElement
                children={<Icon name="email" color="gray.600" />}
              />
              <Input
                pr="4.5rem"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  backgroundColor={sent ? 'rgb(56, 161, 104)' : '#e1e8f0'}
                  h="1.75rem"
                  size="sm"
                  onClick={() => handleSendEmail(newProps.code)}
                >
                  Send
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => handleNewMission()} variant="ghost">
              Create new mission
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default withMoltoItClient(ModalCode);
