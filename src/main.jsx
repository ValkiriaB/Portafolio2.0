import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../src/components/theme.jsx'   // <-- importá el tema personalizado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Esta línea ayuda a que el modo claro/oscuro se aplique correctamente desde el inicio */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
