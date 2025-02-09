import { Context, createContext } from 'react'

enum ColorModes {
  DARK = 'dark',
  LIGHT = 'light',
}

type GlobalSettings = {
  colorMode: ColorModes
}

export const initialGlobalSettings: GlobalSettings = {
  colorMode: ColorModes.LIGHT,
}

const GlobalSettingsContext: Context<GlobalSettings> =
  createContext<GlobalSettings>(initialGlobalSettings)

export default GlobalSettingsContext
