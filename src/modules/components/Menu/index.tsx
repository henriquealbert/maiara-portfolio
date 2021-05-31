import { Flex, Button } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

import { menuLinks } from './menuLinks'

type Props = {
  footer?: boolean
}

export const Menu = ({ footer }: Props) => (
  <Flex as="nav" wrap={{ base: 'wrap', md: 'nowrap' }}>
    {menuLinks.map((link) =>
      link.external ? (
        <Button
          key={link.title}
          as="a"
          variant={footer ? 'footerLink' : 'ghost'}
          mr={footer ? { base: 5, lg: 9 } : { lg: 8 }}
          ml={footer ? 0 : { md: 8 }}
          cursor="pointer"
          target="_blank"
          rel="noopener noreferrer"
          href={link.to}
          maxW={{ base: '50%', md: 'none' }}
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
          mr={footer ? { base: 5, lg: 9 } : { lg: 9 }}
          ml={footer ? 0 : { md: 8 }}
          cursor="pointer"
          maxW={
            link.title === 'Home'
              ? { bae: '100%' }
              : { base: '50%', md: 'none' }
          }
        >
          {link.title}
        </Button>
      )
    )}
  </Flex>
)
