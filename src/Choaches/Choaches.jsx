import React from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Heading, Stack, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const TrainerCard = ({ image, name, rating, specialisations }) => {
  return (
    <Box bg={'#f4f4f4'} borderRadius="md" overflow="hidden" boxShadow="md" maxW="sm" m={4}>
      <Image src={image} alt={name} objectFit="cover" />
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
      <Box marginBottom={10} background={'#f4f4f4'} transform={'scale(0.9)'} fontFamily={'inter'}  p={5}>
        <Box pb={10} display={'flex'} justifyContent={'center'}>

            <Heading fontFamily={'inter'} >
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
        <Box mt={16} display={'flex'} justifyContent={'center'}>
            <Button borderRadius={0} color={'white'} p={6} bg={'gray.800'}>
              View All Coaches
            </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Coaches;
