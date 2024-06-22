import React from 'react';
import Slider from 'react-slick';
import { ChakraProvider, Box, Flex, Text, Image, Heading, Button,IconButton } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SlickArrowRight = ({ onClick }) => (
  <Box
    onClick={onClick}
    icon={<FaArrowRight />}
    aria-label="Next slide"
    variant="ghost"
    position="absolute"
    right="-50px"
    top="50%"
    transform="translateY(-50%)"
    zIndex="2"

  >
    <Image src='rightArrow.svg' alt='right arrow' />
  </Box>
)
const SlickArrowLeft = ({ onClick }) => (
  <Box
    onClick={onClick}
    icon={<FaArrowLeft />}
    aria-label="Previous slide"
    variant="ghost"
    position="absolute"
    left="-50px"
    top="52.5%"
    transform="translateY(-50%)"
    zIndex="2"

    >
          <Image src='leftArrow.svg' alt='left arrow' />

    </Box>
);
const TrainingCard = ({ image, title, description }) => {
  return (
    <Box  bg="white" borderRadius={20} overflow="hidden" boxShadow="md" m={4} maxW="sm">
      <Image src={image} alt={title} objectFit="fit" />
      <Box p={4}>
        <Heading as="h4" size="md" mb={2}>{title}</Heading>
        <Text fontWeight={'regular'} mb={4}>{description}</Text>
        <Button  rightIcon={<ArrowForwardIcon />} colorScheme="black" variant="outline">
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
    nextArrow: null,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    adaptiveHeight: true,
  
  };

  return (
    <ChakraProvider>
      <Flex justify="center" align="center" bg="#F4F4F4" p={10} minHeight="100vh">
        <Box width={["100%", "90%", "80%"]} textAlign="center" p={5} >
          <Heading pb={5} as="h2" size="xl" mb={8}>
            Discover All our Trainings
          </Heading>
          <Slider {...settings}>
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
      </Flex>

    </ChakraProvider>
  );
};

export default TrainingsSection;
