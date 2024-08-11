import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <Flex
            w={"100%"}
            mx="auto"
            mb={[10, 10, 0]}
            bg={'white'}
            flexDirection={["column", "column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            p={[4, 6, 8]}
        >
            {/* Text */}
            <Box
                m={5}
                w={["100%", "80%", "50%"]}
                pos={'relative'}
                textAlign={["center", "center", "left"]}
                order={[2, 2, 1]}
            >
                <Heading
                    fontWeight={'bold'}
                    fontFamily={'inter'}
                    color={'#2d2d2d'}
                    fontSize={["lg", "xl", "2xl", "4xl"]}
                >
                    FIND YOUR PERFECT PERSONAL COACH, ANYTIME, ANYWHERE
                </Heading>

                <Text
                    fontSize={["sm", "md", "lg"]}
                    mt={3}
                    w={["100%", "100%", "80%"]}
                    mx={["auto", "auto", "0"]}
                    color={'gray.500'}
                    fontWeight={'regular'}
                >
                    Connecting you with certified coaches and personal trainers for tailored fitness journeys
                </Text>

                <Flex
                    mt={10}
                    justifyContent={["center", "center", "flex-start"]}
                >
                    <Button
                        _hover={{ bg: "gray.600" }}
                        h={10}
                        w={["120px", "140px", "150px"]}
                        mr={2}
                        bg={'#2d2d2d'}
                        color={'white'}
                        borderRadius={0}
                    >
                        Get Started
                    </Button>

                    <Button
                        fontFamily={'inter'}
                        w={["120px", "140px", "150px"]}
                        borderRadius={0}
                        bg={'transparent'}
                        color={'black'}
                        fontWeight={'bold'}
                        ml={2}
                    >
                        <img style={{ marginRight: 12, width: 30 }} src="/play-circle.svg" alt="play" />
                        Play video
                    </Button>
                </Flex>

                <Box
                    display="flex"
                    justifyContent={["center", "center", "flex-start"]}
                    alignItems="center"
                    w="100%"
                    mt={5}
                >
                    <Icon as={FaLinkedin} w={6} h={6} color="#2d2d2d" mx={2} />
                    <Icon as={FaInstagram} w={6} h={6} color="#2d2d2d" mx={2} />
                    <Icon as={FaFacebook} w={6} h={6} color="#2d2d2d" mx={2} />
                </Box>
            </Box>

            {/* Illustration */}
            <Box
                w={["80%", "70%", "50%"]}
                mx="auto"
                order={[1, 1, 2]}
                mb={[6, 6, 0]}
            >
                <img src="partners-private-professional-life.png" alt="coaches" style={{ width: "100%" }} />
            </Box>
        </Flex>
    );
}
