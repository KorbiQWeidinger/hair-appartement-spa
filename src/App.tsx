import './assets/font/fonts.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Impressum from './pages/Impressum'
import SelectSalon from './pages/SelectSalon'
import { useState, useEffect } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { OST, WALPI } from './constants/SALONS'
import { OST_COLORS, WALPI_COLORS } from './constants/COLORS'

function App() {
  const [theme, setTheme] = useState({})
  const [salon, setSalon] = useState('')

  useEffect(() => {
    if (salon === WALPI) {
      setTheme({
        colors: {
          walpi: WALPI_COLORS,
        },
      })
    } else {
      setTheme({
        colors: {
          walpi: OST_COLORS,
        },
      })
    }
  }, [salon])

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Router>
        <Routes>
          <Route path="/" element={<SelectSalon />} />
          <Route
            path="/walpi"
            element={<Main salon={WALPI} setSalon={setSalon} />}
          />
          <Route
            path="/ost"
            element={<Main salon={OST} setSalon={setSalon} />}
          />
          <Route
            path="/walpi/impressum"
            element={<Impressum salon={WALPI} setSalon={setSalon} />}
          />
          <Route
            path="/ost/impressum"
            element={<Impressum salon={OST} setSalon={setSalon} />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
