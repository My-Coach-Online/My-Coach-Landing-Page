import React, { useState } from "react";
import { Box, Flex, Heading, Link, Stack, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg={'white'} p={7} boxShadow="md" fontFamily={'sans-serif'}
>
      <Flex justify={'space-between'} alignItems="center">
        {/* Logo */}
        <Box>
          <img src="myc1_1.svg" alt="Logo" width={150} height={150} />
        </Box>

        {/* Navigation Links - Hidden on small screens */}
        <Flex
          w={600}
          justify={'space-around'}
          color={'gray.600'}
          fontFamily={'sans-serif'}
          fontWeight={500}
          display={["none", "none","none", "flex"]}  // Hidden on small screens
        >
          <a href="#Home">Accueil</a>
          <a href="#About">À Propos</a>
          <a href="#WhyChooseUs">Pourquoi Nous Choisir</a>
          <a href="#HowItWorks" >Comment Ça Marche</a>
          <a href="#Contact">Contact</a>
        </Flex>

        {/* Hamburger Menu Button - Visible on small screens */}
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={["flex", "flex","flex", "none"]}  // Visible on small screens
          onClick={toggleDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={4} mt={10}>
                <a onClick={toggleDrawer}>Accueil</a>
                <a onClick={toggleDrawer}>À Propos</a>
                <a onClick={toggleDrawer}>Pourquoi Nous Choisir</a>
                <a to="#HowItWorks" onClick={toggleDrawer}>Comment Ça Marche</a>
                <a onClick={toggleDrawer}>Contact</a>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Join Now Button */}
        <Button
          borderRadius={0}
          bg={'#247CF4'}
          color={'white'}
          as={'a'}
          display={["none", "none", "inline-flex"]}  // Hidden on small screens
        >
          Rejoignez Nous!
        </Button>
      </Flex>
    </Box>
  );
};
