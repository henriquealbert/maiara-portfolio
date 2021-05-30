import { Button, Flex } from '@chakra-ui/react'
import { data } from './data'

export const Navbar = () => {
  return (
    <Flex as="header" pt="3.375rem" pb="7.813rem" justify="center">
      <Flex as="nav">
        {data.map((link) => (
          <Button key={link.title} href={link.href} variant="ghost" d="block">
            {link.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}
