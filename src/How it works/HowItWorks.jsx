import React from "react";
import { ChakraProvider, Box, Flex, Text, Icon, Image ,Heading } from '@chakra-ui/react';
import { FaHeartbeat, FaSpa, FaHandshake } from 'react-icons/fa';


export const HowItWorks = () => {
    return (
        <Box>
             <Box fontFamily={'inter'} mt={10} p={20} textAlign="center">

            <Heading  as="h2" size="xl" mb={4}>
            How It Works
            </Heading>

            <Flex    justifyContent="center">

                <Text w={'80%'} fontSize="lg" color="gray.600" mb={8}>
                Choosing My Coach means choosing flexibility, convenience, and personalized care. Whether you are a fitness beginner or a seasoned athlete, our platform provides the tools and support you need to reach your goals. 

                </Text>

            </Flex>

            <Flex justify="space-around"  m={50}>

            <Box bg="white" p={6} borderRadius={20}  m={0} width="300px">

            <Flex justify={'center'}>

                <Image  src="searchIcon.svg" boxSize={120} />

                </Flex>          

                <Heading as="h3" size="md" mb={2}>
                    Choose a Coach
                </Heading>

                <Text color="gray.600">
                    Browse and select a certified coach.
                </Text>

            </Box>

            <Box h={6} pos={'relative'} pr={-100}  mr={-100} ml={-100} top={20.1} >
                    <Image boxSize={200}  h={6} src="fleche.svg" transform="rotateX(180deg)" />
             </Box>

            <Box bg="white" p={6} borderRadius={20}  m={0} width="300px">
                <Flex justify={'center'}>

                    <Image  src="Calendar.svg" boxSize={120} />

                </Flex>

                <Heading as="h3" size="md" mb={2}>
                    Book a Session
                </Heading>

                <Text color="gray.600">
                Book sessions at times and locations that suit you.
                </Text>

            </Box>

            <Box h={6} pos={'relative'} pr={-100}  mr={-100} ml={-100} top={115} >
                    <Image boxSize={200}  h={6} src="fleche.svg" />
             </Box>



            <Box bg="white" p={6} borderRadius={20}  m={0} width="300px">
                <Flex justify={'center'}>

                    <Image  src="success.svg" boxSize={120} />

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
        </Box>
    )
}