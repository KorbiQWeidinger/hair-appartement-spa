import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  List,
  ListItem,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import {
  Category,
  PRICES_BY_CATEGORY_OST,
  PRICES_BY_CATEGORY_WALPI,
} from '../constants/PRICES'
import { OST } from '../constants/SALONS'

const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours ? `${hours} Std. ` : ''}${mins} Min.`
}

type ServicesInCategoryProps = {
  category: Category
  index: number
}

const ServicesInCategory = ({ category, index }: ServicesInCategoryProps) => {
  return (
    <List spacing={2}>
      {category.services.map((service, sIndex) => (
        <ListItem key={`${index}-${sIndex}`} bg={'walpi.primary'}>
          <Flex justify="space-between" align="center">
            <Box mr={6}>
              <Text>{service.name}</Text>
              <Text>{formatTime(service.minutes)}</Text>
            </Box>
            <Text>{service.price}€</Text>
          </Flex>
        </ListItem>
      ))}
    </List>
  )
}

const ServiceList = ({ salon }: { salon: string }) => {
  const [openItem, setOpenItem] = useState<number | null>(null) // only open first category on larger screens

  const isLargerScreen = useBreakpointValue({ base: false, xl: true })

  const handleToggle = (index: number) => {
    setOpenItem((prevState) =>
      prevState === index ? (isLargerScreen ? index : null) : index,
    )
  }

  const prices_by_category =
    salon === OST ? PRICES_BY_CATEGORY_OST : PRICES_BY_CATEGORY_WALPI

  return (
    <Flex
      direction="row"
      width="90%"
      margin="0 auto"
      justifyContent="center"
      gap="4px"
      fontFamily={'Outfit'}
    >
      <Box
        width="100%"
        maxW="600px"
        bg="walpi.backgroundLight"
        borderRadius={isLargerScreen ? 'none' : 'lg'}
        borderLeftRadius="lg"
        shadow="lg"
        py={2}
      >
        <Accordion
          width="100%"
          index={
            isLargerScreen
              ? openItem === null
                ? [0]
                : [openItem]
              : openItem === null
              ? []
              : [openItem]
          }
        >
          {prices_by_category.map((category, index) => (
            <AccordionItem key={index} borderColor="walpi.backgroundLight">
              <AccordionButton
                _hover={{ bg: 'walpi.primary.400' }}
                _expanded={{ bg: 'walpi.primary.900' }}
                onClick={() => handleToggle(index)}
              >
                <Box flex="1" textAlign="left" mr={6}>
                  {category.categoryName}
                </Box>
                {openItem === index ||
                (openItem === null && isLargerScreen && index === 0) ? (
                  <ChevronDownIcon boxSize={6} />
                ) : (
                  <ChevronRightIcon boxSize={6} />
                )}
              </AccordionButton>
              {!isLargerScreen &&
                prices_by_category.map((category, index) => {
                  if (openItem === index) {
                    return (
                      <AccordionPanel pb={4} key={index}>
                        <ServicesInCategory category={category} index={index} />
                      </AccordionPanel>
                    )
                  }
                  return null
                })}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      {isLargerScreen && (
        <Box
          width="100%"
          maxW="600px"
          bg="walpi.backgroundLight"
          borderRadius={isLargerScreen ? 'none' : 'lg'}
          borderRightRadius="lg"
          shadow="lg"
          p={4}
        >
          {prices_by_category.map((category, index) => {
            if (
              openItem === index ||
              (openItem === null && isLargerScreen && index === 0)
            ) {
              return <ServicesInCategory category={category} index={index} />
            }
            return null
          })}
        </Box>
      )}
    </Flex>
  )
}
export default ServiceList
