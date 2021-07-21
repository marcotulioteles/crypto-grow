import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181631",
      "700": "#212245",
    },
    purple: {
      "300": "#4B4D9F",
      "400": "#56548F",
    },
    orange: {
      "400": "#F78E10"
    },
    pink: {
      "700": "#FF3180"
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, gray.900, gray.700)",
        color: "purple.400"
      }
    }
  }
})