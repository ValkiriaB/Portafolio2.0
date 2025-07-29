import {
  Box,
  Heading,
  Text,
  IconButton,
  HStack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Contacto() {
  const iconColor = useColorModeValue('purple.500', 'orange.300')
  const headingColor = useColorModeValue('purple.500', 'orange.300')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const hoverColor = useColorModeValue('orange.400', 'yellow.300')

  const contacts = [
    {
      href: 'mailto:valeriabarki@gmail.com',
      icon: <FaEnvelope />,
      label: 'Correo',
    },
    {
      href: 'https://github.com/ValkiriaB',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.instagram.com/vale_barki/?hl=es',
      icon: <FaInstagram />,
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/valeria-barki/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
  ]

  return (
    <MotionBox
      py={12}
      px={6}
      maxW="700px"
      mx="auto"
      textAlign="center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Heading
        as="h2"
        size="xl"
        mb={4}
        color={headingColor}
        transition="color 0.3s ease"
      >
        ¡Hablemos!
      </Heading>

      <Text
        fontSize="lg"
        color={textColor}
        mb={8}
        transition="color 0.3s ease"
      >
        Si querés contactarme, podés escribirme por mail o seguirme en mis redes:
      </Text>

      <HStack spacing={6} justify="center">
        {contacts.map(({ href, icon, label }) => (
          <Link href={href} isExternal key={label}>
            <IconButton
              aria-label={label}
              icon={icon}
              size="lg"
              color={iconColor}
              variant="ghost"
              transition="all 0.3s ease"
              _hover={{ transform: 'scale(1.2)', color: hoverColor }}
            />
          </Link>
        ))}
      </HStack>
    </MotionBox>
  )
}

