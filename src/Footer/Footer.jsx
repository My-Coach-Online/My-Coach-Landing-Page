import React from 'react';
import { ChakraProvider, Box, Flex, Text, Heading, Link, Stack, Image } from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <ChakraProvider>
      {/* Call to Action Section */}
      <Box fontFamily={'inter'} bg="#1E6BD3" color="white" p={[8, 10, 16]}>
        <Heading as="h2" size="xl" mb={4}>
          What Are You Waiting For?
        </Heading>
        <Text
          // w={["70%%", "80%", "85%"]}
          fontSize={["sm", "md"]}
          mb={4}
          mx="auto"
          textAlign="start"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </Text>
      </Box>

      {/* Footer Section */}
      <Box bg="white" color="gray.700" py={10}>
        <Flex justify="space-around" wrap="wrap" px={[5, 10]} textAlign={['center', 'center', 'left']}>
          <Box w={['100%', '100%', '30%']} mb={[5, 5, 0]}>
            <Flex justify={['center', 'center', 'start']} mb={7}>
              <Image h={'auto'} w={'200px'} src='myc1_1.svg' />
            </Flex>
            <Text color={'gray.500'} fontSize="md">
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
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaLinkedin />
                <Link href="https://www.linkedin.com/company/mycoach1/" ml={2}>
                  LinkedIn
                </Link>
              </Flex>
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaFacebook />
                <Link href="https://www.facebook.com/profile.php" ml={2}>
                  Facebook
                </Link>
              </Flex>
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaInstagram />
                <Link href="https://www.instagram.com/mycoachonline/" ml={2}>
                  Instagram
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
