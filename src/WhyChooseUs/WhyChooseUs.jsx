import React from 'react';
import { ChakraProvider, Box, Flex, Text, Icon, Heading } from '@chakra-ui/react';
import { FaHeartbeat, FaSpa, FaHandshake } from 'react-icons/fa';


function WhyChooseUs() {
  return (
      <Box p={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Why Choose Us
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Flex justify="space-around" wrap="wrap" spacing={10}>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" m={4} width="300px">
            <Icon as={FaHeartbeat} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Nutrition and diet
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" m={4} width="300px">
            <Icon as={FaSpa} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Nutrition and diet
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" m={4} width="300px">
            <Icon as={FaHandshake} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Nutrition and diet
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </Box>
        </Flex>
      </Box>
  );
}

export default WhyChooseUs;
