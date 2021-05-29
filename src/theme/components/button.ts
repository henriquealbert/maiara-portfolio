export const button = {
  baseStyle: {
    _focus: {
      boxShadow: 'none'
    },
    borderRadius: '0'
  },
  variants: {
    solid: {
      width: '200px',
      height: '40px',
      fontSize: 'xs',
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      lineHeight: '4',
      letterSpacing: 'widest',
      _hover: {
        bgColor: 'brand.100'
      },
      _active: {
        bgColor: 'brand.100'
      }
    },
    outline: {
      width: '200px',
      height: '40px',
      fontSize: 'xs',
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      lineHeight: '4',
      letterSpacing: 'widest',
      color: 'white',
      borderColor: 'white',
      border: '2px solid',
      _hover: {
        bgColor: 'brand.100',
        border: '2px solid var(--chakra-colors-black)',
        color: 'black'
      },
      _active: {
        bgColor: 'brand.100',
        border: '2px solid var(--chakra-colors-black)',
        color: 'black'
      }
    },
    ghost: {
      width: '200px',
      height: '40px',
      fontSize: 'xs',
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      color: 'black',
      letterSpacing: 'widest',
      bgColor: 'transparent',
      _hover: {
        color: 'brand.primary',
        bgColor: 'transparent'
      },
      _active: {
        color: 'brand.primary',
        bgColor: 'transparent'
      }
    },
    link: {
      fontSize: 'xs',
      fontFamily: '"Roboto Slab", serif',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      color: 'black',
      letterSpacing: 'widest',
      cursor: 'pointer',
      _hover: {
        color: 'black',
        textDecoration: 'underline'
      },
      _active: {
        color: 'black',
        textDecoration: 'underline'
      }
    },
    footerLink: {
      padding: '0',
      fontSize: 'sm',
      lineHeight: '6',
      fontWeight: 'normal',
      fontFamily: 'Quicksand, sans-serif',
      letterSpacing: '0.02rem',
      _hover: {
        color: 'brand.primary'
      }
    }
  }
}
