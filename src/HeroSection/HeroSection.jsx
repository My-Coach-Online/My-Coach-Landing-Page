import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";


export const HeroSection = () => {
    return (

        <Box m={5} w={500}>

            <Heading fontWeight={'Bold'} fontFamily={'inter'} color={'#2d2d2d'}>
            FIND YOU PERFECT PERSONAL TRAINER, ANYTYME, ANYWHERE
            </Heading>

            <Text color={'gray.500'} fontWeight={'regular'}>
            Connecting you with certified coaches and personal trainers for tailored fitness journeys
            </Text>

        </Box>

    )
}