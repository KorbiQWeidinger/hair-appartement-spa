import { Box, HStack, Text } from '@chakra-ui/react'
import './App.css'
import './assets/font/fonts.css'
import Header from './components/Header'
import HomePage from './pages/walpi/HomePage'
import Brands from './components/Brands'
import AboutUsPage from './pages/AboutUsPage'
import PricesPage from './pages/PricesPage'

function App() {
  return (
    <>
      <Header />
      <Box bg="walpi.backgroundLight" height="300vh" pt={'4rem'}>
        <HomePage />
        <Brands />
        <AboutUsPage />
        <PricesPage />
      </Box>
    </>
  )
}

export default App
