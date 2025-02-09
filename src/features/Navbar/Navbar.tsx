import { FC, useContext } from 'react'
import GlobalSettingsContext from 'src/contexts/GlobalSettingsContext'
import styles from './navbarStyles.module.css'
import { navbarOptions } from './NavbarOption/navbarOptionUtils'
import NavbarOption from './NavbarOption'

const Navbar: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)
  return (
    <nav
      className={styles.navbar}
      data-colormode={colorMode}
      aria-label='navigation bar'
    >
      {navbarOptions.map((option) => (
        <NavbarOption {...option} />
      ))}
    </nav>
  )
}

export default Navbar
