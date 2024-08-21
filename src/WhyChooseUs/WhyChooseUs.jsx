import React from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

function WhyChooseUs() {
  return (
    <Box bg={'white'} fontFamily={'sans-serif'} mt={10} p={[5, 10, 20]} textAlign="center">
      <Heading as="h2" size="xl" mb={4}>
      Pourquoi Nous Choisir

      </Heading>

      <Flex justifyContent="center">
        <Text
          w={["90%", "80%", "70%"]}
          fontSize={["md", "lg"]}
          color="gray.600"
          mb={8}
          fontFamily={'sans-serif'}
        >
          Choisir My Coach, c'est opter pour la flexibilité, la commodité et un accompagnement personnalisé. Que vous soyez débutant en fitness ou athlète chevronné, notre plateforme vous fournit les outils et le soutien nécessaires pour atteindre vos objectifs.

        </Text>
      </Flex>

      <Flex
        justify="space-around"
        alignItems="center"
        flexWrap="wrap"
        spacing={10}
      >
        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="healthIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
             Commodité
          </Heading>
          <Text color="gray.600">
              Accédez à une variété de coachs certifiés depuis chez vous.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="YogaIcon.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
              Personnalisation 
          </Heading>
          <Text color="gray.600">
              Obtenez des plans d'entraînement personnalisés et un suivi des progrès.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="flexibility.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
              Flexibilité 
          </Heading>
          <Text color="gray.600">
              Réservez des séances aux moments et aux lieux qui vous conviennent.
          </Text>
        </Box>

        <Box
          bg="white"
          p={6}
          borderRadius={20}
          m={1}
          mb={4}
          width={["100%", "45%", "300px"]}
        >
          <Flex justify={'center'} mb={4}>
            <Image src="handshake.svg" boxSize={["80px", "100px", "120px"]} />
          </Flex>
          <Heading as="h3" size="md" mb={2}>
              Motivation 
          </Heading>
          <Text color="gray.600">
              Restez motivé avec des suivis réguliers de votre coach.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default WhyChooseUs;
