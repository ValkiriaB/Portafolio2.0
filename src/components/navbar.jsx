import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
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
  const color = useColorModeValue('gray.800', 'gray.200')
  const hoverBg = useColorModeValue('purple.300', 'purple.600')
  const hoverColor = useColorModeValue('white', 'white')

  return (
    <Link
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      color={color}
      _hover={{ textDecoration: 'none', bg: hoverBg, color: hoverColor }}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  const boxShadow = useColorModeValue('md', 'dark-lg')

  return (
    <Box
      className="navbar-custom"
      position="fixed"
      width="100%"
      zIndex={8}
      bg={bg}
      color={color}
      boxShadow={boxShadow}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={6}
        maxW="1200px"
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold" fontSize="xl">
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

        {/* Este HStack siempre visible (sin display responsive) */}
        <HStack spacing={4}>
          <ColorModeSwitcher />
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4} px={6}>
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>
                {label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  )
}
