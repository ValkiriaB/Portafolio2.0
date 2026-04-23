import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  
  // Colores definidos para que NO saturen
  const sunColor = "orange.400";
  const moonColor = "purple.300";
  const iconColor = useColorModeValue(sunColor, moonColor);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={iconColor}
      onClick={toggleColorMode}
      icon={useColorModeValue(<FaSun />, <FaMoon />)}
      
      // AQUÍ ESTÁ EL TRUCO:
      _hover={{
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
        // Forzamos a que el icono NO cambie de color ni brille de más
        color: iconColor, 
        transform: "scale(1.1)", // Un pequeño movimiento en lugar de brillo
        boxShadow: "none", // Quitamos cualquier resplandor raro
      }}
      _active={{
        bg: "transparent",
      }
    }
      transition="all 0.2s"
      {...props}
    />
  );
};

export default ColorModeSwitcher;