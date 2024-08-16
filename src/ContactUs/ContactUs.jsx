import React from 'react';
import { ChakraProvider, Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button, Stack, Text, Icon, Divider, Select } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <ChakraProvider>
      <Box mt={20} fontFamily={'inter'} mb={4} bg="white" textAlign={'center'}>
        <Heading>
            Formulaire de Contact
        </Heading>
        <Text mt={2}>
          Any questions or remarks? Just write us a message!
        </Text>
      </Box>
      <Flex justify="center" align="center" bg="white" p={[4, 6]} minHeight="100vh">
        <Flex
          width={["100%", "90%", "80%"]}
          bg="gray.50"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          flexDirection={["column", "column", "row"]}
        >
          {/* Contact Information Sidebar */}
          <Box
            bg="#1E6BD3"
            color="white"
            p={10}
            width={["100%", "100%", "35%"]}
            textAlign={["center", "center", "left"]}
          >
            <Heading as="h3" size="lg" mb={4}>
              Contact Information
            </Heading>
            <Text mb={4}>Lorem ipsum dolor sit amet consectetur</Text>
            <Stack mt={5} spacing={4} align={["center", "center", "flex-start"]}>
              <Flex align="center">
                <Icon as={FaPhone} boxSize={5} mr={3} />
                <Text>+212 655555555</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaEnvelope} boxSize={5} mr={3} />
                <Text>mycoach@gmail.com</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} boxSize={5} mr={3} />
                <Text>Casablanca, Morocco</Text>
              </Flex>
              <Divider borderColor="whiteAlpha.300" />
              <Flex mt={4} justify={["center", "center", "flex-start"]}>
                <Icon as={FaTwitter} boxSize={6} mr={4} cursor="pointer" />
                <Icon as={FaInstagram} boxSize={6} mr={4} cursor="pointer" />
                <Icon as={FaLinkedin} boxSize={6} cursor="pointer" />
              </Flex>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box p={10} width={["100%", "100%", "65%"]}>
            <Stack spacing={4}>
              <Flex flexDirection={["column", "column", "row"]}>
                <FormControl id="first-name" mr={[0, 0, 2]} mb={[4, 4, 0]} isRequired>
                  <FormLabel>Nom Complet</FormLabel>
                  <Input placeholder="Nom Complet" />
                </FormControl>
              </Flex>

              <Flex flexDirection={["column", "column", "row"]}>
                <FormControl id="email" mr={[0, 0, 2]} mb={[4, 4, 0]} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email" />
                </FormControl>

                <FormControl id="phone" mr={[0, 0, 2]} mb={[4, 4, 0]}>
                  <FormLabel>Numéro de Téléphone</FormLabel>
                  <Input placeholder="Numéro de Téléphone" />
                </FormControl>

              </Flex>

              <Flex>
                  <FormControl id="Ville" >
                    <FormLabel>Ville</FormLabel>
                    <Input placeholder="Ville" />
                  </FormControl>
                  
                <FormControl  id="objectif" ml={2} >
                    <FormLabel>Objectif Fitness</FormLabel>
                      <Select>
                        <option value="Choisisez une option" disabled selected >Choisisez une option</option>
                        <option value="Perte de Poids">Perte de Poids</option>
                        <option value="Prise de Muscle">Prise de Muscle</option>
                        <option value="Fitness Général">Fitness Général</option>
                      </Select>
                  </FormControl>

              </Flex>


              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write your message..." />
              </FormControl>
              <Button
                borderRadius={0}
                mt={5}
                bg={'#1E6BD3'}
                color={'white'}
                size={'md'}
                alignSelf={["center", "center", "flex-end"]}
                w={["100%", "50%", "auto"]}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ContactUs;
