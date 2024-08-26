import React, { useState } from 'react';
import { ChakraProvider,Badge, Box, Flex, Heading, Button, Text, Image, useDisclosure } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const TrainerCard = ({ image, name, rating, specialisations }) => {
  return (
    <Box 
      borderRadius="md" 
      overflow="hidden" 
      boxShadow="md" 
      maxW={["80%", "45%", "sm"]} 
      m={4}
      width={["80%", "45%", "sm"]}
      
    >
      <Image src={image} alt={name} objectFit="cover" objectPosition="top" w="100%" h={["200px", "250px", "300px"]} />
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
  const [isCardVisible, setIsCardVisible] = useState(false);

  const trainers = [
    {
      image: 'Simo.webp',
      name: 'Bader',
      rating: 5,
      specialisations: 'Crossfit Expert, Nutrition & Rehab',
    },
    {
      image: 'Lazar-PT-Dubai.jpeg.webp',
      name: 'Omar',
      rating: 4,
      specialisations: 'Crossfit Expert, Nutrition & Rehab',
    },
    {
      image: 'box-women.jpg',
      name: 'Samira',
      rating: 5,
      specialisations: 'Boxing, Nutrition & Rehab',
    },
  ];

  return (
    <ChakraProvider>
      <Box mb={10} bg={'white'} fontFamily={'sans-serif'} p={[5, 8, 10]}>
        <Flex 
          justify={'center'}      
          mb={7}  
        >
          <Badge 

              colorScheme="blue"
              fontSize="0.8em"
              p={2}
              borderRadius="md"
              zIndex={2}
            >
              Coming Soon
            </Badge>
        </Flex>
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
            bg={'#247CF4'}
            w={["50%", "40%", "auto"]}
            onClick={() => setIsCardVisible(true)}
          >
            View All Coaches
          </Button>
        </Box>
      </Box>

      {/* Coming Soon Overlay */}
      {isCardVisible && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.7)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={10}
        >
          <Box
            bg="white"
            p={8}
            borderRadius="md"
            textAlign="center"
            maxW="400px"
            boxShadow="lg"
          >
            <Heading fontSize="2xl" mb={4}>Coming Soon</Heading>
            <Text mb={6}>We're working hard to bring you this feature. Stay tuned!</Text>
            <Button onClick={() => setIsCardVisible(false)} bg="#247CF4" color="white">
              Close
            </Button>
          </Box>
        </Box>
      )}
    </ChakraProvider>
  );
};

export default Coaches;
