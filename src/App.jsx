import { 
  ChakraProvider,
  defineStyleConfig,
	extendTheme,
 } from '@chakra-ui/react';
 
import { Box } from '@chakra-ui/react';

const Container = defineStyleConfig({
  // Styles for the base style
	baseStyle: {
		maxW: '100em',
		w: '100%',
		h: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		px: { base: '5%', md: '80px' },
	},
	// Styles for the size variations
	sizes: {},
	// Styles for the visual style variations
	variants: {},
	// The default `size` or `variant` values
	defaultProps: {},
})

const theme = extendTheme({
  fonts: {
    body: 'Inter, Helvetica, sans-serif',
  },
  colors: {
    primary : {
      500: '#00000'
    }
  },
  components: {
    Container,
  },
})

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          display="flex"
          gap={8}
        >
          <Box>Hello</Box>
          <Box>World</Box>
        </Box>
      </ChakraProvider>
    </>
  )
}

export default App
