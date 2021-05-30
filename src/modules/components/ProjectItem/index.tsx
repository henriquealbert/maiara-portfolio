import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  item: {
    title: string
    category: string
    role: string
    description: string
    link: string
    imgUrl: string
    reversed?: boolean
  }
}

export const ProjectItem = ({ item }: Props) => (
  <Flex
    py={16}
    justify="center"
    align="center"
    direction={item.reversed ? 'row-reverse' : 'row'}
  >
    <Box ml={9}>
      <Heading
        as="h2"
        color="white"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="widest"
      >
        {item.title}
      </Heading>

      <Text
        as="h3"
        fontSize="xs"
        fontWeight="medium"
        letterSpacing="wide"
        color="white"
        mt={1}
        mb={7}
      >
        {item.category}
      </Text>

      <Text
        color="white"
        fontWeight="medium"
        fontSize="sm"
        letterSpacing="wide"
        mb={4}
      >
        {item.role}
      </Text>

      <Text color="white" maxW="315px" letterSpacing="wide" mb={7}>
        {item.description}
      </Text>

      <Button
        as="a"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
      >
        Show more
      </Button>
    </Box>
    <Box w="80%" maxW="776px" h="80%" maxH="486px">
      <Image
        src={item.imgUrl}
        layout="responsive"
        width={776}
        height={486}
        objectFit="cover"
        quality={100}
      />
    </Box>
  </Flex>
)
