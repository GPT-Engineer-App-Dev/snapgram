import { Container, VStack, Heading, Text, Box, Image, Button, Input, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, url: "https://via.placeholder.com/300", description: "A beautiful sunrise" },
    { id: 2, url: "https://via.placeholder.com/300", description: "A serene beach" },
    { id: 3, url: "https://via.placeholder.com/300", description: "A bustling cityscape" },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [likeCounts, setLikeCounts] = useState(photos.map(() => 0));

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newPhoto = {
        id: photos.length + 1,
        url: URL.createObjectURL(selectedFile),
        description: "New photo",
      };
      setPhotos([...photos, newPhoto]);
      setLikeCounts([...likeCounts, 0]);
      setSelectedFile(null);
    }
  };

  const handleLike = (index) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] += 1;
    setLikeCounts(newLikeCounts);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">PhotoShare</Heading>
        <Text fontSize="lg">Share your favorite moments with the world</Text>
        <VStack spacing={4} width="100%">
          {photos.map((photo, index) => (
            <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <Image src={photo.url} alt={photo.description} />
              <Box p={4}>
                <Text>{photo.description}</Text>
                <IconButton
                  icon={<FaHeart />}
                  onClick={() => handleLike(index)}
                  colorScheme="red"
                  variant="outline"
                  aria-label="Like"
                  mr={2}
                />
                <Text as="span">{likeCounts[index]} likes</Text>
              </Box>
            </Box>
          ))}
        </VStack>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="teal" size="lg" onClick={handleUpload}>Upload Photo</Button>
      </VStack>
    </Container>
  );
};

export default Index;