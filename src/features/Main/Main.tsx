import { FC, useContext } from 'react'
import { Outlet } from 'react-router'
import Navbar from 'src/features/Navbar'
import GlobalSettingsContext from 'src/contexts/GlobalSettingsContext'
import styles from './mainStyles.module.css'

const Main: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)
  return (
    <div className={styles.main} data-colormode={colorMode}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main
