import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portafolio";
import Estudios from "./components/Estudios";
import Skills from "./components/About";
import Contacto from "./components/Contact";
import Blog from "./components/blog";
import FogBackground from "./components/FogBackground";

function App() {
  return (
    <Router>
      {/* NIEBLA */}
      <FogBackground />

      <Flex
        direction="column"
        minH="100vh"
        position="relative"
        zIndex={1}
        overflowX="hidden" // Bloquea scroll horizontal por hover
      >
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <Box pt={{ base: "56px", md: "64px" }} flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
