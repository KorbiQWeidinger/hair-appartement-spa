import './App.css'
import './assets/font/fonts.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Walpi from './pages/Walpi'
import Ost from './pages/Ost'
import Impressum from './pages/Impressum'
import SelectSalonPage from './pages/SelectSalonPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectSalonPage />} />
        <Route path="/walpi" element={<Walpi />} />
        <Route path="/ost" element={<Ost />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  )
}

export default App
