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
      spacing={10} 
      mt={8}
      justifyItems="center"
      alignItems="stretch"
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
            animate={{ opacity: 1, y: 0 }}
            display="flex"
            flexDirection="column"
            h="100%" // Obliga a todas a medir lo mismo que la más alta
            maxW="350px"
            w="100%"
          >
            <Image src={item.image} alt={item.title} h="200px" w="100%" objectFit="cover" />
            
            <Box p={6} display="flex" flexDirection="column" flex="1" textAlign="center">
              <Stack spacing={3} mb={6} flex="1">
                <Heading size="md" color={textColor} minH="50px" display="flex" alignItems="center" justifyContent="center">
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
                mt="auto" // Empuja el botón siempre al fondo
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
    <Box id="diseño" maxW="7xl" mx="auto" py={20} px={6}>
      <Heading mb={10} textAlign="center" color={titleColor}>
        Galería Creativa
      </Heading>

      <Tabs variant="soft-rounded" colorScheme="purple" align="center">
        <TabList bg={useColorModeValue('gray.100', 'gray.800')} p={1} rounded="full" maxW="fit-content">
          <Tab rounded="full" fontWeight="bold" _selected={{ bg: 'purple.500', color: 'white' }}>
            <Icon as={FaPalette} mr={2} /> Diseño en Canva
          </Tab>
          <Tab rounded="full" fontWeight="bold" _selected={{ bg: 'purple.500', color: 'white' }}>
            <Icon as={FaBezierCurve} mr={2} /> Ilustraciones
          </Tab>
        </TabList>

        <TabPanels px={0}>
          <TabPanel>
            <ProjectGrid items={designs.canva} />
          </TabPanel>
          <TabPanel>
            <ProjectGrid items={designs.ilustraciones} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}