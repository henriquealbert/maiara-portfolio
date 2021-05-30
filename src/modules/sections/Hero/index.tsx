import { Box, Button, Flex, Text } from '@chakra-ui/react'

import { Navbar } from 'modules/components/Navbar'
import { TopDivider } from 'modules/components/TopDivider'
import { StarPolygonIcon } from 'modules/components/Icons'

export const HeroSection = () => (
  <Box minH="100vh" as="section" id="hero">
    <Navbar />
    <TopDivider />
    <Flex justify="center" my={20}>
      <StarPolygonIcon color="brand.primary" w="19px" h="19px" />
    </Flex>
    <Text fontSize="2xl" maxW="582px" textAlign="center" m="0 auto">
      <Text as="strong">Ui/Ux Designer</Text> devoted to create functional web &
      mobile experiences focused in daily solutions.
    </Text>
    <Flex direction="column" align="center" mt={20}>
      <Button variant="solid" mb={9}>
        See projects
      </Button>
      <Box h="115px" bgColor="brand.200" w="1px" />
    </Flex>
  </Box>
)
