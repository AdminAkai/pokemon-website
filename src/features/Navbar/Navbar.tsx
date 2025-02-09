import { FC, useContext } from 'react'
import styles from './navbarStyles.module.css'
import { navbarOptions } from './NavbarOption/navbarOptionUtils'
import NavbarOption from './NavbarOption'
import ColorSetting from './ColorSetting'
import { GlobalSettingsContext } from 'src/contexts/GlobalSettings'

const Navbar: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)

  return (
    <nav
      className={styles.navbar}
      data-colormode={colorMode}
      aria-label='navigation bar'
    >
      {navbarOptions.map((option) => (
        <NavbarOption {...option} key={option.name} />
      ))}
      <ColorSetting />
    </nav>
  )
}

export default Navbar
