import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
  Box
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionIconButton = motion(IconButton)

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  const isDark = useColorModeValue(false, true)

  return (
    <Box
      position={{ base: 'fixed', md: 'absolute' }}
      bottom={{ base: 4, md: 'auto' }}
      right={{ base: 4, md: 'auto' }}
      zIndex="tooltip"
    >
      <Tooltip label="Cambiar tema" aria-label="Cambiar tema">
        <MotionIconButton
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound
          size="md"
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          colorScheme={isDark ? 'yellow' : 'purple'}
          bg={isDark ? 'gray.700' : 'gray.200'}
          color={isDark ? 'yellow.300' : 'purple.700'}
          transition="all 0.3s ease"
          boxShadow="md"
        />
      </Tooltip>
    </Box>
  )
}

export default ColorModeSwitcher

