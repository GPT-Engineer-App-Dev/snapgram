import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, url: "https://via.placeholder.com/300", description: "A beautiful sunrise" },
    { id: 2, url: "https://via.placeholder.com/300", description: "A serene beach" },
    { id: 3, url: "https://via.placeholder.com/300", description: "A bustling cityscape" },
  ]);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">PhotoShare</Heading>
        <Text fontSize="lg">Share your favorite moments with the world</Text>
        <VStack spacing={4} width="100%">
          {photos.map(photo => (
            <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <Image src={photo.url} alt={photo.description} />
              <Box p={4}>
                <Text>{photo.description}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
        <Button colorScheme="teal" size="lg">Upload Photo</Button>
      </VStack>
    </Container>
  );
};

export default Index;