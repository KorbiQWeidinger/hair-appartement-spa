import { Flex } from '@chakra-ui/react'
import BoxImageAppear from '../components/BoxImageAppear'
import SplashScreen from '../components/SplashScreen'

const SelectSalonPage = () => {
  function isSmallScreen() {
    return window.innerWidth <= 768
  }

  return (
    <>
      <SplashScreen />
      <Flex bg={'black'} direction={isSmallScreen() ? 'column' : 'row'}>
        <BoxImageAppear imageUrl="/SalonOst.jpeg" reverse={true} delay={4} buttonText='Haidhausen'/>
        <BoxImageAppear imageUrl="/SalonWalpi.jpeg" reverse={false} delay={4} buttonText='Walpertskirchen'/>
      </Flex>
    </>
  )
}

export default SelectSalonPage
