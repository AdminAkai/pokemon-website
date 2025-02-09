import AppRouter from './AppRoutes'
import GlobalSettingsContext, {
  initialGlobalSettings,
} from './contexts/GlobalSettingsContext'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <GlobalSettingsContext.Provider value={initialGlobalSettings}>
        <AppRouter />
      </GlobalSettingsContext.Provider>
    </BrowserRouter>
  )
}

export default App
