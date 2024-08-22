import React from 'react';
import { ChakraProvider, Box, Flex, Text, Heading, Link, Stack, Image } from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <ChakraProvider>
      {/* Call to Action Section */}
      <Box fontFamily={'sans-serif'} bg="#1E6BD3" color="white" p={[8, 10, 16]}>
        <Heading as="h2" size="xl" mb={4}>
            Qu'attendez-vous ?
        </Heading>
        <Text
          // w={["70%%", "80%", "85%"]}
          fontSize={["sm", "md"]}
          mb={4}
          mx="auto"
          textAlign="start"
        >
          Rejoignez le mouvement. Faites partie d'une communauté qui croit en le progrès, la croissance personnelle et le pouvoir des conseils d'experts. Le prochain chapitre de votre parcours commence ici.

        </Text>
      </Box>

      {/* Footer Section */}
      <Box bg="white" color="gray.700" py={10}>
        <Flex justify="space-around" wrap="wrap" px={[5, 10]} textAlign={['center', 'center', 'left']}>
          <Box w={['100%', '100%', '30%']} mb={[9, 9, 0]}>
            <Flex justify={['center', 'center', 'start']} mb={7}>
              <Image h={'auto'} w={'200px'} src='myc1_1.svg' />
            </Flex>
            <Text color={'gray.500'} fontSize="md">
            Votre plateforme pour connecter avec des coachs sportifs certifiés et des entraîneurs personnels pour des plans d'entraînement personnalisés en quelques étapes faciles. Rejoignez-nous pour une meilleure expérience.
            </Text>
          </Box>
          <Flex>

            
          </Flex>
          <Box  w={['30%', '50%', '20%']} mb={[6, 5, 0]}>
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
          <Box w={['30%', '50%', '20%']} mb={[5, 5, 0]}>
            <Heading as="h4" size="md" mb={4}>
              Social Media
            </Heading>
            <Stack spacing={2}>
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaLinkedin />
                <Link target='_blank' href="https://www.linkedin.com/company/mycoach1/" ml={2}>
                  LinkedIn
                </Link>
              </Flex>
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaFacebook />
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=61564032957860" ml={2}>
                  Facebook
                </Link>
              </Flex>
              <Flex align="center" justify={['center', 'center', 'start']}>
                <FaInstagram />
                <Link target='_blank' href="https://www.instagram.com/mycoachonline/" ml={2}>
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
