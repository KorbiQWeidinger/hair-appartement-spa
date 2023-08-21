import React, { useState, useEffect } from 'react'
import { Box, Text, Flex, HStack, Link, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Header: React.FC = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

      console.log(currentScrollTop)
      console.log(lastScrollTop)

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Updates last scroll position
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return (
    <MotionBox
      position="fixed"
      top="0"
      w="full"
      bg="walpi.primary.1000"
      height="4rem"
      style={{
        top: isVisible ? '0' : '-4rem',
      }}
      display={'flex'}
      justifyContent="center"
      fontFamily={'Work Sans'}
      px={2}
      zIndex={100}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Flex justifyContent="space-between" align="center" px={2} w="full">
        {/* First Element - Title */}
        <Text
          fontSize="2rem"
          fontWeight="bold"
          fontFamily={'admono'}
        >
          Hair
          <Text as="b" fontSize="1.6rem" pr={2} align={'end'}>
            Appartement 
          </Text>
          2
        </Text>

        {/* Second Element - Navigation Links */}
        <HStack spacing={4}>
          <Link href="#salon-wechseln">Salon Wechseln</Link>
          <Link href="#preise">Preise</Link>
          <Link href="#kontakt">Kontakt</Link>
          <Link href="#impressum">Impressum</Link>
          <Link href="#datenschutz">Datenschutz</Link>
        </HStack>

        {/* Third Element - Button */}
        <Button
          color={'walpi.primary.1000'}
          fontWeight={'normal'}
          bg={'walpi.backgroundLight'}
          borderRadius={100}
          px={6}
          as="a" 
          href="https://buchung.treatwell.de/ort/424008/menue/"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Jetzt Buchen
        </Button>
      </Flex>
    </MotionBox>
  )
}

export default Header
