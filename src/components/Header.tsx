import { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Flex,
  HStack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { OST, WALPI, bookingLink } from '../constants/SALONS'
import { StyledLink } from './StyledLink'

const MotionBox = motion(Box)

const Header = ({ salon }: { salon: string }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

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
    <>
      {isSmallScreen ? (
        <></>
      ) : (
        <MotionBox
          position="fixed"
          top="0"
          w="full"
          bg="walpi.primary.1000"
          height="5rem"
          style={{
            top: isVisible ? '0' : '-5rem',
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
            <HashLink to="#home">
              <Text fontSize="2rem" fontWeight="bold" fontFamily={'admono'}>
                Hair
                <Text as="b" fontSize="1.6rem" pr={2} align={'end'}>
                  Appartement
                </Text>
                {salon === OST ? '' : '2'}
              </Text>
            </HashLink>

            {/* Second Element - Navigation Links */}
            <HStack spacing={4}>
              <StyledLink href={`/#/${salon === WALPI ? OST : WALPI}`}>
                Salon Wechseln
              </StyledLink>
              <HashLink to="#prices">Preise</HashLink>
              <HashLink to="#contact">Kontakt</HashLink>
              <StyledLink href={`/#/${salon}/impressum`}>Impressum</StyledLink>
              <StyledLink href={`/#/${salon}/impressum`}>
                Datenschutz
              </StyledLink>
            </HStack>

            {/* Third Element - Button */}
            <Button
              color={'walpi.primary.1000'}
              fontWeight={'normal'}
              bg={'walpi.backgroundLight'}
              borderRadius={100}
              px={6}
              as="a"
              href={bookingLink(salon)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jetzt Buchen
            </Button>
          </Flex>
        </MotionBox>
      )}
    </>
  )
}

export default Header
