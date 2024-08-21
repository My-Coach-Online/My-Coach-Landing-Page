import React from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Heading, Button, Stack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const TrainerCard = ({ image, name, rating, specialisations }) => {
  return (
    <Box 
      borderRadius="md" 
      overflow="hidden" 
      boxShadow="md" 
      maxW={["100%", "45%", "sm"]} 
      m={4}
      width={["100%", "45%", "sm"]}  // Adjust width for different screen sizes
    >
      <Image src={image} alt={name} objectFit="cover" w="100%" h={["200px", "250px", "300px"]} />
      <Box p={4} bg="gray.800" color="white">
        <Flex justify="space-between" align="center" mb={2}>
          <Heading as="h3" fontWeight={'regular'} size="md">{name}</Heading>
          <Flex align="center">
            <StarIcon color="yellow.400" />
            <Text ml={1}>{rating}/5</Text>
          </Flex>
        </Flex>
        <Text fontWeight="bold">Specialisations:</Text>
        <Text>{specialisations}</Text>
      </Box>
    </Box>
  );
};

const Coaches = () => {
  const trainers = [
    {
      image: 'amanda.svg',
      name: 'Amanda',
      rating: 5,
      specialisations: 'Crossfit Expert, Nutrition & Rehab',
    },
    {
      image: 'madison.svg',
      name: 'Madison Froning',
      rating: 5,
      specialisations: 'Crossfit Expert, Nutrition & Rehab',
    },
    {
      image: 'joshua.svg',
      name: 'Joshua Franklin',
      rating: 5,
      specialisations: 'Crossfit Expert, Nutrition & Rehab',
    },
  ];

  return (
    <ChakraProvider>
      <Box 
        mb={10} 
        bg={'white'} 
        fontFamily={'sans-serif'}  
        p={[5, 8, 10]}
        transform={["scale(1)", "scale(0.95)", "scale(0.9)"]}
      >
        <Box pb={10} textAlign={'center'}>
          <Heading fontFamily={'sans-serif'} fontSize={["2xl", "3xl", "4xl"]}>
            Meet Our Coaches
          </Heading>
        </Box>
        <Flex justify="center" wrap="wrap">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              image={trainer.image}
              name={trainer.name}
              rating={trainer.rating}
              specialisations={trainer.specialisations}
            />
          ))}
        </Flex>
        <Box mt={16} textAlign={'center'}>
          <Button 
            borderRadius={0} 
            color={'white'} 
            p={6} 
            bg={'gray.800'}
            w={["80%", "60%", "auto"]}
          >
            View All Coaches
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Coaches;
