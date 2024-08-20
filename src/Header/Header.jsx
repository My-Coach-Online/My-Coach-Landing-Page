import React, { useState } from "react";
import { Box, Flex, Heading, Link, Stack, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg={'white'} p={7} boxShadow="md" fontFamily={'inter'}
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
          fontFamily={'inter'}
          fontWeight={500}
          display={["none", "none", "flex"]}  // Hidden on small screens
        >
          <Link>Accueil</Link>
          <Link>À Propos</Link>
          <Link>Pourquoi Nous Choisir</Link>
          <Link>Comment Ça Marche</Link>
          <Link>Contact</Link>
        </Flex>

        {/* Hamburger Menu Button - Visible on small screens */}
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={["flex", "flex", "none"]}  // Visible on small screens
          onClick={toggleDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={4} mt={10}>
                <Link onClick={toggleDrawer}>Accueil</Link>
                <Link onClick={toggleDrawer}>À Propos</Link>
                <Link onClick={toggleDrawer}>Pourquoi Nous Choisir</Link>
                <Link onClick={toggleDrawer}>Comment Ça Marche</Link>
                <Link onClick={toggleDrawer}>Contact</Link>
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
          Join Now
        </Button>
      </Flex>
    </Box>
  );
};
