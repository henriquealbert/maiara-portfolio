import { Flex } from '@chakra-ui/react'

import { Menu } from 'modules/components/Menu'

export const Navbar = () => {
  return (
    <Flex as="header" pt="1.5rem" pb="7.813rem" justify="center">
      <Menu />
    </Flex>
  )
}
