// Initial Types
export enum ColorModes {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum GlobalSettingsActions {
  CHANGE_COLOR_MODE = 'change_color_mode',
}

export type GlobalSettings = {
  colorMode: ColorModes
}

// Action Types
export type GlobalSettingsActionPayload = ColorModes | string

export type GlobalSettingsActionType = {
  type: GlobalSettingsActions
  payload?: GlobalSettingsActionPayload
}
