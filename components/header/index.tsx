import React from 'react'
import { Divider, Flex, Box, MenuItem, PseudoBox } from '@chakra-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { navLinks } from './constants'
import Hamburger from './hamburger'
import Logo from './logo'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => {
  const router = useRouter()

  return (
    <Link href={link}>
      <PseudoBox
        as="a"
        display="block"
        fontWeight="normal"
        boxSizing="border-box"
        fontSize="xl"
        textTransform="uppercase"
        color="black"
        onClick={onClick || undefined}
        transition="border .2s"
        mt={['6', '6', '6', '0', '0']}
        mr={'36px'}
        borderBottomWidth={[
          '0',
          '0',
          '0',
          router.pathname === link ? '2px' : 'none',
          router.pathname === link ? '2px' : 'none'
        ]}
        borderBottomColor={router.pathname === link ? 'black' : 'none'}
        _hover={{ cursor: 'pointer' }}
      >
        {children}
      </PseudoBox>
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
      padding="1.5rem"
      paddingX={['14', '14', '14', '14', '10%']}
      paddingY="8"
      backgroundColor="white"
      color="white"
      zIndex={999}
      {...props}
    >
      <Logo />

      <Hamburger handleToggle={handleToggle} />

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        alignItems="center"
        width={['full', 'full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', '0', '0', '0']}
      >
        <Divider mt="8" />
        {navLinks.map(item => (
          <MenuItems onClick={handleToggle} link={item.link}>
            {item.label}
          </MenuItems>
        ))}
      </Box>
    </Flex>
  )
}

export default Header
