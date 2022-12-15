
import { ActiveLink } from "./ActiveLink"

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav>
      {menuItems.map(item => (
        <ActiveLink key={item.href} text={item.text} href={item.href}/>
      ))}
   
    </nav>
  )
}
