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
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaFilePdf, FaVideo, FaImage, FaPalette, FaBezierCurve } from 'react-icons/fa'

const MotionBox = motion(Box)

// Configuración de la animación de entrada para toda la sección
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      when: "beforeChildren", // Espera a que el contenedor termine para animar los hijos
      staggerChildren: 0.2    // Hace que las tarjetas aparezcan una tras otra
    }
  }
}

const designs = {
  canva: [
    {
      id: 1,
      title: 'Colores en Tendencia 2025',
      description: 'Colores en tendencia para uñas que se usaron en 2025. Publicación que use como Community Manager en el Instagram de una manicurista',
      image: '/docs/colores.png',
      url: '/docs/Coloresentendencia.pdf',
      type: 'pdf',
    },
    {
      id: 2,
      title: 'Uñas según tu signo zodiacal',
      description: 'Diseños de uñas inspirados en los distintos signos del zodiaco. Publicación que use como Community Manager en el Instagram de una manicurista',
      image: '/docs/Portada2.png',
      url: '/docs/uñasseguntusigno.pdf',
      type: 'pdf',
    },
    {
      id: 3,
      title: 'Uñas según tu signo zodiacal Parte 2',
      description: 'Colores en tendencia para uñas que se usaron en 2025. Publicación que use como Community Manager en el Instagram de una manicurista',
      image: '/docs/Portada1.png',
      url: '/docs/uñasseguntusigno2.pdf',
      type: 'pdf',
    },
    {
      id: 4,
      title: 'Muestra de color',
      description: 'Muestra de color que hice para un portafolio',
      image: '/docs/InspiraciónBarbie.png',
      url: '/docs/InspiraciónBarbie.png',
      type: 'imagen',
    },
    {
      id: 5,
      title: 'Video publicidad Instagram',
      description: 'Publicidad y edición que hice para un Instagram de manicuría',
      image: '/docs/resultado.png',
      url: '/docs/inspiración.mp4',
      type: 'video',
    },
    {
      id: 6,
      title: 'Video de Promoción',
      description: 'Publicidad y edición que hice para una cuenta',
      image: '/docs/PostPromos.png',
      url: '/docs/PostPromos.png',
      type: 'imagen',
    },
    {
      id: 7,
      title: 'Video publicitario Instagram',
      description: 'Publicidad y edición que hice para una cuenta',
      image: '/docs/publiB.png',
      url: '/docs/VideoPublici.mp4',
      type: 'video',
    },
    {
      id: 8,
      title: 'Video de Promoción',
      description: 'Publicidad y edición que hice para una cuenta',
      image: '/docs/publi.png',
      url: '/docs/VideoPublicitario.mp4',
      type: 'video',
    },
    {
      id: 9,
      title: 'Logo para proyecto Ux/Ui',
      description: 'Logo que hice para un proyecto de Ux/Ui. El proyecto se llamaba Adi y era una aplicación para adiestrar perros.',
      image: '/docs/Adi.png',
      url: '/docs/Adi.png',
      type: 'imagen',
    },
      {
      id: 10,
      title: 'Publicación para Instagram',
      description: 'Publicidad de limpieza de cutis que hice para una cuenta de Instagram. La publicidad fue hecha en Capcut y Canva',
      image: '/docs/limpieza.mp4',
      url: '/docs/limpieza.mp4',
      type: 'video',
    },
     {
      id: 11,
      title: 'Promoción día de la madre',
      description: 'La publicidad fue hecha en Capcut y Canva',
      image: '/docs/publicidadmadre.mp4',
      url: '/docs/publicidadmadre.mp4',
      type: 'video',
    },
  ],
  ilustraciones: [
    {
      id: 10,
      title: 'Ilustración de animales',
      description: 'Trabajos que hice para practicar ilustración digital, usando como referencia fotos de animales.',
      image: '/docs/lemur.jpg',
      url: '/docs/ilustraciones.pdf',
      type: 'pdf',
    },
    {
      id: 11,
      title: 'Ilustración de Personaje',
      description: 'Dibujo que realice en Clip Studio Paint',
      image: '/docs/image.png',
      url: '/docs/image.png',
      type: 'imagen',
    },
    {
      id: 12,
      title: 'Ilustración creativa',
      description: 'Dibujo original que realice en Clip Studio Paint',
      image: '/docs/dibujo1.png',
      url: '/docs/dibujo1.png',
      type: 'imagen',
    },
    {
      id: 13,
      title: 'Ilustración creativa',
      description: 'Reversión de un dibujo que ya había hecho anteriormente en Clip Studio Paint.',
      image: '/docs/dibujo.png',
      url: '/docs/dibujo.png',
      type: 'imagen',
    },
     {
      id: 14,
      title: 'Ilustración para mi Instagram',
      description: 'Apenas me decidi a abrir mi Instagram de arte , quise hacer una ilustración insipirada un poco en los comics, la cual hice en Krita.',
      image: '/docs/foto_de_perfil.jpg',
      url: '/docs/foto_de_perfil.jpg',
      type: 'imagen',
    },
     {
      id: 15,
      title: 'Dibujo de Personaje',
      description: 'Esta vez tome la inspiración de hacer una ilustración de dos personajes de comics, Jason Todd y Cassandra Cain, la cual hice en Krita.',
      image: '/docs/jason_cassandra.jpg',
      url: '/docs/jason_cassandra.jpg',
      type: 'imagen',
    },
   
  ]
}

export default function Diseño() {
  const cardBg = useColorModeValue('white', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const titleColor = useColorModeValue('purple.700', 'purple.200')
  const descColor = useColorModeValue('gray.600', 'gray.400')

  const getButtonProps = (type) => {
    switch (type) {
      case 'pdf': return { label: 'Ver PDF', icon: FaFilePdf, color: 'red' };
      case 'video': return { label: 'Ver Video', icon: FaVideo, color: 'blue' };
      default: return { label: 'Ver Obra', icon: FaImage, color: 'purple' };
    }
  };

  const ProjectGrid = ({ items }) => (
    <SimpleGrid 
      columns={{ base: 1, md: 2, lg: 3 }} 
      spacing={{ base: 6, md: 8, lg: 10 }} 
      mt={8}
      justifyItems="center"
    >
      {items.map((item) => {
        const btn = getButtonProps(item.type);
        return (
          <MotionBox
            key={item.id}
            bg={cardBg}
            rounded="2xl"
            shadow="xl"
            overflow="hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            display="flex"
            flexDirection="column"
            h="100%" 
            maxW={{ base: "100%", sm: "350px" }}
            w="100%"
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              h={{ base: "180px", md: "200px" }} 
              w="100%" 
              objectFit="cover" 
            />
            
            <Box p={{ base: 4, md: 6 }} display="flex" flexDirection="column" flex="1" textAlign="center">
              <Stack spacing={3} mb={6} flex="1">
                <Heading 
                  size="md" 
                  color={textColor} 
                  minH={{ base: "auto", md: "50px" }} 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                >
                  {item.title}
                </Heading>
                <Text fontSize="sm" color={descColor} noOfLines={3}>
                  {item.description}
                </Text>
              </Stack>
              
              <Button
                as={Link}
                href={item.url}
                isExternal
                leftIcon={<Icon as={btn.icon} />}
                colorScheme={btn.color}
                variant="outline"
                rounded="full"
                size="md"
                width="full"
                mt="auto"
                _hover={{ bg: `${btn.color}.500`, color: 'white' }}
              >
                {btn.label}
              </Button>
            </Box>
          </MotionBox>
        )
      })}
    </SimpleGrid>
  );

  return (
    <MotionBox 
      id="diseño" 
      maxW="7xl" 
      mx="auto" 
      py={{ base: 12, md: 20 }} 
      px={{ base: 4, md: 6 }}
      scrollMarginTop="100px"
      // Aplicamos la animación de entrada suave aquí
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <Heading 
        mb={10} 
        textAlign="center" 
        color={titleColor}
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Galería Creativa ✨
      </Heading>

      <Tabs variant="soft-rounded" colorScheme="purple" align="center">
        <TabList 
          bg={useColorModeValue('gray.100', 'gray.800')} 
          p={1} 
          rounded="full" 
          maxW="fit-content"
          display="flex"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Tab 
            rounded="full" 
            fontWeight="bold" 
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
            _selected={{ bg: 'purple.500', color: 'white' }}
          >
            <Icon as={FaPalette} mr={{ base: 1, md: 2 }} /> Canva
          </Tab>
          <Tab 
            rounded="full" 
            fontWeight="bold" 
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
            _selected={{ bg: 'purple.500', color: 'white' }}
          >
            <Icon as={FaBezierCurve} mr={{ base: 1, md: 2 }} /> Ilustraciones
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <ProjectGrid items={designs.canva} />
          </TabPanel>
          <TabPanel px={0}>
            <ProjectGrid items={designs.ilustraciones} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MotionBox>
  )
}