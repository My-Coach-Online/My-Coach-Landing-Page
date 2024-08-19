import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function Stats() {
  return (
    <Box 
      bg="#247CF4" 
      color="white"
      p={[5, 8, 10]}  // Responsive padding
      w="100%"  // Full width for all screen sizes
    >
      <Flex 
        justify={["center", "space-around"]}  // Adjust justify content
        alignItems="center"  // Center items vertically
        flexDirection={["column", "column", "row"]}  // Stack boxes on small screens
        color="white" 
        textAlign={["center", "center", "left"]}  // Center text on small screens
      >
        <Box mb={[4, 4, 0]}> 
          <Text fontSize={["24px", "26px", "28px"]} fontWeight="bold">500+</Text>
          <Text fontSize={["lg", "xl"]} fontWeight="bold">Happy Members</Text>
          <Text>Our community is growing fast</Text>
        </Box>
        <Box mb={[4, 4, 0]}>
          <Text fontSize={["24px", "26px", "28px"]} fontWeight="bold">5+</Text>
          <Text fontSize={["lg", "xl"]} fontWeight="bold">Year Experience</Text>
          <Text>Experience in various workouts</Text>
        </Box>
        <Box mb={[4, 4, 0]}>
          <Text fontSize={["24px", "26px", "28px"]} fontWeight="bold">13+</Text>
          <Text fontSize={["lg", "xl"]} fontWeight="bold">Certified Trainers</Text>
          <Text>Guidance at every step</Text>
        </Box>
        <Box>
          <Text fontSize={["24px", "26px", "28px"]} fontWeight="bold">90%</Text>
          <Text fontSize={["lg", "xl"]} fontWeight="bold">Customer Satisfaction</Text>
          <Text>We ensure your progress satisfaction</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Stats;
