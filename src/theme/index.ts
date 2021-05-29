import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// foundations overrides
import { colors } from './foundations/colors'
import { typography } from './foundations/typography'
// components overrides
import { button } from './components/button'
import { heading } from './components/heading'
import { text } from './components/text'

const customTheme = extendTheme(
  {
    colors: colors,
    typography: typography,
    components: { Button: button, Heading: heading, Text: text }
  },
  withDefaultColorScheme({ colorScheme: 'yellow' })
)

export default customTheme
