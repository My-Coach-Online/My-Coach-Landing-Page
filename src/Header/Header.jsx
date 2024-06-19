import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";


export const Header =  () =>{


    return (
        <Box m={7} >

            <Flex justify={'space-between'}>
                    <Box justifySelf={'start'}  >
                        <img src="myc1_1.svg" alt="Logo" width={150} height={150} />
                    </Box>
                    <Flex w={600} justify={'space-around'} color={'gray.600'} fontFamily={'signika'} fontWeight={500}>
                        <Link >Home</Link>
                        <Link >About</Link>
                        <Link >Trainers</Link>
                        <Link >Categories</Link>
                        <Link >Review</Link>
                    </Flex>
                    <Box>

                        <Button borderRadius={0} bg={'#247CF4'} color={'white'} as={'a'}>
                            Join Now
                        </Button>

                    </Box>
            </Flex>

        </Box>
    )
}
