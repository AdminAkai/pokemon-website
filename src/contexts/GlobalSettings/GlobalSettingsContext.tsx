import { Context, createContext } from 'react'
import { ColorModes, GlobalSettings } from './globalSettingsTypes'

export const globalSettingsInitial: GlobalSettings = {
  colorMode: ColorModes.LIGHT,
}

export const GlobalSettingsContext: Context<GlobalSettings> =
  createContext<GlobalSettings>(globalSettingsInitial)

export const GlobalSettingsDispatch: Context<any> = createContext(null)
