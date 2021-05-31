import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Image from 'next/image'

import { LocationIcon, StarPolygonIcon } from 'modules/components/Icons'

export const Bio = () => (
  <Flex
    justify="center"
    align="center"
    my={24}
    id="about-me"
    direction={{ base: 'column', md: 'row' }}
  >
    <Box
      w="100%"
      h="100%"
      maxW="263px"
      maxH="310px"
      mb={{ base: 4, md: 0 }}
      pl={{ md: 12, lg: 0 }}
    >
      <Image
        src="/assets/images/photo.png"
        width={263}
        height={310}
        layout="responsive"
        quality={100}
        alt="Profile photo of Maiara Santos"
      />
    </Box>
    <Box pl={12} pr={{ base: 12, lg: 0 }}>
      <Flex align="center">
        <Text
          as="h2"
          fontWeight="bold"
          letterSpacing="0.01rem"
          fontSize="2xl"
          mr={2}
        >
          Hi, I’m Maiara Santos
        </Text>
        <StarPolygonIcon color="brand.primary" w="19px" h="19px" />
      </Flex>
      <Flex align="center" mt={3}>
        <LocationIcon color="brand.primary" w="20px" h="20px" mr={1} />
        <Heading
          as="p"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          fontWeight="medium"
        >
          Brazil
        </Heading>
      </Flex>
      <Text maxW="560px" letterSpacing="wide" mt={6}>
        {`I'm a self-taught Ui/Ux Designer devoted to creating functional web and mobile experiences. I'm a super quick learner and always put into practice what I learn.`}
        <br />
        <br />
        {`I have a background in Marketing and Fashion Design and I've been traveling the world since 2019 as a Digital Nomad. I just love the experience of learning about other cultures.`}
      </Text>
    </Box>
  </Flex>
)
