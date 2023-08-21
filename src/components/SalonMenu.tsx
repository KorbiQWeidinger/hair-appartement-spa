import { useState, useCallback } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

function SalonMenu() {
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
            as={Button}
            aria-label="Salon Wählen"
            position={'fixed'}
            top={6}
            right={162}
            variant="solid"
            bg={isOpen ? 'walpi.secondary' : 'walpi.action'}
            _active={{ bg: 'walpi.action' }}
            _hover={{ bg: isHovered ? 'walpi.secondary' : 'walpi.action' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Salon Wählen
          </MenuButton>
          <MenuList bg={'walpi.secondary'} textColor={'walpi.action'}>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Haidhausen
            </MenuItem>
            <MenuItem
              bg={'walpi.secondary'}
              _hover={{ bg: 'walpi.action', color: 'walpi.secondary' }}
            >
              Walpertskirchen
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default SalonMenu
