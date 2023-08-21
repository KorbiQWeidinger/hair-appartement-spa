import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'

const walpiColors = {
  backgroundLight: '#FBF7EC',
  backgroundDark: '#E9C6AD',
  primary: {
    50: 'rgba(185, 202, 123, 0.05)', 
    100: 'rgba(185, 202, 123, 0.10)', 
    200: 'rgba(185, 202, 123, 0.20)', 
    400: 'rgba(185, 202, 123, 0.40)', 
    600: 'rgba(185, 202, 123, 0.60)', 
    900: 'rgba(185, 202, 123, 0.90)', 
    1000: '#B9CA7B', 
  }
}

const theme = extendTheme({
  colors: {
    walpi: walpiColors,
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
