import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";


export const HeroSection = () => {
    return (

        <Flex>

        {/* Text */}
        <Box m={5} transform={'scale(1.1)'} w={500}  pos={'relative'} top={150} left={210}>

            <Box transform={'scale(1.4)'}>

                <Heading fontWeight={'Bold'} fontFamily={'inter'} color={'#2d2d2d'}>
                FIND YOU PERFECT PERSONAL TRAINER, ANYTYME, ANYWHERE
                </Heading>

                <Text mt={3} w={460} color={'gray.500'} fontWeight={'regular'}>
                Connecting you with certified coaches and personal trainers for tailored fitness journeys
                </Text>

            </Box>

            <Flex mt={20} pos={'relative'} right={98} >

                <Button mr={2}  bg={'#2d2d2d'} color={'white'} borderRadius={0}>
                    Get Started
                </Button>

                <Button borderRadius={0} bg={'transparent'} color={'black'}>

                    <img style={{marginRight:7, width:30}} src="play-circle.svg" alt="play" />

                            Play video
                </Button>

            </Flex>
        </Box>


        {/* Illustration */}

            <Box transform={'scale(1.3)'} position={'relative'} left={450} top={100}>

                <img  src="coaches.png" alt="coaches" />

            </Box>

        </Flex>


    )
}