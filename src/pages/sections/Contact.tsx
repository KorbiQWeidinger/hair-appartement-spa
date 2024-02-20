import {
  Box,
  HStack,
  Text,
  Center,
  Image,
  VStack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import PlaceIcon from '@mui/icons-material/Place'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import image from '../../assets/images/Wartebereich.jpeg'
import dotted from '../../assets/svg/Dotted_WalpiPrimary.svg'
import HoverBox from '../../components/HoverBox'
import { OST, getMaps } from '../../constants/SALONS'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

function Contact({ salon }: { salon: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isSmallScreen = useBreakpointValue({ base: true, md: false })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      },
    )
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [visible])

  useEffect(() => {
    if (visible) {
      controls.start('visible')
    }
  }, [controls, visible])

  return (
    <VStack
      as="section"
      id="contact"
      pt={'4rem'}
      pb={isSmallScreen ? '2rem' : '10rem'}
      fontFamily="Work Sans"
      width={'100%'}
    >
      <Text fontSize="3xl" fontWeight="bold">
        Kontakt
      </Text>
      <HStack height={'70vh'} width="100%" ref={ref}>
        {!isSmallScreen ? (
          <Center width={'100%'}>
            <Flex
              position="relative"
              width="24rem"
              height="31rem"
              justifyContent="center"
              align={'center'}
            >
              {/* Main Image */}
              <MotionImage
                src={image}
                width="20rem"
                objectFit="cover"
                borderRadius="2xl"
                shadow="lg"
                zIndex="2"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, rotateY: 180 },
                  visible: {
                    opacity: 1,
                    rotateY: 360,
                    transition: { delay: 0.7, duration: 1 },
                  },
                }}
                animate={controls}
              />

              {/* Box behind top-left corner */}
              <MotionBox
                width={'8rem'}
                height={'8rem'}
                position="absolute"
                top="0"
                left="0"
                bg="walpi.backgroundDark"
                zIndex="1"
                shadow="lg"
                borderRadius="2xl"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.5 } },
                }}
                animate={controls}
              />

              {/* SVG behind bottom-right corner */}
              <MotionImage
                src={dotted}
                position="absolute"
                bottom="0"
                right="0"
                width={'8rem'}
                height={'8rem'}
                zIndex="1"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1.8 } },
                }}
                animate={controls}
              />
            </Flex>
          </Center>
        ) : (
          <></>
        )}
        <Center width={'100%'}>
          <VStack spacing={10} width={'100%'}>
            <MotionBox
              pr={isSmallScreen ? 0 : '10%'}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { delay: isSmallScreen ? 0.1 : 2, duration: 0.4 },
                },
              }}
              initial="hidden"
              animate={controls}
            >
              <HoverBox
                bg="walpi.backgroundDark"
                href={getMaps(salon)}
                hoverText={'Öffne in Google Maps'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <VStack height={'100%'} pt={4}>
                  <Box textAlign={'center'}>
                    <PlaceIcon fontSize="large" />
                    <Text>
                      {salon === OST ? 'Elsässer Str. 26' : 'Homerweg 1'}
                    </Text>
                    <Text>
                      {salon === OST ? '81667 München' : '5469 Walpertskirchen'}
                    </Text>
                  </Box>
                </VStack>
              </HoverBox>
            </MotionBox>
            <MotionBox
              pl={isSmallScreen ? 0 : '10%'}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: isSmallScreen ? 0.6 : 2.8,
                    duration: 0.4,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
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
            </MotionBox>
          </VStack>
        </Center>
      </HStack>
    </VStack>
  )
}

export default Contact
