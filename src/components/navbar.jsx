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
  { label: 'Estudios', to: '/estudios' },
  { label: 'Mis Skills', to: '/skills' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Blog', to: '/blog' },
]

const NavLink = ({ to, children }) => {
  const color = useColorModeValue('purple.800', 'purple.300') // Letras naranjas en dark
  const hoverBg = useColorModeValue('rgba(190, 113, 248, 0.6)', 'rgba(250, 181, 52, 0.27)')

  return (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="md"
      color={color}
      fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} // Tamaño responsive
      _hover={{ textDecoration: 'none', bg: hoverBg, color: 'white' }}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const fogStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    background: isLight
      ? `radial-gradient(circle at 20% 30%, rgba(210,150,255,0.95) 0%, transparent 70%),
         radial-gradient(circle at 80% 75%, rgba(240,200,255,0.9) 0%, transparent 70%)`
      : `radial-gradient(circle at 20% 30%, rgba(255,165,0,0.25) 0%, transparent 70%),
         radial-gradient(circle at 80% 75%, rgba(255,165,0,0.2) 0%, transparent 70%)`,
    filter: 'blur(40px)',
    opacity: isLight ? 0.95 : 0.85,
    transformOrigin: 'center',
    animation: 'navFogMove 18s ease-in-out infinite alternate',
  }

  const menuBg = useColorModeValue('rgba(255,255,255,0.5)', 'rgba(20,20,20,0.5)')

  return (
    <Box position="fixed" top={0} left={0} width="100%" zIndex={30} bg="transparent" color={useColorModeValue('#3a2f44','orange.400')}>
      {/* NIEBLA */}
      <Box className="nav-fog" sx={fogStyle} aria-hidden />

      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={6}
        maxW="1290px"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          zIndex={2}
        />

        <HStack spacing={8} alignItems="center">
          <Box
            fontWeight="bold"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} // Tamaño responsive
            color={useColorModeValue('purple.700','purple.300')}
          >
            Mi Portafolio
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>
                {label}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <HStack spacing={4}>
          <ColorModeSwitcher />
        </HStack>
      </Flex>

      {/* Menú móvil */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} position="relative" zIndex={1} bg={menuBg} backdropFilter="blur(12px)">
          <Stack as="nav" spacing={4} px={6}>
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>
                {label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}

      {/* Animación de niebla */}
      <style>{`
        @keyframes navFogMove {
          0% { transform: translate(0%, 0%) scale(1); }
          100% { transform: translate(18%, -12%) scale(1.06); }
        }
      `}</style>
    </Box>
  )
}
