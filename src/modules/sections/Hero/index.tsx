import { Box, Button, Flex, Text } from '@chakra-ui/react'

import { Navbar } from 'modules/components/Navbar'
import { StarPolygon } from 'modules/components/StarPolygon'
import { TopDivider } from 'modules/components/TopDivider'

export const HeroSection = () => (
  <Box h="100vh" overflow="hidden">
    <Navbar />
    <TopDivider />
    <Flex justify="center" my={20}>
      <StarPolygon />
    </Flex>
    <Text fontSize="2xl" maxW="582px" textAlign="center" m="0 auto">
      <Text as="strong">Ui/Ux Designer</Text> devoted to create functional web &
      mobile experiences focused in daily solutions.
    </Text>
    <Flex direction="column" align="center" mt={20}>
      <Button variant="solid" mb={9}>
        See projects
      </Button>
      <Box h="120px" bgColor="brand.200" w="1px" />
    </Flex>
  </Box>
)
