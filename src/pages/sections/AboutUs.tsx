import { Box, HStack, Text, Image, useBreakpointValue } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import image from '../../assets/images/Sunset.jpg'
import dotted from '../../assets/svg/Dotted_WalpiBGDark.svg'
import { OST } from '../../constants/SALONS'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionText = motion(Text)

function AboutUs({ salon }: { salon: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })

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
    <HStack
      ref={ref}
      height={isSmallScreen ? '100vh' : '70vh'}
      width={'100%'}
      px={'10%'}
      wrap={isSmallScreen ? 'wrap' : 'nowrap'}
    >
      <Box width={'70%'}>
        <Box
          width={isSmallScreen ? '28rem' : '36rem'}
          height={isSmallScreen ? '18rem' : '26rem'}
          position={'relative'}
        >
          {/* Box behind top-left corner */}
          <MotionBox
            position="absolute"
            width={isSmallScreen ? '5rem' : '10rem'}
            height={isSmallScreen ? '5rem' : '10rem'}
            bg="walpi.primary.1000"
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

          {/* Main Image */}
          <MotionImage
            src={image}
            width={isSmallScreen ? '26rem' : '32rem'}
            height={isSmallScreen ? '16rem' : '22rem'}
            objectFit="cover"
            borderRadius="2xl"
            shadow="lg"
            zIndex="2"
            position="absolute"
            top="8"
            left="8"
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

          {/* SVG behind bottom-right corner */}
          <MotionImage
            src={dotted}
            position="absolute"
            bottom="0"
            right="0"
            width="8rem"
            height="8rem"
            zIndex="1"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 1.8 } },
            }}
            animate={controls}
          />
        </Box>
      </Box>
      <Box textAlign="left" fontFamily="Outfit" width={'80%'} pl={10}>
        <MotionText
          fontSize="4xl"
          fontWeight="bold"
          pb={6}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { delay: 2, duration: 0.6 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          Willkommen bei den
          <Text as="span" color="walpi.backgroundDark">
            {' '}
            Duschls
          </Text>
          <Text as="span">.</Text>
        </MotionText>
        <MotionText
          pb={4}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { delay: 2.8, duration: 0.6 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {salon === OST ? (
            <>
              Direkt im pulsierenden Haidhausen laden Stefan & Nina Sie in ihren
              charmanten Drei-Stuhl-Salon ein. Bei uns sind Sie und Ihre Lieben
              immer im Fokus. Kinder bringen Schwung in unsere Atmosphäre, und
              auch Hunde sind bei uns stets gern gesehene Gäste.
            </>
          ) : (
            <>
              Im Herzen unseres Zuhauses begrüßen Stefan & Nina Sie in einem
              gemütlichen Zweiplatz-Salon. Bei uns stehen Sie und Ihre Familie
              im Mittelpunkt. Kinder beleben unseren Alltag, und Hunde sind
              herzlich willkommen.
            </>
          )}
        </MotionText>
        <MotionText
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { delay: 3.7, duration: 0.6 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          Freuen Sie sich auf einen Besuch bei den Duschls!
        </MotionText>
      </Box>
    </HStack>
  )
}

export default AboutUs
