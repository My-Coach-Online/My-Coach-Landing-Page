import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const MoreAbout = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      pt={[5, 10]}
      pb={[50, 100]}
      px={[4, 8, 12]}
      justify="center"
      alignItems="center"
      bg={"#f4f4f4"}
    >
      {/* Image Section */}
      <Box w={["100%", "100%", "40%"]} textAlign={["center","center", "left"]} mr={[0,0,10]} mb={[5, 5, 0]}>
        <Image
          order={[1,2,2]}
          boxSize={["80%", "85%", "100%"]}
          src="woman-helping-man-gym.jpg"
          alt="coaching"
          mx={["auto", "auto", "0"]}
          borderRadius="md"
          objectFit="cover"
        />
      </Box>

      {/* Text Section */}
      <Box
        order={[2,1,1]}
        w={["100%", "100%", "50%"]}
        fontFamily="inter"
        textAlign={["center", "left"]}
      >
        <Heading
          fontSize={["32px", "36px", "42px"]}
          pb={3}
          color="#2d2d2d"
          textAlign={["center", "left"]}
        >
          About MyCoach
        </Heading>

        <Text color="gray" pt={5} pb={5} textAlign={["center", "left"]} w={["100%", "100%", "85%"]} mx="auto">
          My Coach is a cutting-edge platform designed to bridge the gap between
          fitness enthusiasts and certified sports coaches. We understand that
          achieving your fitness goals can be challenging without the right
          guidance and support. That's why we've created a user-friendly space
          where you can easily connect with professional trainers who tailor
          their expertise to your unique needs and schedule.
        </Text>

        <Flex
          pt={5}
          justify={["center", "center", "flex-start"]}
          flexDirection={["column", "row"]}
          alignItems="center"
        >
          <Button
            _hover={{ bg: "gray.400", color: "gray.800" }}
            h={42}
            w={["80%", "180px"]}
            mb={[3, 0]}
            mr={[0, 3]}
            bg="#2d2d2d"
            color="white"
            borderRadius={0}
          >
            Browse Trainers
          </Button>

          <Button
            fontFamily="inter"
            h={42}
            w={["80%", "180px"]}
            borderRadius={0}
            bg="transparent"
            border="1px solid"
            color="black"
            fontWeight="bold"
          >
            How it works
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
