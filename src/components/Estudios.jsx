import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaLaptopCode, FaCode, FaBug } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { MdDesignServices } from 'react-icons/md'

const MotionBox = motion(Box)

const estudios = [
  {
    icon: MdDesignServices,
    titulo: 'Estudiante de Diseño Gráfico',
    institucion: 'UNR, Facultad de Arquitectura Planeamiento y Diseño',
    descripcion: 'Explorando el diseño visual y la comunicación gráfica.',
    fecha: 'En curso desde 2025',
  },
  {
    icon: FaLaptopCode,
    titulo: 'Diseño UX/UI',
    institucion: 'ADA ITW',
    descripcion: 'Aprendí a crear interfaces intuitivas, accesibles y visuales.',
    fecha: 'Finalizado en 2023',
  },
  {
    icon: FaCode,
    titulo: 'Programación Frontend',
    institucion: 'Autodidacta + ADA ITW',
    descripcion: 'React, HTML, CSS, JS, Git y buenas prácticas.',
    fecha: 'En práctica constante',
  },
  {
    icon: FaBug,
    titulo: 'Testing QA',
    institucion: 'Fundación PROEM',
    descripcion: 'Pruebas manuales, automatizadas y control de calidad.',
    fecha: 'Diciembre 2021 - Febrero 2022',
  },
]

export default function About() {
  const bgCard = useColorModeValue('purple.50', 'purple.900')
  const headingColor = useColorModeValue('purple.700', 'purple.200')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box maxW="1200px" mx="auto">
      
      {/* SECCIÓN ESTUDIOS */}
      <Box 
        id="estudios" 
        scrollMarginTop="100px" 
        px={{ base: 4, md: 6 }} 
        py={{ base: 10, md: 20 }}
      >
        <Heading
          mb={12}
          textAlign="center"
          color={headingColor}
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          Mis Estudios 🎓
        </Heading>

        <VStack spacing={6} align="center" w="100%">
          {estudios.map((item, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              bg={bgCard}
              p={{ base: 5, md: 8 }}
              rounded="2xl"
              shadow="lg"
              w="100%"
              border="1px solid"
              borderColor={useColorModeValue('purple.100', 'whiteAlpha.100')}
            >
              <Stack 
                direction={{ base: 'column', md: 'row' }} 
                spacing={6} 
                align={{ base: 'center', md: 'flex-start' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Box p={3} bg={useColorModeValue('white', 'purple.800')} rounded="lg" shadow="sm">
                  <Icon as={item.icon} boxSize={8} color="purple.400" />
                </Box>
                <Box>
                  <Heading size="md" mb={1} color={headingColor}>{item.titulo}</Heading>
                  <Text fontWeight="bold" color="purple.500" mb={1}>{item.institucion}</Text>
                  <Text fontSize="sm" color={textColor} mb={2}>{item.descripcion}</Text>
                  <Text fontSize="xs" fontWeight="bold" color="gray.500">{item.fecha.toUpperCase()}</Text>
                </Box>
              </Stack>
            </MotionBox>
          ))}
        </VStack>
      </Box>
    </Box>
  )
}