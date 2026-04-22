import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaLaptopCode, FaCode, FaBug } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { MdDesignServices } from 'react-icons/md'

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

const MotionBox = motion(Box)

export default function Estudios() {
  const bg = useColorModeValue('purple.50', 'purple.900')
  const headingColor = useColorModeValue('purple.700', 'purple.200')
  const tituloColor = useColorModeValue('purple.700', 'purple.200')
  const descripcionColor = useColorModeValue('gray.600', 'gray.300')
  const fechaColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box px={{ base: 4, md: 6 }} py={{ base: 8, md: 14 }}>
      <Heading
        mb={8}
        textAlign="center"
        color={headingColor}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        Mis Estudios 🎓
      </Heading>

      <VStack spacing={6} align="center"> {/* centrado horizontal */}
        {estudios.map((item, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            bg={bg}
            p={{ base: 4, md: 6 }}
            rounded="xl"
            shadow="md"
            w={{ base: '90%', md: '1200px' }}  
          >
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="flex-start">
              <Icon as={item.icon} boxSize={{ base: 6, md: 8 }} color="purple.400" />
              <Box>
                <Heading size="md" color={tituloColor}>{item.titulo}</Heading>
                <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>{item.institucion}</Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={descripcionColor}>{item.descripcion}</Text>
                <Text fontSize="xs" color={fechaColor}>{item.fecha}</Text>
              </Box>
            </Stack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  )
}
