import { Box, Button } from '@chakra-ui/react'

const HomePage = () => (
  <Box bgColor="gray.300" h="100vh">
    <Button>See projects</Button>
    <Button variant="outline" mt={6} d="block">
      Show more
    </Button>
    <Button variant="ghost" mt={6} d="block">
      Home
    </Button>
    <Button as="a" variant="link" mt={6} d="block">
      Linkedin/maiarasantoss
    </Button>
    <Button variant="footerLink" mt={6} d="block">
      Let’s Talk
    </Button>
  </Box>
)

export default HomePage
