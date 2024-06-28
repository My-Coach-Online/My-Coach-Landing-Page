import React from 'react';
import { ChakraProvider, Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button, Stack, Text, Icon, Divider } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <ChakraProvider>
            <Box mt={20} fontFamily={'inter'} mb={-20} bg="#white"  textAlign={'center'}>
                <Heading>
                    Contact us
                </Heading>
                <Text>
                Any question or remarks? Just write us a message!
                </Text>
            </Box>
      <Flex justify="center" align="center" bg="#white"  minHeight="100vh">
        <Flex width="80%" bg="gray.50" borderRadius="md" boxShadow="md" overflow="hidden">
          {/* Contact Information Sidebar */}
          <Box bg="#1E6BD3" color="white" p={10} width="35%">
            <Heading as="h3" size="lg" mb={4}>
              Contact Information
            </Heading>
            <Text mb={4}>Lorem ipsum dolor sit amet consectetur </Text>
            <Stack mt={5} spacing={4}>
              <Flex mt={5} align="center">
                <Icon as={FaPhone} boxSize={5} mr={3} />
                <Text>+212 655555555</Text>
              </Flex>
              <Flex mt={5} align="center">
                <Icon as={FaEnvelope} boxSize={5} mr={3} />
                <Text>mycoach@gmail.com</Text>
              </Flex>
              <Flex mt={5} align="center">
                <Icon as={FaMapMarkerAlt} boxSize={5} mr={3} />
                <Text>Casablanca, Morocco</Text>
              </Flex>
              <Divider borderColor="whiteAlpha.300" />
              <Flex mt={4}>
                <Icon as={FaTwitter} boxSize={6} mr={4} cursor="pointer" />
                <Icon as={FaInstagram} boxSize={6} mr={4} cursor="pointer" />
                <Icon as={FaLinkedin} boxSize={6} cursor="pointer" />
              </Flex>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box p={10} width="65%">
            <Stack spacing={4}>
              <Flex>
                <FormControl id="first-name" mr={2} isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="First Name" />
                </FormControl>
                <FormControl id="last-name" ml={2} isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last Name" />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl id="email" mr={2} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email" />
                </FormControl>
                <FormControl id="phone" ml={2}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Phone Number" />
                </FormControl>
              </Flex>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write your message..." />
              </FormControl>
              <Button borderRadius={0} mt={5}  bg={'#1E6BD3'} color={'white'} size={'md'} alignSelf="flex-end">
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
