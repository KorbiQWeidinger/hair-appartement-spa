import {
  Box,
  HStack,
  Text,
  Image,
  Center,
  Button,
  VStack,
  Grid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import salon from '../../assets/images/SalonWalpi.jpeg'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionButton = motion(Button)

function HomePage() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
    >
      <VStack
        position={['absolute', 'absolute', 'absolute', 'relative', 'relative']}
        width={'100%'}
        zIndex={5}
      >
        <MotionBox
          textAlign={['center', 'center', 'center', 'left', 'left']}
          pb={4}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          fontSize={['xl', '2xl', '3xl', '1.625rem', '2rem']}
          color={['walpi.backgroundLight', 'walpi.backgroundLight', 'walpi.backgroundLight', 'black', 'black']}
        >
          <MotionText fontFamily="Work Sans" fontWeight="bold">
            Der kleine aber feine
            <Text as="span" color="walpi.primary.1000">
              {' '}
              Friseursalon
            </Text>
          </MotionText>
          <MotionText fontFamily="Work Sans" fontWeight="bold">
            in Walpertskirchen.
          </MotionText>
        </MotionBox>

        {/* Button animation */}
        <MotionButton
          color={'walpi.backgroundLight'}
          fontFamily={'Work Sans'}
          fontWeight={'normal'}
          fontSize={['md', 'md', 'md', 'lg', 'xl']}
          bg={'walpi.primary.1000'}
          borderRadius={100}
          px={[7, 7, 7, 8, 10]}
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
      <Box position="relative" width="100%" height="100vh">
        <Image
          src={salon}
          alt="Salon Image"
          objectFit="cover"
          height="100%"
          width="100%"
          position="absolute"
          top={0}
          left={0}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          bgColor="rgba(0,0,0,0.5)" // This darkens the image
        />
      </Box>
    </Grid>
  )
}

export default HomePage
