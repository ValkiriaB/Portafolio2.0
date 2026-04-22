import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { use } from 'react'
import {
  FaCode,
  FaPaintBrush,
  FaToolbox,
  FaLaptopCode,
  FaUsers,
  FaGitAlt
} from 'react-icons/fa'

const MotionBox = motion(Box)

const skills = [
  {
    title: 'Programación',
    icon: FaCode,
    description: 'HTML, CSS, JavaScript',
  },
  {
    title: 'Frameworks Frontend',
    icon: FaLaptopCode,
    description: 'React.js, Material UI, Chakra UI, Bootstrap, Tailwind',
  },
  {
    title: 'Diseño UI/UX',
    icon: FaPaintBrush,
    description: 'Figma, Adobe XD, Canva, Illustrator, Photoshop, InDesign',
  },
  {
    title: 'Herramientas de desarrollo',
    icon: FaToolbox,
    description: 'Visual Studio Code, Git, GitHub',
  },
  {
    title: 'Productividad y comunicación',
    icon: FaUsers,
    description: 'Google Docs, Trello, Gmail, Calendly, Telegram, WhatsApp Business',
  },
  {
    title: 'Colaboración y contenido',
    icon: FaGitAlt,
    description: 'Google Drive, WordPress, Google Forms, ChatGPT',
  }
]

export default function Skills() {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const color =  useColorModeValue('purple.700', 'purple.200')
  const icon = useColorModeValue ('purple.500', 'purple.200')
  return (
    <Box px={{ base: 4, md: 6 }} py={{ base: 6, md: 16 }} maxW="1200px" mx="auto">
      <Heading
        as="h2"
        size="xl"
        mb={{ base: 8, md: 8 }}
        textAlign="center"
        color= {color}
      >
        Mis Skills
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={6}>
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            bg={bg}
            p={{ base: 4, md: 6 }}
            rounded="md"
            boxShadow="md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <VStack spacing={3} align="start">
              <Icon as={skill.icon} boxSize={{ base: 6, md: 8 }} color={icon} />
              <Heading as="h3" size="md" color={textColor}>
                {skill.title}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                {skill.description}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  )
}
