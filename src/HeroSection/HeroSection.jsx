import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


export const HeroSection = () => {
    return (

        <Flex>

        {/* Text */}
        <Box m={5} transform={'scale(1.1)'} w={500}  pos={'relative'} top={190} left={210}>

            <Box transform={'scale(1.3)'}>

                <Heading fontWeight={'Bold'} fontFamily={'inter'} color={'#2d2d2d'}>
                FIND YOU PERFECT PERSONAL TRAINER, ANYTYME, ANYWHERE
                </Heading>

                <Text fontSize={15} mt={3} w={460} color={'gray.500'} fontWeight={'regular'}>
                Connecting you with certified coaches and personal trainers for tailored fitness journeys
                </Text>

            </Box>

            <Flex mt={20} pos={'relative'} right={70} >

                <Button _hover={{bg:"gray.600"}} h={42} w={150} mr={2}  bg={'#2d2d2d'} color={'white'} borderRadius={0}>
                    Get Started
                </Button>

                <Button fontFamily={'inter'} w={150} borderRadius={0} bg={'transparent'} color={'black'} fontWeight={'bold'}>

                    <img style={{marginRight:12, width:30}} src="play-circle.svg" alt="play" />

                            Play video
                </Button>

            </Flex>

            <Box color={'black'} display="flex" justifyContent="space-around" alignItems="center" w="200px" p="4" borderRadius="md" pos={'relative'} right={101} mt={5}>
                    <Icon href="#" as={FaLinkedin} w={6} h={6} color="#2d2d2d" />
                    <Icon as={FaInstagram} w={6} h={6} color="#2d2d2d" />
                    <Icon as={FaFacebook} w={6} h={6} color="#2d2d2d" />
            </Box>
        </Box>


        {/* Illustration */}

            <Box transform={'scale(0.5)'} position={'relative'} left={180} bottom={450}>

                <img  src="coach.png" alt="coaches" />

            </Box>

            

        </Flex>


    )
}