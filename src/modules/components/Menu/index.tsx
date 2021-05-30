import { Flex, Button } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

import { menuLinks } from './menuLinks'

type Props = {
  footer?: boolean
}

export const Menu = ({ footer }: Props) => (
  <Flex as="nav">
    {menuLinks.map((link) =>
      link.external ? (
        <Button
          key={link.title}
          as="a"
          variant={footer ? 'footerLink' : 'ghost'}
          mr={footer ? 9 : 8}
          ml={footer ? 0 : 8}
          cursor="pointer"
          target="_blank"
          rel="noopener noreferrer"
          href={link.to}
        >
          {link.title}
        </Button>
      ) : (
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
      )
    )}
  </Flex>
)
