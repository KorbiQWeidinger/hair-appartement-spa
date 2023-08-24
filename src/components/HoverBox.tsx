import { Box, Text, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

const MotionBox = motion(Box)
const MotionCenter = motion(Center)

interface HoverBoxProps {
  bg: string
  href: string
  hoverText: string
  children?: ReactNode
  rel?: string; 
  target?: string;
}

function HoverBox({ bg, href, hoverText, children, rel="noopener", target="_self" }: HoverBoxProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={href} rel={rel} target={target}>
      <MotionBox
        height={'9rem'}
        width={'16rem'}
        bg={bg}
        p={4}
        shadow="lg"
        borderRadius={'2xl'}
        transition={{
          // This will be used for the "hover out" animation
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.1,
          shadow: '2xl',
          filter: 'brightness(1.1)',
        }}
        onHoverStart={() => {
          setTimeout(() => {
            setIsHovered(true)
          }, 200)
        }}
        onHoverEnd={() => {
          setTimeout(() => {
            console.log('hover end')
            setIsHovered(false)
          }, 400)
        }}
        position={'relative'}
      >
        <MotionCenter
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.2 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          height={'100%'}
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Text>{hoverText}</Text>
        </MotionCenter>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0 : 1,
            transition: { duration: 0.2 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          {children}
        </MotionBox>
      </MotionBox>
    </a>
  )
}

export default HoverBox
