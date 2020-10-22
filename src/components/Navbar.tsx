import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import MenuItems from "./MenuItems";

interface Props {}

const Navbar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const NavLinks = (
    <>
      <MenuItems>
        <DarkModeSwitch />
      </MenuItems>
      <MenuItems>Cart</MenuItems>
      <MenuItems>Sign in</MenuItems>
    </>
  );

  return (
    <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        maxW="1440px"
        mx="auto"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={".1rem"}>
            SHOP
          </Heading>
        </Flex>

        <Box display={["block", "none"]} onClick={onOpen}>
          <svg
            fill={colorMode === "dark" ? "white" : "black"}
            width="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Flex display={["none", "inherit"]}> {NavLinks}</Flex>
      </Flex>
      <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton>
            <Box color="primary">
              <DrawerCloseButton />
            </Box>
          </DrawerCloseButton>
          <DrawerBody pt="150px">
            <Stack spacing="24px" align="center">
              {NavLinks}
            </Stack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
