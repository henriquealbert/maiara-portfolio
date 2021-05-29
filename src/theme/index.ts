import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// foundations overrides
import { colors } from './foundations/colors'
import { typography } from './foundations/typography'
// components overrides
import { button } from './components/button'

const customTheme = extendTheme(
  { colors: colors, typography: typography, components: { Button: button } },
  withDefaultColorScheme({ colorScheme: 'yellow' })
)

export default customTheme
