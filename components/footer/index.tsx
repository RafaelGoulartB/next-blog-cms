import React from 'react'
import { Divider, Flex, Text, Box } from '@chakra-ui/react'
import { socialLinks } from '../header/constants'
import SocialLinks from '../social-links'

const Footer: React.FC = () => {
  return (
    <Box as="footer" mt="16">
      <Divider />
      <Flex
        bg="white"
        paddingX={{ base: 10, sm: 10, lg: 20 }}
        paddingY={{ sm: '8', lg: '10' }}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ sm: 'column', lg: 'row' }}
      >
        <Text display="inline" textAlign="center">
          <Text fontWeight="bold" display="inline">
            hotcoffee
          </Text>{' '}
          2020 copyright all rights reserved
        </Text>

        <Flex mt={{ sm: '10', lg: '0' }}>
          {socialLinks.map(item => (
            <SocialLinks key={item.link} link={item.link} icon={item.icon} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
