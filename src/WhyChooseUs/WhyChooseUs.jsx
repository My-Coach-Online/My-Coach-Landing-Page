import React from 'react';
import { ChakraProvider, Box, Flex, Text, Icon, Image ,Heading } from '@chakra-ui/react';
import { FaHeartbeat, FaSpa, FaHandshake } from 'react-icons/fa';


function WhyChooseUs() {
  return (
      <Box bg={'#f4f4f4'} fontFamily={'inter'} mt={10} p={20} textAlign="center">

        <Heading  as="h2" size="xl" mb={4}>
          Why Choose Us
        </Heading>

        <Flex    justifyContent="center">

            <Text w={'80%'} fontSize="lg" color="gray.600" mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

        </Flex>

        <Flex justify="space-around" wrap="wrap" spacing={10}>

          <Box bg="white" p={6} borderRadius={20}  m={4} width="300px">

          <Flex justify={'center'}>

            <Image src="healthIcon.svg" boxSize={120} />

            </Flex>          
            
            <Heading as="h3" size="md" mb={2}>
              Nutrition and diet
            </Heading>

            <Text color="gray.600">
              Lorem ipsum dolor sit amet consectetur.
            </Text>

          </Box>

          <Box bg="white" p={6} borderRadius={20}  m={4} width="300px">

          <Flex justify={'center'}>

            <Image src="YogaIcon.svg" boxSize={120} />

            </Flex>          

            <Heading as="h3" size="md" mb={2}>
              Nutrition and diet
            </Heading>

            <Text color="gray.600">
              Lorem ipsum dolor sit amet consectetur.
            </Text>

          </Box>

          <Box bg="white" p={6} borderRadius={20}  m={4} width="300px">
            <Flex justify={'center'}>

                <Image src="handshake.svg" boxSize={120} />

            </Flex>

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
