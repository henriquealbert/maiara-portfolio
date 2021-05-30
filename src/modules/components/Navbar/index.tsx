import { Flex } from '@chakra-ui/react'

import { Menu } from 'modules/components/Menu'

export const Navbar = () => {
  return (
    <Flex as="header" pt={6} pb={24} justify="center">
      <Menu />
    </Flex>
  )
}
