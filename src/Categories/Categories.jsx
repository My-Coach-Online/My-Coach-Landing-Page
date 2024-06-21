import React from 'react';
import Slider from 'react-slick';
import { ChakraProvider, Box, Flex, Text, Image, Heading, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrainingCard = ({ image, title, description }) => {
  return (
    <Box  bg="white" borderRadius={20} overflow="hidden" boxShadow="md" m={4} maxW="sm">
      <Image src={image} alt={title} objectFit="fit" />
      <Box p={4}>
        <Heading as="h4" size="md" mb={2}>{title}</Heading>
        <Text fontWeight={'regular'} mb={4}>{description}</Text>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
          Sport Information
        </Button>
      </Box>
    </Box>
  );
};

const TrainingsSection = () => {
  const trainings = [
    {
      image: 'weightlifting.svg', 
      title: 'Weight Lifting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      image: 'weightloss.svg', 
      title: 'Weight Loss',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      image: 'Yoga.svg', 
      title: 'Yoga',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <ChakraProvider>
      <Box fontFamily={'inter'} transform={'scale(0.9)'} bg="#F4F4F4" p={10} textAlign="center">
        <Heading pb={5} as="h2" size="xl" mb={8}>
          Discover All our Trainings
        </Heading>
        <Slider  {...settings}>
          {trainings.map((training, index) => (
            <TrainingCard
              key={index}
              image={training.image}
              title={training.title}
              description={training.description}
            />
          ))}
        </Slider>
      </Box>
    </ChakraProvider>
  );
};

export default TrainingsSection;
