import React from 'react'
import { Divider, Flex, MenuItem, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Hamburger from './hamburger'
import Logo from './logo'

import { navLinks } from './constants'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => {
  const router = useRouter()

  return (
    <Link href={link}>
      <Box
        as="a"
        fontWeight={router.pathname === link ? 'bold' : 'normal'}
        fontSize="md"
        color="black"
        onClick={onClick || undefined}
        mt={{ sm: '6', lg: '0' }}
        mr="9"
        _hover={{ cursor: 'pointer' }}
      >
        {children}
      </Box>
    </Link>
  )
}

const Header: React.FC = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="relative"
      width="100vw"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      paddingX={{ base: 10, sm: 10, lg: 20 }}
      paddingY="10"
      backgroundColor="white"
      zIndex={999}
      {...props}
    >
      <Logo />

      <Hamburger handleToggle={handleToggle} />

      <Box
        display={{
          sm: show ? 'flex' : 'none',
          lg: 'flex'
        }}
        flexDir={{ sm: 'column', lg: 'row' }}
        alignItems="center"
        width={{ sm: 'full', lg: 'auto' }}
        marginTop={{ sm: '20px', lg: '0' }}
      >
        <Divider mt="8" />
        {navLinks.map(item => (
          <MenuItems key={item.label} onClick={handleToggle} link={item.link}>
            {item.label}
          </MenuItems>
        ))}
      </Box>
    </Flex>
  )
}

export default Header
