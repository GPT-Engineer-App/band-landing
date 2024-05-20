import { Container, VStack, Heading, Text, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to The Band's Official Website
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Join us on our musical journey. Stay tuned for the latest updates, tour dates, and new releases!
        </Text>
        <Image src="https://images.unsplash.com/photo-1488779382325-da88fd3175e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE2MTc0MTU5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing live" borderRadius="md" boxShadow="lg" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Listen Now
          </Button>
          <Button colorScheme="teal" variant="outline" size="lg">
            Tour Dates
          </Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound />
          <IconButton aria-label="Spotify" icon={<FaSpotify />} size="lg" isRound />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
