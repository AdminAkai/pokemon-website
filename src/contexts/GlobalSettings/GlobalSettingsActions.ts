import {
  ColorModes,
  GlobalSettingsActions,
  GlobalSettingsActionType,
} from './globalSettingsTypes'

export const changeColorModeAction = (
  payload: ColorModes
): GlobalSettingsActionType => ({
  type: GlobalSettingsActions.CHANGE_COLOR_MODE,
  payload,
})
