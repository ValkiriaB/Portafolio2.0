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
  { label: 'Diseños', to: '/diseños' },
  { label: 'Estudios', to: '/estudios' },
  { label: 'Mis Skills', to: '/skills' },
  { label: 'Contacto', to: '/contacto' },
]

const NavLink = ({ to, children, onClick }) => {
  const color = useColorModeValue('purple.800', 'purple.300')
  const hoverBg = useColorModeValue('rgba(190, 113, 248, 0.2)', 'rgba(250, 181, 52, 0.15)')

  return (
    <Link
      as={RouterLink}
      to={to}
      px={{ base: 4, lg: 5 }}
      py={2}
      rounded="full"
      color={color}
      fontWeight="medium"
      fontSize={{ base: 'sm', lg: 'md' }}
      whiteSpace="nowrap" // <--- Evita que el texto se rompa o amontone
      _hover={{ textDecoration: 'none', bg: hoverBg }}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const navBg = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(26, 32, 44, 0.95)')
  const borderColor = useColorModeValue('purple.100', 'whiteAlpha.300')

  return (
    <Box position="fixed" top={5} left={0} right={0} width="100%" zIndex={30} px={4}>
      <Box maxW="1200px" mx="auto">
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 4, md: 8 }}
          bg={navBg}
          backdropFilter="blur(10px)"
          boxShadow="lg"
          borderRadius="full"
          border="1px solid"
          borderColor={borderColor}
        >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            borderRadius="12px"
          />

          <HStack 
            as="nav" 
            spacing={{ md: 0, lg: 2 }} 
            display={{ base: 'none', md: 'flex' }}
            flex="1"
            justifyContent="center"
          >
            {Links.map(({ label, to }) => (
              <NavLink key={label} to={to}>{label}</NavLink>
            ))}
          </HStack>

          <Box ml={{ base: 0, md: 4 }}>
            <ColorModeSwitcher />
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box mt={2} p={6} bg={navBg} borderRadius="2xl" boxShadow="2xl" border="1px solid" borderColor={borderColor} display={{ md: 'none' }}>
            <Stack as="nav" spacing={3} align="center">
              {Links.map(({ label, to }) => (
                <NavLink key={label} to={to} onClick={onClose}>{label}</NavLink>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  ) 
}