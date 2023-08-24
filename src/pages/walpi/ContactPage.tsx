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
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import image from '../../assets/images/Wartebereich.jpeg'
import dotted from '../../assets/svg/Dotted_WalpiPrimary.svg'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

function Contact() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isSmallScreen = useBreakpointValue({ base: true, md: false })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting)
        setVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [visible])

  useEffect(() => {
    if (visible) {
      controls.start('visible')
    }
  }, [controls, visible])

  return (
    <VStack pt={'4rem'} pb={'10rem'} fontFamily="Work Sans" width={'100%'}>
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
              {/* TODO */}
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
              {/* TODO */}
            </MotionBox>
          </VStack>
        </Center>
      </HStack>
    </VStack>
  )
}

export default Contact
