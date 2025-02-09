import { FC } from 'react'
import { Route, Routes } from 'react-router'
import Main from './features/Main'

const AppRoutes: FC = () => (
  <Routes>
    <Route path='/' element={<Main />} />
  </Routes>
)

export default AppRoutes
