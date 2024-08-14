import React from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

function WhyChooseUs() {
  return (
    <Box bg={'white'} fontFamily={'inter'} mt={10} p={[5, 10, 20]} textAlign="center">
      <Heading as="h2" size="xl" mb={4}>
        Why Choose Us
      </Heading>

      <Flex justifyContent="center">
        <Text
          w={["90%", "80%", "70%"]}
          fontSize={["md", "lg"]}
          color="gray.600"
          mb={8}
        >
          Choosing My Coach means choosing flexibility, convenience, and personalized care. Whether you are a fitness beginner or a seasoned athlete, our platform provides the tools and support you need to reach your goals.
        </Text>
      </Flex>

      <Flex
        justify="space-around"
        alignItems="center"
        flexWrap="wrap"
        spacing={10}
      >
        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="healthIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Convenience
          </Heading>
          <Text color="gray.600">
            Access a variety of certified coaches from your home.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="YogaIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Personalization
          </Heading>
          <Text color="gray.600">
            Get tailored workout plans and progress tracking.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="flexibility.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Flexibility
          </Heading>
          <Text color="gray.600">
            Book sessions at times and locations that suit you.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="handshake.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Motivation
          </Heading>
          <Text color="gray.600">
            Stay motivated with regular check-ins from your coach.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default WhyChooseUs;
