import { Button, Flex } from '@chakra-ui/react'

export const Navbar = () => {
  const menuLinks = [
    { title: 'Home', href: '#top' },
    { title: 'Projects', href: '#projects' },
    { title: 'LinkedIn', href: '#' },
    { title: 'About me', href: '#about-me' },
    { title: 'Let’s talk', href: '#contact' }
  ]
  return (
    <Flex pt="3.375rem" pb="7.813rem" justify="center">
      <Flex>
        {menuLinks.map((link) => (
          <Button key={link.title} href={link.href} variant="ghost" d="block">
            {link.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}
