import { Box, Button, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <Flex
            w={"100%"}
            mx="auto"
            mb={[10, 10, 0]}
            bg={'white'}
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            p={[4, 6, 8]}
            pb={21}
            fontFamily={'sans-serif'}
        >
            {/* Image Section */}
            <Box
                w={["100%", "90%", "50%"]}
                textAlign={["center", "center","center", "right"]}
                mb={[5, 5, 0]}
            >
                <Image
                    boxSize={["80%", "70%","70%", "90%"]}
                    mx={["auto", "auto", "0"]}
                    src={"woman-doing-workout-gym-with-trainer-optimizes.jpg"}
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
                textAlign={["center", "center","center", "left"]}
                fontFamily={'sans-serif'}
            >
                <Heading
                    fontWeight={'bold'}
                    fontFamily={'sans-serif'}
                    color={'#2d2d2d'}
                    fontSize={["xl", "2xl", "3xl", "4xl"]}
                >
                    Trouvez Votre Coach Parfait, À Tout Moment, Partout.    

                </Heading>

                <Text
                    fontSize={["sm", "md", "lg"]}
                    mt={4}
                    w={"-moz-fit-content"}
                    color={'gray.600'}
                    fontFamily={'sans-serif'}
                >
                    Imaginez atteindre vos objectifs de fitness avec l'accompagnement de coachs de classe mondiale, le tout depuis le confort de votre propre emploi du temps et lieu. Découvrez My Coach, votre plateforme personnelle vers un coaching de fitness expert, conçue rien que pour vous.
                </Text>

                <Flex
                    mt={8}
                    justifyContent={["center", "center", "flex-start"]}
                    flexDirection={["column", "column",'column', "row"]}
                >
                    <Button
                        alignSelf={'center'}
                        fontFamily={'sans-serif'}
                        w={'235px'}
                        _hover={{ bg: "gray.700" }}
                        mb={[5,5,5,0]}
                        h={12}
                        mr={[0,0,0,3]}
                        bg={'#2d2d2d'}
                        color={'white'}
                        borderRadius={0}
                        border={"none"}
                        as={'a'}
                        target='_blank'
                        href="https://forms.gle/L8Kh8xLqSdynyacn7"
                    >
                        Rejoignez la liste d'attente
                    </Button>

                    <Button
                        fontFamily={'sans-serif'}
                        h={42}
                        w={"235px"}
                        borderRadius={0}
                        bg="transparent"
                        border="1px solid"
                        color="black"
                        fontWeight="bold"
                        alignSelf={'center'}
                        as={'a'}
                        target='_blank'
                        href="https://forms.gle/QGVzkTqWWHnRTjcX6"
                    >
                         Rejoignez en tant que Coach
                    </Button>
                </Flex>

                <Flex
                    justify={['center','center', 'center',  'start']}
                >
                    
                <Box
                    display="flex"
                    justifyContent={["center", "center", "flex-start"]}
                    alignItems="center"
                    mt={6}
                >   
                    <a target='_blank' href="https://www.linkedin.com/company/mycoach1/" >
                        <Icon as={FaLinkedin} w={6} h={6} color="#2d2d2d" mx={2} />                    
                    </a>

                    <a target='_blank' href="https://www.instagram.com/mycoachonline/" >
                        <Icon as={FaInstagram} w={6} h={6} color="#2d2d2d" mx={2} />
                    </a>

                    <a target='_blank' href="https://www.facebook.com/profile.php?id=61564032957860" >
                        <Icon as={FaFacebook} w={6} h={6} color="#2d2d2d" mx={2} />
                    </a>
                </Box>
                </Flex>

            </Box>
        </Flex>
    );
};
