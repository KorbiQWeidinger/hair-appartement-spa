import { Flex } from '@chakra-ui/react'
import BoxImageAppear from '../components/BoxImageAppear'
import SplashScreen from '../components/SplashScreen'
import { OST, WALPI } from '../constants/SALONS'

const SelectSalon = () => {
  function isSmallScreen() {
    return window.innerWidth <= 768
  }

  return (
    <>
      <SplashScreen />
      <Flex bg={'black'} direction={isSmallScreen() ? 'column' : 'row'}>
        <BoxImageAppear
          reverse={true}
          delay={4}
          buttonText="Haidhausen"
          salon={OST}
        />
        <BoxImageAppear
          reverse={false}
          delay={4}
          buttonText="Walpertskirchen"
          salon={WALPI}
        />
      </Flex>
    </>
  )
}

export default SelectSalon
