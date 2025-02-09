import GlobalSettingsProvider from './GlobalSettingsProvider'
import { GlobalSettings, ColorModes } from './globalSettingsTypes'
import {
  GlobalSettingsContext,
  GlobalSettingsDispatch,
} from './GlobalSettingsContext'
import {
  GlobalSettingsActions,
  GlobalSettingsActionType,
} from './globalSettingsTypes'
import { changeColorModeAction } from './GlobalSettingsActions'

// Type Exports
export type { GlobalSettings, GlobalSettingsActionType }

// Enum Exports
export { GlobalSettingsActions, ColorModes }

// Action Exports
export { changeColorModeAction }

// Context Export
export { GlobalSettingsContext, GlobalSettingsDispatch }

export default GlobalSettingsProvider
