import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import HairAppartement from './HairAppartement'
import { useState } from 'react'

const MotionBox = motion(Box)

const SplashScreen = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  function isSmallScreen() {
    return window.innerWidth <= 768
  }

  return (
    <MotionBox
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex={isAnimationComplete ? '-1' : '100'}
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setIsAnimationComplete(true)}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{ opacity: 1 }}
      >
        <HairAppartement
          color="white"
          fontSize={isSmallScreen() ? '3rem' : '5rem'}
        />
      </MotionBox>
    </MotionBox>
  )
}

export default SplashScreen
