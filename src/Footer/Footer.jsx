import React from 'react';
import { ChakraProvider, Box, Flex, Text, Heading, Link, Stack, Image, Grid } from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <ChakraProvider>
      {/* Call to Action Section */}
      <Box fontFamily={'inter'} bg="#1E6BD3 " color="white" p={65}>
        <Heading as="h2" size="xl" mb={4}>
          What Are You waiting for?
        </Heading>
        <Text w={800} fontSize="md" mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur
 adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.eiusmod tempor incididunt.
        </Text>
      </Box>

      {/* Footer Section */}
      <Box bg="white" color="gray.700" py={10}>
        <Flex justify="space-around" wrap="wrap" px={10}>
          <Box w={['100%', '100%', '30%']} mb={[5, 5, 0]}>
            <Flex mb={7} justify={'start'}>
                <Box>
                    <Image h={'auto'} w={'200px'} src='myc1_1.svg'/>
                </Box>
            </Flex>
            <Text color={'gray.500'}  fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </Text>
          </Box>
          <Box w={['100%', '100%', '20%']} mb={[5, 5, 0]}>
            <Heading as="h4" size="md" mb={4}>
              Menu
            </Heading>
            <Stack color={'gray.500'} spacing={2}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Trainers</Link>
              <Link href="#">Plans</Link>
              <Link href="#">Reviews</Link>
            </Stack>
          </Box>
          <Box w={['100%', '100%', '20%']} mb={[5, 5, 0]}>
            <Heading as="h4" size="md" mb={4}>
              Social Media
            </Heading>
            <Stack spacing={2}>
              <Flex align="center">
                <FaLinkedin />
                <Link href="#" ml={2}>
                  LinkedIn
                </Link>
              </Flex>
              <Flex align="center">
                <FaFacebook />
                <Link href="#" ml={2}>
                  Facebook
                </Link>
              </Flex>
              <Flex align="center">
                <FaInstagram />
                <Link href="#" ml={2}>
                  Instagram
                </Link>
              </Flex>
              <Flex align="center">
                <FaGithub />
                <Link href="#" ml={2}>
                  Github
                </Link>
              </Flex>
            </Stack>
          </Box>
        </Flex>
        <Box textAlign="center" mt={10}>
          <Text>© MyCoach2024</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
