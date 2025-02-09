import { FC, useContext } from 'react'
import { NavbarOptionType } from './navbarOptionUtils'
import GlobalSettingsContext from 'src/contexts/GlobalSettingsContext'
import styles from './navbarOptionStyles.module.css'
import { NavLink } from 'react-router'

const NavbarOption: FC<NavbarOptionType> = ({
  name,
  NavbarIcon,
  to,
  style,
}) => {
  const { colorMode } = useContext(GlobalSettingsContext)

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${styles['nav-option']} ${styles[style]} ${
              styles[`${style}-active`]
            }`
          : `${styles['nav-option']} ${styles[style]}`
      }
      data-colormode={colorMode}
      aria-label={`${name} navigation option`}
    >
      <NavbarIcon height={50} width={50} />
      <h3>{name}</h3>
    </NavLink>
  )
}

export default NavbarOption
