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

interface Service {
  name: string
  price: number
  minutes: number
}

interface Category {
  categoryName: string
  services: Service[]
}

const categories: Category[] = [
  {
    categoryName: 'Damen - Haarschnitte & Stylings',
    services: [
      {
        name: 'Damen - Pony',
        price: 1,
        minutes: 5,
      },
      {
        name: 'Damen - Waschen, Pflege & Föhnen',
        price: 21.5,
        minutes: 15,
      },
      {
        name: 'Damen - Cut & Go',
        price: 39,
        minutes: 30,
      },
      {
        name: 'Damen - Haarschnitt',
        price: 49,
        minutes: 60,
      },
      {
        name: 'Damen - Hochsteckfrisur',
        price: 50,
        minutes: 60,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Schnitt & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Schnitt & Föhnen',
        price: 98,
        minutes: 120,
      },
      {
        name: 'Damen - Ansatzfärbung, Schnitt & Föhnen',
        price: 89,
        minutes: 115,
      },
      {
        name: 'Damen - Intensivtönung, Schnitt & Föhnen',
        price: 98,
        minutes: 115,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Pflege & Föhnen',
        price: 68.5,
        minutes: 90,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Pflege & Föhnen',
        price: 100.5,
        minutes: 120,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Cut & Go',
    services: [
      {
        name: 'Damen - Neufärbung, Cut & Go',
        price: 88,
        minutes: 90,
      },
      {
        name: 'Damen - Ansatzfärbung, Cut & Go',
        price: 79,
        minutes: 85,
      },
      {
        name: 'Damen - Intensivtönung, Cut & Go',
        price: 88,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Cut & Go',
        price: 86,
        minutes: 105,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Cut & Go',
        price: 118,
        minutes: 135,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Waschen, Pflege & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Pflege & Föhnen',
        price: 70.5,
        minutes: 75,
      },
      {
        name: 'Damen - Ansatzfärbung, Pflege & Föhnen',
        price: 61.5,
        minutes: 70,
      },
      {
        name: 'Damen - Intensivtönung, Pflege & Föhnen',
        price: 70.5,
        minutes: 70,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Schnitt & Föhnen',
        price: 96,
        minutes: 135,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Schnitt & Föhnen',
        price: 128,
        minutes: 165,
      },
    ],
  },
  {
    categoryName: 'Herren - Haarschnitte & Stylings',
    services: [
      {
        name: 'Herren - Konturschnitt',
        price: 15,
        minutes: 15,
      },
      {
        name: 'Herren - Haarschnitt',
        price: 30,
        minutes: 30,
      },
      {
        name: 'Herrenhaarschnitt ohne Waschen',
        price: 25,
        minutes: 30,
      },
    ],
  },
  {
    categoryName: 'Kinder - Haarschnitte & Styling',
    services: [
      {
        name: 'Mädchen unter 12 Jahre - Haarschnitt',
        price: 16.5,
        minutes: 30,
      },
      {
        name: 'Mädchen von 12 bis 16 Jahre - Waschen, Pflege, Schneiden & Föhnen',
        price: 30,
        minutes: 30,
      },
      {
        name: 'Jungs unter 12 Jahre - Haarschnitt',
        price: 16.5,
        minutes: 30,
      },
    ],
  },
  {
    categoryName: 'Wimpern/Augenbrauen',
    services: [
      {
        name: 'Augenbrauen zupfen',
        price: 13,
        minutes: 15,
      },
      {
        name: 'Augenbrauen färben',
        price: 8,
        minutes: 10,
      },
      {
        name: 'Augenbrauen färben & zupfen',
        price: 21,
        minutes: 25,
      },
      {
        name: 'Wimpern färben',
        price: 8,
        minutes: 10,
      },
      {
        name: 'Augenbrauen & Wimpern färben',
        price: 16,
        minutes: 20,
      },
    ],
  },
]

const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours ? `${hours} Std. ` : ''}${mins} Min.`
}

type ServicesInCategoryProps = {
  category: Category
  index: number
}

const ServicesInCategory = ({
  category,
  index,
}: ServicesInCategoryProps) => {
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

const ServiceList = () => {
  const [openItem, setOpenItem] = useState<number | null>(null) // only open first category on larger screens

  const isLargerScreen = useBreakpointValue({ base: false, xl: true })

  const handleToggle = (index: number) => {
    setOpenItem((prevState) =>
      prevState === index ? (isLargerScreen ? index : null) : index,
    )
  }

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
          {categories.map((category, index) => (
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
                categories.map((category, index) => {
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
          {categories.map((category, index) => {
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
