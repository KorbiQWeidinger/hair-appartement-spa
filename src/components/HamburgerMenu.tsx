import { useState, useCallback } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              <HamburgerIcon
                boxSize="26px"
                color={
                  isHovered
                    ? 'walpi.secondary'
                    : isOpen
                    ? 'walpi.secondary'
                    : 'walpi.action'
                }
              />
            }
            position={'fixed'}
            variant="solid"
            bg={'walpi.secondary'}
            _active={{ bg: 'walpi.action' }}
            borderRadius="full"
            size="lg"
            mt={6}
            ml={6}
            _hover={isOpen ? {} : { bg: 'walpi.action' }}
            boxShadow={isOpen ? 'xl' : 'md'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <MenuList bg={'walpi.secondary'} textColor={'walpi.action'}>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Öffnungszeiten
            </MenuItem>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Preise
            </MenuItem>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Anfahrt
            </MenuItem>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Galerie
            </MenuItem>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Über Uns
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default HamburgerMenu
