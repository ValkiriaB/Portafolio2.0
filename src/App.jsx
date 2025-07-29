import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

import Navbar from './components/navbar'
import Home from './components/Home'
import Portfolio from './components/Portafolio'
import Estudios from './components/Estudios'
import Skills from './components/About'
import Contacto from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/blog'

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Navbar />

        {/* 
          pt dinámico para navbar fija que cambia de tamaño en móvil
          flex=1 para que ocupe todo el espacio restante y empuje el footer abajo
        */}
        <Box pt={{ base: '56px', md: '64px' }} flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>

        <Footer />
      </Flex>
    </Router>
  )
}

export default App

