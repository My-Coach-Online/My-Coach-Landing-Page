import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";


export const MoreAbout = () => {

    return(
        <>

            <Flex  transform={'scale(0.85)'}  pt={10} pb={100} >            
                
                {/* Pictures */}

                {/* <Box pos={'relative'} bottom={20}> */}
                
                    <Box pos={'relative'} top={-5}>

                        <Box p={2} >
                            <img src="side-view-kid-practicing-boxing.svg" alt="sparring" />
                        </Box>
                        <Box p={2} pt={2}>
                            <img src="full-stretch-position-yoga-mat.svg" alt="yoga" />
                        </Box>

                    </Box>

                    <Box p={2} pos={'relative'} top={-5}>
                            <img src="couple-training-together-gym.svg" alt="gym" />
                    </Box>

                {/* </Box> */}


                {/* Text */}
                <Box transform={'scale(1.4)'} pos={'relative'} top={91} left={200} w={451} fontFamily={'inter'}>
                    <Flex justify={'start'}>

                        <Heading fontSize={42} pb={3} color={"#2d2d2d"}>
                            About MyCoach
                        </Heading>

                    </Flex>

                    <Text color={'gray'} pt={5} pb={5} textAlign={'left'}>
                    My Coach is a cutting-edge platform designed to bridge the gap between fitness enthusiasts and certified sports coaches. We understand that achieving your fitness goals can be challenging without the right guidance and support. That's why we've created a user-friendly space where you can easily connect with professional trainers who tailor their expertise to your unique needs and schedule.

                    </Text>

                    <Flex transform={'scale(0.9)'} pt={5} justify={'start'}>

                        <Button stroke={'black'} _hover={{bg:"gray.400", color: 'gray.800'}} h={42} w={180} mr={2}  bg={'#2d2d2d'} color={'white'} borderRadius={0}>
                            Browse Trainers
                        </Button>

                        <Button fontFamily={'inter'} h={42} w={180} borderRadius={0} bg={'transparent'} border='1px solid' color={'black'} fontWeight={'bold'}>
                            How it works 
                        </Button>

                    </Flex>

                </Box>

           
            </Flex>


        
        </>
    )
}