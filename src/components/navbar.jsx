import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
  Collapse,
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

const NavLink = ({ to, children }) => (
  <Link
    as={RouterLink}
    to={to}
    px={3}
    py={2}
    rounded="md"
    _hover={{ textDecoration: 'none', bg: 'purple.300', color: 'white' }}
    w="100%"
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Box
      bg={bg}
      color={color}
      px={4}
      position="fixed"
      width="100%"
      zIndex={10}
      boxShadow="md"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menú"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={6} alignItems="center">
          <Box fontWeight="bold" fontSize="xl">
            Mi Portafolio
          </Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>
                {label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <ColorModeSwitcher />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>
                {label}
              </NavLink>
            ))}
            <ColorModeSwitcher />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}

