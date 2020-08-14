import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Button
} from '@chakra-ui/core';
import React from 'react';

const DropdownGenerations = (props) => {
  return (
    <>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          rounded="0"
          transition="all 0.2s"
          borderWidth="1px"
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
          as={Button}
          color="white"
          variant="outline"
          rightIcon="chevron-down"
        >
          Select Generation
        </MenuButton>
        <MenuList>
          {props.isLoading
            ? null
            : Object.keys(props.generations).map(function (key, index) {
                return (
                  <MenuItem onClick={() => props.handlerSelectedGen(key)}>
                    Generation {key.split('_')[1]}
                  </MenuItem>
                );
              })}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropdownGenerations;
