import { VStack, Grid, Text, Box, Center, Button, Flex } from '@chakra-ui/react'
import HairAppartement from '../components/HairAppartement'
import { useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '@chakra-ui/icons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PlaceIcon from '@mui/icons-material/Place'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { motion } from 'framer-motion'
import HoverBox from '../components/HoverBox'
import EmailIcon from '@mui/icons-material/Email'
import ParagraphList, {
  paragraphsDatenschutz,
  paragraphsImpressum,
} from '../components/ParagraphList'
import Footer from '../components/Footer'

const MotionButton = motion(Button)
const MotionGrid = motion(Grid)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)
const MotionCenter = motion(Center)

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = () => {
    // If there is a history entry, navigate back
    if (location.state?.from) {
      navigate(-1)
    } else {
      // Default behavior if there's no history entry
      navigate('/') // Navigate to the default route or any other route
    }
  }

  return (
    <MotionButton
      onClick={(e) => {
        e.preventDefault()
        handleBack()
      }}
      h={10}
      w={10}
      bg="walpi.backgroundLight"
      borderRadius={100}
      whileHover={{
        filter: 'brightness(1.05)',
        bg: 'walpi.backgroundLight',
        scale: 0.9,
      }}
    >
      <Icon as={ArrowBackIcon} boxSize={6} color={'walpi.primary.1000'} />
    </MotionButton>
  )
}

const Impressum = () => {
  return (
    <VStack bg="walpi.backgroundLight" fontFamily={'Outfit'} gap={0}>
      {/* Head with a simple Back Button and HairAppartementTitle */}
      <MotionGrid
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        gap={4}
        width="100%"
        height="4rem"
        bg="walpi.primary.1000"
        px={4}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box>
          <BackButton />
        </Box>
        <Center>
          <HairAppartement color="walpi.backgroundLight" />
        </Center>
      </MotionGrid>

      {/* Title */}
      <Center pt={['4rem', '8rem']} pb={['2rem', '3rem']}>
        <MotionText
          fontSize="2rem"
          fontWeight="semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Kontakt
        </MotionText>
      </Center>

      {/* Responsive Cards for Contact, Phone and Email */}
      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr', 'repeat(3, 1fr)']}
        alignItems="center"
        width={['90%', '90%', '90%', '90%', '80em']}
        gap={10}
      >
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <HoverBox
            bg="walpi.backgroundDark"
            href="tel:498944449499"
            hoverText={'Öffne in Google Maps'}
          >
            <VStack height={'100%'} pt={4}>
              <Box textAlign={'center'}>
                <PlaceIcon fontSize="large" />
                <Text>Stefan Duschl</Text>
                <Text>Homerweg 18</Text>
                <Text>5469 Walpertskirchen</Text>
              </Box>
            </VStack>
          </HoverBox>
        </MotionFlex>
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <HoverBox
            bg="walpi.backgroundDark"
            href="tel:498944449499"
            hoverText={'Ruf Uns An'}
          >
            <VStack height={'100%'} pt={4}>
              <LocalPhoneIcon fontSize="large" />
              <Text pt={6}>+49 894 4449499</Text>
            </VStack>
          </HoverBox>
        </MotionFlex>
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          gridColumn={['1', '1', '1 / -1', '3']}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <HoverBox
            bg="walpi.backgroundDark"
            href="mailto:slimsteve@gmx.net"
            hoverText={'Schreib Uns'}
          >
            <VStack height={'100%'} pt={4}>
              <EmailIcon fontSize="large" />
              <Text pt={6}>slimsteve@gmx.net</Text>
            </VStack>
          </HoverBox>
        </MotionFlex>
      </Grid>
      <Center pt={['4rem', '8rem']} pb={['2rem', '3rem']}>
        <MotionText
          fontSize="2rem"
          fontWeight="semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Impressum
        </MotionText>
      </Center>
      <MotionCenter
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ParagraphList paragraphs={paragraphsImpressum} />
      </MotionCenter>
      <Center pt={['4rem', '8rem']} pb={['2rem', '3rem']}>
        <MotionText
          fontSize="2rem"
          fontWeight="semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Datenschutz
        </MotionText>
      </Center>
      <MotionCenter pb={['4rem', '8rem']} initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}>
        <ParagraphList paragraphs={paragraphsDatenschutz} />
      </MotionCenter>
      <Footer />
    </VStack>
  )
}

export default Impressum
