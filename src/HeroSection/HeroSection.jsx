import { Box, Button, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import mm from "../Images/woman-doing-workout-gym-with-trainer.jpg";

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
            pb={21}
        >
            {/* Image Section */}
            <Box
                w={["100%", "90%", "50%"]}
                textAlign={["center", "center", "right"]}
                mb={[5, 5, 0]}
            >
                <Image
                    boxSize={["80%", "70%", "90%"]}
                    mx={["auto", "auto", "0"]}
                    src={mm}
                    alt="coaches"
                    borderRadius="md"
                    objectFit="cover"
                />
            </Box>

            {/* Text Section */}
            <Box
                m={5}
                w={["100%", "80%", "50%"]}
                pos={'relative'}
                textAlign={["center", "center", "left"]}
            >
                <Heading
                    fontWeight={'bold'}
                    fontFamily={'inter'}
                    color={'#2d2d2d'}
                    fontSize={["xl", "2xl", "3xl", "4xl"]}
                >
                    FIND YOUR PERFECT PERSONAL COACH, ANYTIME, ANYWHERE
                </Heading>

                <Text
                    fontSize={["sm", "md", "lg"]}
                    mt={4}
                    w={["100%", "100%", "85%"]}
                    mx={["auto", "auto", "0"]}
                    color={'gray.600'}
                    fontWeight={'regular'}
                >
                    Connecting you with certified coaches and personal trainers for tailored fitness journeys.
                </Text>

                <Flex
                    mt={8}
                    justifyContent={["center", "center", "flex-start"]}
                >
                    <Button
                        _hover={{ bg: "gray.600" }}
                        h={12}
                        w={["130px", "140px", "150px"]}
                        mr={3}
                        bg={'#2d2d2d'}
                        color={'white'}
                        borderRadius={0}
                    >
                        Get Started
                    </Button>

                    {/* <Button
                        fontFamily={'inter'}
                        w={["130px", "140px", "150px"]}
                        borderRadius={0}
                        bg={'transparent'}
                        color={'black'}
                        fontWeight={'bold'}
                        ml={3}
                    >
                        <img style={{ marginRight: 12, width: 28 }} src="play-circle.svg" alt="play" />
                        Play video
                    </Button> */}
                </Flex>

                <Box
                    display="flex"
                    justifyContent={["center", "center", "flex-start"]}
                    alignItems="center"
                    mt={6}
                >   
                    <Link to="/https://www.linkedin.com/company/mycoach1/" >
                        <Icon as={FaLinkedin} w={6} h={6} color="#2d2d2d" mx={2} />                    
                    </Link>

                    <Link to="/https://www.facebook.com/profile.php" >
                        <Icon as={FaInstagram} w={6} h={6} color="#2d2d2d" mx={2} />
                    </Link>

                    <Link to="/https://www.instagram.com/mycoachonline/" >
                        <Icon as={FaFacebook} w={6} h={6} color="#2d2d2d" mx={2} />
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};
