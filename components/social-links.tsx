import React from 'react'
import { Icon, Link as ChakraLink } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface SocialLinksProps {
  link: string
  icon: IconType
}

const SocialLinks: React.FC<SocialLinksProps> = ({ link, icon }) => {
  return (
    <ChakraLink href={link} isExternal>
      <Icon as={icon} w={6} h={6} mr="8" color="gray.500" />
    </ChakraLink>
  )
}

export default SocialLinks
