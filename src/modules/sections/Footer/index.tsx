import { Box, Flex, Text } from '@chakra-ui/layout'
import Image from 'next/image'

import { FooterLinks } from 'modules/components/FooterLinks'

export const FooterSection = () => (
  <Box as="footer" bgColor="brand.100" py={10}>
    <Flex
      justify="space-between"
      align="center"
      maxW="80rem"
      m="0 auto"
      px={16}
    >
      <FooterLinks />
      <Image
        src="/assets/images/logo.png"
        width="45px"
        height="46px"
        alt="Maiara Santos Logo"
        title="Maiara Santos"
      />
    </Flex>

    <Box bgColor="black" w="100%" maxW="80rem" h="1px" my={6} mx="auto" />

    <Text fontSize="sm" letterSpacing="wide" textAlign="center">
      © All rights reserved. Developed by{' '}
      <Text
        as="a"
        href="https://elcubo.dev/"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ textDecoration: 'underline' }}
      >
        ElCubo.dev
      </Text>{' '}
      - {new Date().getFullYear()}
    </Text>
  </Box>
)
