import { Text } from '@chakra-ui/react'
import React from 'react'

interface HairAppartementProps {
  fontSize?: string
  fontWeight?: string
  color?: string
  two?: boolean
}

const HairAppartement: React.FC<HairAppartementProps> = ({
  fontSize = '2rem',
  fontWeight = 'normal',
  two = false,
  color,
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontFamily={'admono'}
      color={color}
      fontWeight={fontWeight}
    >
      Hair
      <Text
        as="b"
        fontSize={`calc(${fontSize} * 0.9)`}
        pr={two ? 2 : 0}
        align={'end'}
        fontWeight={fontWeight}
      >
        Appartement
      </Text>
      {two ? '2' : ''}
    </Text>
  )
}

export default HairAppartement
