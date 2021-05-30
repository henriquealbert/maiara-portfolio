import { Box, Flex, Text, Button } from '@chakra-ui/react'

import { data } from './data'

export const Contact = () => (
  <Box as="section" textAlign="center" my={24} id="contact">
    <Text fontWeight="medium" letterSpacing="wide" mb={7}>
      Feel free to send me a message at <strong>LinkedIn</strong> or{' '}
      <strong>e-mail</strong> me:
    </Text>
    <Flex align="center" direction="column">
      {data.map((item, i) => (
        <Flex
          key={item.text}
          color="brand.primary"
          _hover={{ color: 'black' }}
          mb={i === 0 ? 5 : 0}
        >
          {item.icon}
          <Button
            as="a"
            variant="link"
            ml={4}
            justifyContent="flex-start"
            w="238px"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.text}
          </Button>
        </Flex>
      ))}
    </Flex>
  </Box>
)
