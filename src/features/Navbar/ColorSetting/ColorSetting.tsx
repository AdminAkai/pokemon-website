import { FC, useContext } from 'react'
import SunIcon from 'src/assets/sun_icon.svg?react'
import MoonIcon from 'src/assets/moon_icon.svg?react'
import styles from './colorSettingStyles.module.css'
import {
  changeColorModeAction,
  ColorModes,
  GlobalSettingsContext,
} from 'src/contexts/GlobalSettings'
import { GlobalSettingsDispatch } from 'src/contexts/GlobalSettings'

const ColorSetting: FC = () => {
  const { colorMode } = useContext(GlobalSettingsContext)
  const dispatch = useContext(GlobalSettingsDispatch)
  const CurrentColor = colorMode === ColorModes.DARK ? MoonIcon : SunIcon

  const changeColorMode = (): void => {
    if (colorMode === ColorModes.DARK) {
      dispatch(changeColorModeAction(ColorModes.LIGHT))
    } else {
      dispatch(changeColorModeAction(ColorModes.DARK))
    }
  }

  return (
    <div className={styles['color-setting']} onClick={changeColorMode}>
      <CurrentColor width={50} height={50} />
      <h3 className={styles['color-setting-header']}>{colorMode}</h3>
    </div>
  )
}

export default ColorSetting
