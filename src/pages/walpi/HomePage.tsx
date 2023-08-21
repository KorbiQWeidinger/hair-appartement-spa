import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import wartebereich from '../../assets/wartebereich.jpeg'
import WavesBottom from '../../assets/WavesBottom.svg'

function HomePage() {
  return (
      <Box
        minH="100vh"
        bgImage={wartebereich}
        bgSize="cover"
        bgPosition="center"
      >
        {/* Title in the center */}
        <Center flex="1">
          <Text fontSize="4xl" color="walpi.secondary">Your Title Here</Text>
        </Center>

        {/* Buttons on top right */}
        <Flex position="absolute" top="4" right="4">
          <Button colorScheme="walpi">Button 1</Button>
          <Button colorScheme="walpi">Button 2</Button>
        </Flex>

        {/* SVG at the bottom */}
        <Box position="absolute" bottom="4" left="50%" transform="translateX(-50%)">
          <img src={WavesBottom} alt="Your SVG" />
        </Box>
      </Box>
  );
}

export default HomePage;