import React from "react";
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

export const HowItWorks = () => {
  return (
    <Box id="HowItWorks" bg={"#f4f4f4"} fontFamily={'sans-serif'} mt={10} p={[5, 10, 20]} textAlign="center">
      <Heading as="h2" size="xl" mb={4}>
          Comment Ça Marche
      </Heading>

      <Flex justifyContent="center">
        {/* <Text w={["90%", "80%", "70%"]} fontSize={["md", "lg"]} color="gray.600" mb={8}>
        À Propos de Nous

        </Text> */}
      </Flex>

      <Flex
        justify="center"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        flexWrap="wrap"
        m={50}
      >
        {/* Step 1 */}
        <Box marginX={[0,2,5]} bg={'white'} p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="searchIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
              Choisissez un Coach
          </Heading>
          <Text color="gray.600">
              Parcourez et sélectionnez un coach qui correspond à vos aspirations.
                 </Text>
        </Box>

        {/* Step 2 */}
        <Box marginX={[0,2,5]} bg="white" p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="Calendar.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
              Réservez une séance 
          </Heading>
          <Text color="gray.600">
              Planifiez votre séance d'entraînement à l'heure et à l'endroit souhaités.
          </Text>
        </Box>

        {/* Step 3 */}
        <Box marginX={[0,2,5]} bg="white" p={6} borderRadius={20} m={4} width={["90%", "300px"]} mx="auto">
          <Flex justify={'center'} mb={4}>
            <Image src="success.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
             Atteignez vos objectifs
          </Heading>
          <Text color="gray.600">
              Suivez votre plan personnalisé et recevez des retours.
          </Text>
          <br/>
        </Box>
      </Flex>
    </Box>
  );
};
