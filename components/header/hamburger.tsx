import { Box } from '@chakra-ui/react'

interface HamburgerProps {
  handleToggle: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ handleToggle }) => {
  return (
    <Box
      display={['block', 'block', 'block', 'none', 'none']}
      onClick={handleToggle}
    >
      <svg
        fill="#333"
        width="22px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </Box>
  )
}

export default Hamburger
