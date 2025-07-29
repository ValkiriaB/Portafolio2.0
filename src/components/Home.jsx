import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Home() {
  const bg = useColorModeValue('white', 'gray.800')
  const shadow = useColorModeValue('md', 'dark-lg')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <MotionBox
      maxW={{ base: '90%', md: '800px' }}
      mx="auto"
      my={{ base: 6, md: 12 }}
      px={{ base: 4, md: 6 }}
      py={{ base: 6, md: 8 }}
      bg={bg}
      rounded="md"
      boxShadow={shadow}
      textAlign="center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Stack spacing={{ base: 4, md: 6 }}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          color="purple.500"
        >
          Hola, soy Valeria Barki
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={textColor}
          maxW="600px"
          mx="auto"
        >
          Soy estudiante de Diseño Gráfico, apasionada programadora Frontend y
          diseñadora UX/UI. Me encanta combinar creatividad con tecnología para
          crear experiencias digitales únicas y funcionales.
        </Text>

        <Text fontSize={{ base: 'sm', md: 'md' }} color={secondaryTextColor}>
          Actualmente desarrollo proyectos que integran diseño, usabilidad y
          código, siempre aprendiendo y buscando nuevos desafíos.
        </Text>

        <Button
          as={Link}
          href="./ValeriaBarkicv.pdf"
          colorScheme="orange"
          size={{ base: 'md', md: 'lg' }}
          alignSelf="center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar mi CV
        </Button>
      </Stack>
    </MotionBox>
  )
}
