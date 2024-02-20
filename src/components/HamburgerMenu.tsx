import {
  IconButton,
  useDisclosure,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  Flex,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import HairAppartement from './HairAppartement'
import { OST, WALPI, bookingLink } from '../constants/SALONS'
import { StyledLink } from './StyledLink'

export const HamburgerMenu = ({ salon }: { salon: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })

  if (!isSmallScreen) {
    return <></>
  }

  const navigateTo = async (id: string) => {
    onClose()
    await new Promise((f) => setTimeout(f, 100))
    const element = document.getElementById(id)
    if (!element) {
      return
    }
    element.scrollIntoView()
  }

  return (
    <Flex position={'absolute'} justifyContent="flex-end" width={'100%'}>
      <IconButton
        position={'relative'}
        aria-label="Open Menu"
        bg={'walpi.primary.1000'}
        icon={<HamburgerIcon color={'white'} boxSize={'22px'} />}
        variant="solid"
        borderRadius="full"
        size="lg"
        onClick={onOpen}
        m={4}
        zIndex={3}
      />
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg={'walpi.backgroundLight'}>
          <Box p={3} bg={'walpi.primary.1000'}>
            <HairAppartement
              color="walpi.backgroundLight"
              two={salon === WALPI}
            />
          </Box>
          <IconButton
            aria-label="Close Menu"
            icon={
              <CloseIcon color={'walpi.backgroundLight'} boxSize={'22px'} />
            }
            onClick={onClose}
            m={4}
            position="absolute"
            top={0}
            right={0}
            bg={'none'}
          />
          <DrawerBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={20}
          >
            <VStack spacing={4}>
              <StyledLink href={`/#/${salon === WALPI ? OST : WALPI}`}>
                Salon Wechseln
              </StyledLink>
              <StyledLink onClick={() => navigateTo('prices')}>
                Preise
              </StyledLink>
              <StyledLink onClick={() => navigateTo('contact')}>
                Kontakt
              </StyledLink>
              <StyledLink href={`/#/${salon}/impressum`}>Impressum</StyledLink>
              <StyledLink href={`/#/${salon}/impressum`}>
                Datenschutz
              </StyledLink>
              <Button
                color={'walpi.backgroundLight'}
                fontWeight={'normal'}
                bg={'walpi.primary.1000'}
                borderRadius={100}
                px={6}
                mt={10}
                as="a"
                href={bookingLink(salon)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt Buchen
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default HamburgerMenu
