import AppRouter from './AppRoutes'
import { BrowserRouter } from 'react-router'
import GlobalSettingsProvider from './contexts/GlobalSettings'

function App() {
  return (
    <BrowserRouter>
      <GlobalSettingsProvider>
        <AppRouter />
      </GlobalSettingsProvider>
    </BrowserRouter>
  )
}

export default App
