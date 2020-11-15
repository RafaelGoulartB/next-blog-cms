import { IconType } from "react-icons/lib"
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"

export interface navLinksProps {
  label: string
  link: string
}
export interface socialLinksProps {
  icon: IconType
  link: string
}

export const navLinks: navLinksProps[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Articles',
    link: '/articles'
  },
]
export const socialLinks: socialLinksProps[] = [
  {
    icon: AiFillInstagram,
    link: 'https://instagram.com'
  },
  {
    icon: AiOutlineTwitter,
    link: 'https://twitter.com'
  },
  {
    icon: AiFillLinkedin,
    link: 'https://likedin.com'
  },
]