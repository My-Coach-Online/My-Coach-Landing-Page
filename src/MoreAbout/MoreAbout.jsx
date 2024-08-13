import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const MoreAbout = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      pt={[5, 10]}
      pb={[50, 100]}
      px={[4, 8]}
      justify="center"
      alignItems="center"
    >
      {/* Pictures
      <Flex
        flexDirection={["column", "row"]}
        alignItems="center"
        transform={["scale(1)", "scale(0.85)"]}
        mb={[5, 5, 0]}
      >
        <Box pos="relative" top={[-5, -5, -10]}>
          <Box p={2}>
            <img
              src="side-view-kid-practicing-boxing.svg"
              alt="sparring"
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </Box>
          <Box p={2} pt={2}>
            <img
              src="full-stretch-position-yoga-mat.svg"
              alt="yoga"
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </Box>
        </Box>

        <Box p={2} pos="relative" top={[-5, -5, -10]}>
          <img
            src="couple-training-together-gym.svg"
            alt="gym"
            style={{ width: "100%", maxWidth: "200px" }}
          />
        </Box>
      </Flex> */}

      {/* Text */}
      <Box
        transform={["scale(1)", "scale(1.2)"]}
        pos="relative"
        top={[0, 50]}
        left={[0, 0, 50]}
        w={["100%", "100%", "451px"]}
        fontFamily="inter"
        textAlign={["center", "left"]}
      >
        <Flex justify={["center", "start"]}>
          <Heading fontSize={["32px", "36px", "42px"]} pb={3} color="#2d2d2d">
            About MyCoach
          </Heading>
        </Flex>

        <Text color="gray" pt={5} pb={5} textAlign="left">
          My Coach is a cutting-edge platform designed to bridge the gap between
          fitness enthusiasts and certified sports coaches. We understand that
          achieving your fitness goals can be challenging without the right
          guidance and support. That's why we've created a user-friendly space
          where you can easily connect with professional trainers who tailor
          their expertise to your unique needs and schedule.
        </Text>

        <Flex
          transform={["scale(1)", "scale(0.9)"]}
          pt={5}
          justify={["center", "start"]}
          flexDirection={["column", "row"]}
          alignItems="center"
        >
          <Button
            _hover={{ bg: "gray.400", color: "gray.800" }}
            h={42}
            w={["80%", "180px"]}
            mb={[3, 0]}
            mr={[0, 2]}
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
