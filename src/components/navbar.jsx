// src/components/Navbar.jsx
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import ColorModeSwitcher from './ColorModeSwitcher'

const Links = [
  { label: 'Home', to: '/' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Diseños', to: '/diseños' },
  { label: 'Estudios', to: '/estudios' },
  { label: 'Mis Skills', to: '/skills' },
  { label: 'Contacto', to: '/contacto' },
]

const NavLink = ({ to, children }) => {
  const color = useColorModeValue('purple.800', 'purple.300')
  const hoverBg = useColorModeValue('rgba(190, 113, 248, 0.2)', 'rgba(250, 181, 52, 0.15)')

  return (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="full"
      color={color}
      fontWeight="medium"
      fontSize={{ base: 'sm', md: 'md' }}
      _hover={{ textDecoration: 'none', bg: hoverBg }}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
  const borderColor = useColorModeValue('purple.100', 'whiteAlpha.300')

  return (
    <Box 
      position="fixed" 
      top={5} // Bajé un poquito más la barra (de 4 a 5)
      left={0} 
      right={0} 
      width="100%" 
      zIndex={30} 
      px={6} // Más margen a los costados de la pantalla
    >
      <Box
        maxW="1200px" // Aumenté un poco el ancho total
        mx="auto"
        bg={navBg}
        backdropFilter="blur(12px)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        borderRadius="full"
        border="1px solid"
        borderColor={borderColor}
      >
        <Flex
          h={16} // Volví a los 16 de altura para que el botón no toque los bordes arriba/abajo
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 6, md: 10 }} // ¡Aquí está el truco! Más espacio a los costados internos
        >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />

          <HStack spacing={8} alignItems="center">
            <Box
              fontWeight="bold"
              fontSize={{ base: 'md', md: 'xl' }}
              color={useColorModeValue('purple.700', 'purple.300')}
              letterSpacing="wide"
            >
            </Box>
            <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ label, to }) => (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          {/* El botón de Dark Mode ahora tiene su propio espacio */}
          <HStack spacing={4} pr={2}> 
            <ColorModeSwitcher />
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }} px={10}>
            <Stack as="nav" spacing={2}>
              {Links.map(({ label, to }) => (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  )
}