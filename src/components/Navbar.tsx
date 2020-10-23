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
  Link,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
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
      <MenuItems>
        <NextLink href="/cart">
          <Flex
            align="center"
            as={Link}
            _hover={{ textDecoration: "none", color: "GrayText" }}
          >
            <Box as={FaShoppingCart} mr={2} />
            cart
          </Flex>
        </NextLink>
      </MenuItems>
      <MenuItems>
        <NextLink href="/signin">
          <Flex
            align="center"
            as={Link}
            _hover={{ textDecoration: "none", color: "GrayText" }}
          >
            <Box as={FaUser} mr={2} />
            sign in
          </Flex>
        </NextLink>
      </MenuItems>
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
            <NextLink href="/">SHOP</NextLink>
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
