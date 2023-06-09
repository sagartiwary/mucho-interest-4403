import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
// import Logo from './Logo.jpg';
import { DragHandleIcon } from "@chakra-ui/icons";
// import { Dots2x3 } from 'react-drag-handle/dist/icons';

export default function NavLogo() {
  return (
    <Flex>
      <Box
        bg="#0f0617"
        // border="1px solid red"
        padding-left="10px"
        display="inline-flex"
        // margin= "auto"
        // padding-top= "100px"
      >
        <Box w="30px" border="0px solid blue" />
        <Image
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.57.0"
          h="50px"
          w="50px"
          // h="100%" w="100%"
          alt="notfound"
          margin-left="10px"
        ></Image>
      </Box>

      <HStack>
        <Box pl={4}>
          <Breadcrumb separator=" " spacing="2">
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/tvshows">TV Shows</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/movies">Movies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/webseries">Web Series</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              bg="#0F0617"
              _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/news">News</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box pl={3}>
          <Menu>
            <MenuButton
              as={DragHandleIcon}
              aria-label="Options"
              variant="outline"
            />
            <MenuList h="auto" w="auto" bg="#0f0617">
              {[
                "Eduauraa",
                "Premium",
                "Live TV",
                "Music",
                "Rent",
                "Kids",
                "Videos",
                "Channels",
                "Cricket",
              ].map((el) => (
                <MenuItem
                  padding="2"
                  key={Math.random()*100}
                  width="200px"
                  margin="4px"
                  backgroundColor="#0f0617"
                  borderRadius="5"
                  pl="2"
                  _hover={{ background: "#cfc3ca" }}
                >
                  {el}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  );
}
