import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function Stats() {
  return (
    <Box bg="#247CF4" p={10}
    w={["150%", "120%", "100%"]}

    >
      <Flex justify="space-around" color="white" textAlign="center">
        <Box>
          <Text fontSize={28} fontWeight="bold">500+</Text>
          <Text fontSize="xl" fontWeight="bold">Happy Members</Text>
          <Text>Our community is growing fast</Text>
        </Box>
        <Box>
          <Text fontSize={28} fontWeight="bold">5+</Text>
          <Text fontSize="xl" fontWeight="bold">Year Experience</Text>
          <Text>Experience in various workouts</Text>
        </Box>
        <Box>
          <Text fontSize={28} fontWeight="bold">13+</Text>
          <Text fontSize="xl" fontWeight="bold">Certified Trainers</Text>
          <Text>Guidance at every step</Text>
        </Box>
        <Box>
          <Text fontSize={28} fontWeight="bold">90%</Text>
          <Text fontSize="xl" fontWeight="bold">Customer Satisfaction</Text>
          <Text>We ensure your progress satisfaction</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Stats;
