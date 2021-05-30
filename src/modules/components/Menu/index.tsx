import { Flex, Button } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

import { menuLinks } from './menuLinks'

type Props = {
  footer?: boolean
}

export const Menu = ({ footer }: Props) => (
  <Flex as="nav">
    {menuLinks.map((link) => (
      <Button
        key={link.title}
        as={ScrollLink}
        to={link.to}
        smooth={true}
        duration={1200}
        variant={footer ? 'footerLink' : 'ghost'}
        mr={footer ? 9 : 8}
        ml={footer ? 0 : 8}
        cursor="pointer"
      >
        {link.title}
      </Button>
    ))}
  </Flex>
)
