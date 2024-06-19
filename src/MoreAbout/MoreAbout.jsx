import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";


export const MoreAbout = () => {

    return(
        <>

            <Flex bg={'#F4F4F4'}  transform={'scale(0.85)'} pt={10} pb={100} >            
                
                {/* Pictures */}

                <Box pos={'relative'} top={10}>

                    <Box p={2} >
                        <img src="side-view-kid-practicing-boxing.svg" alt="sparring" />
                    </Box>
                    <Box p={2} pt={4}>
                        <img src="full-stretch-position-yoga-mat.svg" alt="yoga" />
                    </Box>

                </Box>

                <Box p={2} pos={'relative'} top={10}>
                        <img src="couple-training-together-gym.svg" alt="gym" />
                </Box>

                {/* Text */}
                <Box transform={'scale(1.4)'} pos={'relative'} top={70} left={200} w={451} fontFamily={'inter'}>
                    <Heading fontSize={42} color={"#2d2d2d"}>
                        More About MyCoach
                    </Heading>

                    <Text color={'gray'} pt={5} pb={5} textAlign={'left'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                      <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                    </Text>

                    <Flex transform={'scale(0.9)'} pt={10} justify={'center'}>

                        <Button _hover={{bg:"gray.600"}} h={42} w={180} mr={2}  bg={'#2d2d2d'} color={'white'} borderRadius={0}>
                            Browse Trainers
                        </Button>

                        <Button fontFamily={'inter'} h={42} w={180} borderRadius={0} bg={'transparent'} border='1px solid' color={'black'} fontWeight={'bold'}>
                            About us
                        </Button>

                    </Flex>

                </Box>

           
            </Flex>


        
        </>
    )
}