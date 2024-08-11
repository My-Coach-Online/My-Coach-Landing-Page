import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box bg={'white'} p={[4, 5, 7]}>

      <Flex 
        justify={'space-between'} 
        alignItems={'center'} 
        flexDirection={["column", "column", "row"]}
      >
        
        {/* Logo */}
        <Box 
          justifySelf={'start'} 
          mb={[4, 4, 0]}
        >
          <img src="myc1_1.svg" alt="Logo" width={100} height={100} />
        </Box>

        {/* Navigation Links */}
        <Flex 
          w={["100%", "100%", "600px"]} 
          justify={['space-around', 'space-around', 'space-between']} 
          color={'gray.600'} 
          fontFamily={'inter'} 
          fontWeight={500}
          flexDirection={["column", "column", "row"]}
          alignItems={["center", "center", "flex-start"]}
          mb={[4, 4, 0]}
        >
          <Link mb={[2, 2, 0]}>Home</Link>
          <Link mb={[2, 2, 0]}>About</Link>
          <Link mb={[2, 2, 0]}>Trainers</Link>
          <Link mb={[2, 2, 0]}>Categories</Link>
          <Link>Review</Link>
        </Flex>

        {/* Join Now Button */}
        <Box>
          <Button 
            borderRadius={0} 
            bg={'#247CF4'} 
            color={'white'} 
            as={'a'} 
            w={["100%", "100%", "auto"]}
          >
            Join Now
          </Button>
        </Box>

      </Flex>

    </Box>
  )
}
