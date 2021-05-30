import { Flex, Button } from '@chakra-ui/react'
import { data } from './data'

export const FooterLinks = () => (
  <Flex as="nav">
    {data.map((link) => (
      <Button key={link.title} variant="footerLink" mr={9}>
        {link.title}
      </Button>
    ))}
  </Flex>
)
