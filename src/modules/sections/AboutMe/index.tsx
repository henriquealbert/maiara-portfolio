import { Box } from '@chakra-ui/react'

import { Bio } from 'modules/components/Bio'
import { Contact } from 'modules/components/Contact'

export const AboutMeSection = () => (
  <Box as="section">
    <Bio />
    <Box h="1px" w="100%" maxW="80rem" bgColor="brand.200" m="0 auto" />
    <Contact />
  </Box>
)
