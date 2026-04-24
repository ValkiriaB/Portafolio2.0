import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/components/theme.jsx'

// Guardamos el elemento root en una constante
const rootElement = document.getElementById('root')

// Evitamos el error #299 verificando si el root ya existe
// Esto es especialmente útil si usas extensiones que inyectan scripts
if (!window.reactRoot) {
  window.reactRoot = ReactDOM.createRoot(rootElement)
}

window.reactRoot.render(
  <React.StrictMode>
    {/* ColorModeScript debe ir fuera de ChakraProvider para evitar saltos de color */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
