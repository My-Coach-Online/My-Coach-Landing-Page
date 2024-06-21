import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';

const Categories = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.100" p={10}>
        <Flex justify="center" mb={10}>
          <Box textAlign="center" maxW="lg">
            <Heading as="h3" size="lg" mb={2}>
              Latest Blog Posts
            </Heading>
            <Text>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ipsum dolor sit amet, consectetur elit.
            </Text>
          </Box>
        </Flex>
        
        <Flex justify="center" wrap="wrap">
          {/* Post 1 */}
          <Box maxW="lg" bg="white" borderRadius="md" overflow="hidden" m={4} boxShadow="md">
            <Link href="blog-post.html">
              <Image src="weightLifting.png" alt="Assorted Color Buildings and Sea in Riomaggiore" />
            </Link>
            <Box p={6}>
              <Text fontSize="sm" color="gray.500" mb={2}>
                Photography
              </Text>
              <Stack direction="row" spacing={4} mb={4}>
                <Text>Matthew Johns</Text>
                <Text>January 14, 2023</Text>
              </Stack>
              <Heading as="h4" size="md" mb={2}>
                <Link href="blog-post.html">Assorted Color Buildings and Sea in Riomaggiore</Link>
              </Heading>
              <Text mb={4}>
                Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
              </Text>
              <Link href="blog-post.html" color="teal.500">
                Read More
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Categories;
