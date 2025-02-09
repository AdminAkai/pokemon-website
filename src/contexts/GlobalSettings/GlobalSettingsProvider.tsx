import { FC, PropsWithChildren, useReducer } from 'react'
import { GlobalSettings, GlobalSettingsActions } from './globalSettingsTypes'
import {
  globalSettingsInitial,
  GlobalSettingsContext,
  GlobalSettingsDispatch,
} from './GlobalSettingsContext'
import { ChangeColorModeReducer } from './GlobalSettingsReducers'

const globalSettingsReducer = (state: GlobalSettings, action: any) => {
  if (action.type === GlobalSettingsActions.CHANGE_COLOR_MODE) {
    return ChangeColorModeReducer(state, action.payload)
  }
  return state
}

const GlobalSettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [globalSettings, dispatch] = useReducer(
    globalSettingsReducer,
    globalSettingsInitial
  )

  return (
    <GlobalSettingsContext.Provider value={globalSettings}>
      <GlobalSettingsDispatch.Provider value={dispatch}>
        {children}
      </GlobalSettingsDispatch.Provider>
    </GlobalSettingsContext.Provider>
  )
}

export default GlobalSettingsProvider
