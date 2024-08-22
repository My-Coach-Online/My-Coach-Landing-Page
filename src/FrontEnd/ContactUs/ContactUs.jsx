import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button, Stack, Text, Icon, Divider, Select } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    fitnessGoal: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API
      await axios.post('https://my-coach-back-end.onrender.com/api/contact', formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an issue sending your message.");
    }
  };

  return (
    <ChakraProvider>
      <Box mt={20} fontFamily={'sans-serif'} mb={4} bg="white" textAlign={'center'}>
        <Heading>
          Formulaire de Contact
        </Heading>
        <Text mt={2}>
          Any questions or remarks? Just write us a message!
        </Text>
      </Box>
      <Flex mb={5} justify="center" align="center" bg="white" p={[4, 6]} minHeight="100vh">
        <Flex
          width={["100%", "100%", "70%", "80%"]}
          bg="gray.50"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          flexDirection={["column", "column", "column", "row"]}
        >
          {/* Contact Information Sidebar */}
          <Box
            bg="#1E6BD3"
            color="white"
            p={10}
            width={["100%", "100%", "100%", "35%"]}
            textAlign={["center", "center", "center", "left"]}
          >
            <Heading as="h3" size="lg" mb={4}>
              Contact Information
            </Heading>
            <Text mb={4}>Lorem ipsum dolor sit amet consectetur</Text>
            <Stack mt={5} spacing={4} align={["center", "center", "center", "flex-start"]}>
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
          <Box p={10} width={["100%", "100%", "100%", "65%"]}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={7}>
                <FormControl id="fullName" isRequired>
                  <FormLabel>Nom Complet</FormLabel>
                  <Input id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Nom Complet" />
                </FormControl>

                <Flex flexDirection={["column", "column", "row"]}>
                  <FormControl mb={[7,7,0]} id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                  </FormControl>

                  <FormControl id="phone" ml={[0, 0, 2]}>
                    <FormLabel>Numéro de Téléphone</FormLabel>
                    <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Numéro de Téléphone" />
                  </FormControl>
                </Flex>

                <Flex flexDirection={["column", "column", "row"]}>
                  <FormControl mb={[7,7,0]} id="city">
                    <FormLabel>Ville</FormLabel>
                    <Input id="city" value={formData.city} onChange={handleChange} placeholder="Ville" />
                  </FormControl>

                  <FormControl id="fitnessGoal" ml={[0, 0, 2]}>
                    <FormLabel>Objectif Fitness</FormLabel>
                    <Select id="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange}>
                      <option value="" disabled selected>Choisissez une option</option>
                      <option value="Perte de Poids">Perte de Poids</option>
                      <option value="Prise de Muscle">Prise de Muscle</option>
                      <option value="Fitness Général">Fitness Général</option>
                    </Select>
                  </FormControl>
                </Flex>
                
                <Button
                  type="submit"
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
            </form>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ContactUs;
