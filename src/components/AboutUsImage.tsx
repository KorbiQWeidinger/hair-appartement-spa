import { Box, Image } from '@chakra-ui/react';
import image from '../assets/images/Sunset.jpg'; 
import dotted from '../assets/svg/Dotted.svg';


function AboutUsImage() {
    return (
      <Box position="relative" width="36rem" height="26rem">
        
        {/* Box behind top-left corner */}
        <Box 
          position="absolute"
          width="10rem"  // Adjust the size as needed
          height="10rem" // Adjust the size as needed
          bg="walpi.primary.1000"
          zIndex="1"
          shadow="lg"
          borderRadius="2xl"
        />
  
        {/* Main Image */}
        <Image 
          src={image}
          width="32rem"
          height="22rem"
          objectFit="cover"
          borderRadius="2xl"
          shadow="lg"
          zIndex="2"
          position="relative"
          top="8"
          left="8"
        />
  
        {/* SVG behind bottom-right corner */}
        <Image 
          src={dotted}
          position="absolute"
          bottom="0"
          right="0"
          width="8rem"  
          height="8rem"
          zIndex="1"
        />
  
      </Box>
    );
  }
  
  export default AboutUsImage;