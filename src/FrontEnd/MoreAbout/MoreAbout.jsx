import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const MoreAbout = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row-reverse"]}
      pt={[5, 10]}
      pb={[50, 100]}
      px={[4, 8, 12]}
      justify="center"
      alignItems="center"
      bg={"#f4f4f4"}
    >
      {/* Image Section */}
      <Box w={["100%", "100%", "40%"]} textAlign={["center","center", "left"]} mr={[0,0,10]} mb={[5, 5, 0]}>
        <Image
          order={[1,2,2]}
          boxSize={["85%", "85%", "100%"]}
          src="woman-helping-man-gym.jpg"
          alt="coaching"
          mx={["auto", "auto", "0"]}
          borderRadius="md"
          objectFit="cover"
        />
      </Box>

      {/* Text Section */}
      <Box
        order={[2,1,1]}
        w={["100%", "100%", "50%"]}
        fontFamily="inter"
        textAlign={["center","center", "left"]}
      >
        <Heading
          fontSize={["32px", "36px", "42px"]}
          pb={3}
          color="#2d2d2d"
          textAlign={["center","center" ,"left"]}
        >
          À Propos de Nous
        </Heading>

        <Text  fontFamily={'sans-serif'} color="gray" pt={5} pb={5} textAlign={["center", "center", "center", "left"]} w={["100%", "100%", "85%"]} >
        My Coach est une plateforme innovante conçue pour combler le fossé entre les passionnés de fitness et les coachs sportifs certifiés. Nous comprenons qu'atteindre vos objectifs de fitness peut être un défi sans les conseils et le soutien appropriés. C'est pourquoi nous avons créé un espace convivial où vous pouvez facilement vous connecter avec des entraîneurs professionnels qui adaptent leur expertise à vos besoins et à votre emploi du temps unique.

        </Text>

        <Flex
          pt={5}
          justify={["center", "center", "flex-start"]}
          flexDirection={["column", "row"]}
          alignItems="center"
        >

          {/* <Button
            fontFamily="inter"
            h={42}
            w={["80%", "180px"]}
            borderRadius={0}
            bg="transparent"
            border="1px solid"
            color="black"
            fontWeight="bold"
            alignSelf={'center'}
            
          >
            Rejoignez Nous!
          </Button> */}
        </Flex>
      </Box>
    </Flex>
  );
};
