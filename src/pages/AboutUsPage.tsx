import { Box, HStack, Text, Center, Image } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import image from '../assets/images/Sunset.jpg'
import dotted from '../assets/svg/Dotted.svg'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionText = motion(Text)

function AboutUsPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
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
  }, [])

  useEffect(() => {
    if (visible) {
      controls.start('visible')
    }
  }, [controls, visible])

  return (
    <HStack ref={ref} height={'70vh'} justifyContent="left" alignItems="center">
      <Box pl={'10%'}>
        <MotionBox
          position="relative"
          width="36rem"
          height="26rem"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } },
          }}
        >
          {/* Box behind top-left corner */}
          <MotionBox
            position="absolute"
            width="10rem"
            height="10rem"
            bg="walpi.primary.1000"
            zIndex="1"
            shadow="lg"
            borderRadius="2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          />

          {/* Main Image */}
          <MotionImage
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
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              rotateY: 360,
              transition: { delay: 4.2, duration: 2 },
            }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4 }}
          />
        </MotionBox>
      </Box>
      <Center>
        <Box textAlign="left" fontFamily="Outfit" width={'80%'}>
          <MotionText
            fontSize="4xl"
            fontWeight="bold"
            pb={6}
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 6.3, duration: 0.6 },
            }}
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
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 7.3, duration: 0.6 },
            }}
          >
            Im Herzen unseres Zuhauses begrüßen Stefan & Nina Sie in einem
            gemütlichen Zweiplatz-Salon. Bei uns stehen Sie und Ihre Familie im
            Mittelpunkt. Kinder beleben unseren Alltag, und Hunde sind herzlich
            willkommen.
          </MotionText>
          <MotionText
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 8.1, duration: 0.6 },
            }}
          >
            Freuen Sie sich auf einen Besuch bei den Duschls!
          </MotionText>
        </Box>
      </Center>
    </HStack>
  )
}

export default AboutUsPage
