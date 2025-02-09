import { ColorModes, GlobalSettings } from './globalSettingsTypes'

export const ChangeColorModeReducer = (
  state: GlobalSettings,
  colorMode: ColorModes
): GlobalSettings => ({ ...state, colorMode })
