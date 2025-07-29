import React from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const posts = [
  {
    id: 1,
    title: '¿Cómo empecé en la programación?',
    summary: 'Mi recorrido desde los primeros tutoriales hasta crear mi primer portafolio.',
    date: '28 de julio de 2025',
    link: './blog/como-empece'
  },
  {
    id: 2,
    title: 'Tips para diseñar UI más intuitivas',
    summary: 'Consejos básicos para mejorar la experiencia de usuario en tus proyectos.',
    date: '25 de julio de 2025',
    link: './blog/tips-ui'
  },
  {
    id: 3,
    title: 'React con Chakra UI: mi stack favorito',
    summary: 'Te cuento por qué elegí esta combinación para construir mi web.',
    date: '20 de julio de 2025',
    link: './blog/react-chakra'
  }
]

export default function Blog() {
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const titleColor = useColorModeValue('purple.500', 'orange.300')

  return (
    <MotionBox
      maxW="7xl"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={{ base: 8, md: 12 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Heading
        as="h1"
        size={{ base: 'xl', md: '2xl' }}
        mb={8}
        textAlign="center"
        color={titleColor}
      >
        Mi Blog
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {posts.map((post) => (
          <Card
            key={post.id}
            shadow="md"
            borderRadius="xl"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
          >
            <CardHeader>
              <Heading size="md" color={titleColor}>
                {post.title}
              </Heading>
              <Text fontSize="sm" color={textColor}>
                {post.date}
              </Text>
            </CardHeader>
            <CardBody>
              <Text mb={4} color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                {post.summary}
              </Text>
              <Link
                href={post.link}
                color="teal.500"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
                fontSize={{ base: 'sm', md: 'md' }}
              >
                Leer más →
              </Link>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </MotionBox>
  )
}
