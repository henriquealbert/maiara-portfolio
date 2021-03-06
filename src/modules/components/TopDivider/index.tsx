import { Box, Flex, Heading } from '@chakra-ui/react'

export const TopDivider = () => (
  <Flex justify="center" align="center" px={{ base: 6, md: 12 }}>
    <Box h="1px" w="100%" bgColor="brand.200" />
    <Heading
      as="h1"
      fontSize="sm"
      textTransform="uppercase"
      letterSpacing="widest"
      mx={{ base: 6, md: 16 }}
      whiteSpace="nowrap"
    >
      Maiara Santos
    </Heading>
    <Box h="1px" w="100%" bgColor="brand.200" />
  </Flex>
)
