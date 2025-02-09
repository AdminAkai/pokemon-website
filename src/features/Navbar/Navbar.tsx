import { FC, useContext } from 'react'
import GlobalSettingsContext from '../../contexts/GlobalSettingsContext'
import styles from './navbarStyles.module.css'

const Navbar: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)
  return (
    <div className={styles.navbar} data-colorMode={colorMode}>
      test
    </div>
  )
}

export default Navbar
