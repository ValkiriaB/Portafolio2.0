import { Box, Flex, Text, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const bg = useColorModeValue('rgba(240,200,255,0.7)', 'rgba(50,50,50,0.6)');

  return (
    <Box
      bg={bg}
      color={textColor}
      py={6}
      px={4}
      w="100%"
      position="relative"
      zIndex={2}
      backdropFilter="blur(12px)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        flexWrap="wrap"
        gap={4}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Valeria Barki. Todos los derechos reservados.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 2, sm: 4, md: 6 }} align="center">
          <Link as={RouterLink} to="/" _hover={{ color: 'purple.500' }}>Home</Link>
          <Link as={RouterLink} to="/portafolio" _hover={{ color: 'purple.500' }}>Portafolio</Link>
          <Link as={RouterLink} to="/estudios" _hover={{ color: 'purple.500' }}>Estudios</Link>
          <Link as={RouterLink} to="/skills" _hover={{ color: 'purple.500' }}>Mis Skills</Link>
          <Link as={RouterLink} to="/contacto" _hover={{ color: 'purple.500' }}>Contacto</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
