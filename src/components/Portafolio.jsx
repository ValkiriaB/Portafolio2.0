import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import imagen1 from '../imagenes/portafolio-amarillo.png'
import imagen2 from '../imagenes/todo-list.png'
import image3 from '../imagenes/mockapi.png'
import image4 from '../imagenes/Movies.png'
import image5 from '../imagenes/generador.png'
import image6 from '../imagenes/portafolio1.png'

const MotionBox = motion(Box)

const projects = [
  {
    id: 1,
    title: 'Ahorradas App',
    description:
      'AhorrADAs 💸 es una app que permite controlar las finanzas personales, diferenciando gastos y ganancias por fecha, monto, descripción y categoría. Construida con HTML5, Bulma y JavaScript.',
    image: imagen1,
    url: 'https://ahorradas-2-0.vercel.app/',
  },
  {
    id: 2,
    title: 'To-do List App',
    description:
      'App para crear listas de tareas, marcarlas como completas o eliminarlas. Permite filtrar por estado. Creada con Vite, React y Chakra UI.',
    image: imagen2,
    url: 'https://todo-list-w8hi-ngqlsxsea-vale-barkis-projects.vercel.app/',
  },
  {
    id: 3,
    title: 'MockApi',
    description:
      'CRUD completo conectado a MockAPI. Incluye carga simulada, peticiones GET, POST, PUT y DELETE. Estructura clara y navegación sencilla.',
    image: image3,
    url: 'https://valkiriab.github.io/MockApi-Ada/',
  },
  {
    id: 4,
    title: 'Movies App',
    description:
      'App conectada a una API de películas. Muestra estrenos, populares, mejor puntuadas. Incluye buscador, favoritos y modo oscuro.',
    image: image4,
    url: 'https://movies-finder-seven.vercel.app/',
  },
  {
    id: 5,
    title: 'Generador de memes',
    description:
      'Generador de memes que permite seleccionar imagen y añadir texto arriba y abajo. Hecho con HTML, CSS y JS.',
    image: image5,
    url: 'https://valkiriab.github.io/Generador-de-Memes/',
  },
  {
    id: 6,
    title: 'Mi primer portafolio',
    description:
      'Primer portafolio creado con HTML y CSS, donde muestro mis primeros proyectos y aprendizajes en el desarrollo web.',
    image: image6,
    url: 'https://portafolio-gamma-three.vercel.app/',
  },
]

export default function Portfolio() {
  const cardBg = useColorModeValue('white', 'gray.700')
  const cardShadow = useColorModeValue('md', 'dark-lg')
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <MotionBox
      id="portafolio"
      maxW="7xl"
      mx="auto"
      py={12}
      px={{ base: 4, md: 6, lg: 8 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Heading mb={{ base: 6, md: 10 }} textAlign="center" color="purple.500">
        Mi Portafolio
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map(({ id, title, description, image, url }) => (
          <MotionBox
            key={id}
            bg={cardBg}
            boxShadow={cardShadow}
            rounded="lg"
            overflow="hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            flexDirection="column"
            minH="450px" // altura mínima para alinear botones
          >
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              w="100%"
              h={{ base: '150px', md: '180px', lg: '200px' }}
            />
            <Box p={6} display="flex" flexDirection="column" flex="1">
              <Stack spacing={3} flex="1">
                <Heading size="md" color={textColor}>
                  {title}
                </Heading>
                <Text fontSize="sm" color={descriptionColor}>
                  {description}
                </Text>
              </Stack>
              <Button
                as={Link}
                href={url}
                colorScheme="orange"
                size="sm"
                mt={4}
                target="_blank"
                rel="noopener noreferrer"
                alignSelf={{ base: 'center', md: 'flex-start' }}
              >
                Ver más
              </Button>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  )
}


