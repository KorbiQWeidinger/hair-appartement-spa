import { Text } from '@chakra-ui/react'
import React from 'react'

interface HairAppartementProps {
  fontSize?: string
  color?: string
  two?: boolean
}

const HairAppartement: React.FC<HairAppartementProps> = ({
  fontSize = '2rem',
  two = false,
  color,
}) => {
  return (
    <Text fontSize={fontSize} fontFamily={'admono'} color={color}>
      Hair
      <Text
        as="b"
        fontSize={`calc(${fontSize} * 0.9)`}
        pr={two ? 2 : 0}
        align={'end'}
        fontWeight={'normal'}
      >
        Appartement
      </Text>
      {two ? '2' : ''}
    </Text>
  )
}

export default HairAppartement
