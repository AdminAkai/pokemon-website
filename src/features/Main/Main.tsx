import { FC, useContext } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
import GlobalSettingsContext from '../../contexts/GlobalSettingsContext'
import styles from './mainStyles.module.css'

const Main: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)
  return (
    <div className={styles.main} data-colorMode={colorMode}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main
