import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <Flex
            w={["100%", "100%", "100%"]}
            mb={[10, 10, 0]}
            bg={'white'}
            direction={['column', 'column', 'row']}
            alignItems="center"
            justifyContent="center"
            p={[5, 5, 10]}
        >
            {/* Text */}
            <Box
                m={5}
                w={["100%", "80%", "50%"]}
                textAlign={["center", "center", "left"]}
                order={[2, 2, 1]}
            >
                <Box>
                    <Heading fontWeight={'Bold'} fontFamily={'inter'} color={'#2d2d2d'}>
                        FIND YOUR PERFECT PERSONAL COACH, ANYTYME, ANYWHERE
                    </Heading>
                    <Text fontSize={["sm", "md", "lg"]} mt={3} color={'gray.500'} fontWeight={'regular'}>
                        Connecting you with certified coaches and personal trainers for tailored fitness journeys
                    </Text>
                </Box>
                <Flex mt={5} justifyContent={["center", "center", "flex-start"]}>
                    <Button
                        _hover={{ bg: "gray.600" }}
                        h={42}
                        w={150}
                        mr={2}
                        bg={'#2d2d2d'}
                        color={'white'}
                        borderRadius={0}
                    >
                        Get Started
                    </Button>
                    <Button
                        fontFamily={'inter'}
                        w={150}
                        borderRadius={0}
                        bg={'transparent'}
                        color={'black'}
                        fontWeight={'bold'}
                    >
                        <img style={{ marginRight: 12, width: 30 }} src="play-circle.svg" alt="play" />
                        Play video
                    </Button>
                </Flex>
                <Flex mt={5} justifyContent={["center", "center", "flex-start"]}>
                    <Icon as={FaLinkedin} w={6} h={6} color="#2d2d2d" mr={4} />
                    <Icon as={FaInstagram} w={6} h={6} color="#2d2d2d" mr={4} />
                    <Icon as={FaFacebook} w={6} h={6} color="#2d2d2d" />
                </Flex>
            </Box>

            {/* Illustration */}
            <Box w={["100%", "80%", "50%"]} order={[1, 1, 2]} mb={[5, 5, 0]}>
                <img src="coach.png" alt="coaches" width="100%" />
            </Box>
        </Flex>
    );
}
