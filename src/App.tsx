import { Box } from '@chakra-ui/react'
import './App.css'
import './assets/font/fonts.css'
import ServiceList from './components/ServiceList'

function App() {
  return (
    <>
      <Box bg="walpi.backgroundDark" height="100vh" pt={6}>
        <ServiceList />
      </Box>
    </>
  )
}

export default App
