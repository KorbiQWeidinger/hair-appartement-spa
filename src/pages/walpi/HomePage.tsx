import {
  Box,
  HStack,
  Text,
  Image,
  Center,
  Button,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import salon from '../../assets/images/SalonWalpi.jpeg'

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

function HomePage() {
  return (
    <HStack>
      <Center width="50vw">
        <VStack>
          {/* Text animation */}
          <MotionBox
            textAlign="left"
            pb={4}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MotionText fontSize="4xl" fontFamily="Work Sans" fontWeight="bold">
              Der kleine aber feine
              <Text as="span" color="walpi.primary.1000">
                {' '}
                Friseursalon
              </Text>
            </MotionText>
            <MotionText fontSize="4xl" fontFamily="Work Sans" fontWeight="bold">
              in Walpertskirchen.
            </MotionText>
          </MotionBox>

          {/* Button animation */}
          <MotionButton
            color={'walpi.backgroundLight'}
            fontFamily={'Work Sans'}
            fontWeight={'normal'}
            fontSize={'xl'}
            bg={'walpi.primary.1000'}
            borderRadius={100}
            px={10}
            py={6}
            as="a"
            href="https://buchung.treatwell.de/ort/424008/menue/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 360 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Jetzt Buchen
          </MotionButton>
        </VStack>
      </Center>

      {/* Image */}
      <Box>
        <Image
          src={salon}
          alt="Salon Image"
          objectFit="cover"
          height="calc(100vh - 4rem)"
          width={'50vw'}
        />
      </Box>
    </HStack>
  );
}

export default HomePage;
