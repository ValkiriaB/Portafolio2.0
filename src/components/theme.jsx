// src/theme.js
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',  // puede ser 'light' o 'dark'
  useSystemColorMode: false,  // si quieres que siga el modo del SO, pon true
}

const theme = extendTheme({ config })

export default theme
