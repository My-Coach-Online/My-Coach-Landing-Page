import React from "react";
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

export const HowItWorks = () => {
  return (
    <Box bg={"#f4f4f4"} fontFamily={'inter'} mt={10} p={[5, 10, 20]} textAlign="center">
      <Heading as="h2" size="xl" mb={4}>
        How It Works
      </Heading>

      <Flex justifyContent="center">
        <Text w={["90%", "80%", "70%"]} fontSize={["md", "lg"]} color="gray.600" mb={8}>
          Choosing My Coach means choosing flexibility, convenience, and personalized care. Whether you are a fitness beginner or a seasoned athlete, our platform provides the tools and support you need to reach your goals.
        </Text>
      </Flex>

      <Flex
        justify="center"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        flexWrap="wrap"
        m={50}
      >
        {/* Step 1 */}
        <Box bg={'white'} p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="searchIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Choose a Coach
          </Heading>
          <Text color="gray.600">
            Browse and select a certified coach.        
                 <br/> <br />
          </Text>
        </Box>

        {/* Step 2 */}
        <Box bg="white" p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="Calendar.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Book a Session
          </Heading>
          <Text color="gray.600">
            Book sessions at times and locations that suit you.
          </Text>
        </Box>

        {/* Step 3 */}
        <Box bg="white" p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="success.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
            Achieve Your Goals
          </Heading>
          <Text color="gray.600">
            Follow your personalized plan and get feedback.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
