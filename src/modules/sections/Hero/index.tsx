import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

import { Navbar } from 'modules/components/Navbar'
import { TopDivider } from 'modules/components/TopDivider'
import { StarPolygonIcon } from 'modules/components/Icons'

export const HeroSection = () => (
  <Box as="section" id="hero">
    <Navbar />
    <TopDivider />
    <Flex justify="center" my={20}>
      <StarPolygonIcon color="brand.primary" w="19px" h="19px" />
    </Flex>
    <Text
      fontSize="2xl"
      maxW="582px"
      textAlign="center"
      m="0 auto"
      px={{ base: 6, md: 0 }}
    >
      <strong>Ui/Ux Designer</strong> devoted to creating functional web &
      mobile experiences focused on daily solutions.
    </Text>
    <Flex direction="column" align="center" mt={20}>
      <Button
        as={ScrollLink}
        to="projects"
        smooth={true}
        duration={1200}
        variant="solid"
        mb={9}
        cursor="pointer"
      >
        See projects
      </Button>
      <Box h="115px" bgColor="brand.200" w="1px" />
    </Flex>
  </Box>
)
