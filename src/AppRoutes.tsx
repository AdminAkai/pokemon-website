import { FC } from 'react'
import { Route, Routes } from 'react-router'
import Main from './features/Main'
import Pokemon from './features/Pokemon'

const AppRoutes: FC = () => (
  <Routes>
    <Route path='/' element={<Main />}>
      <Route index element={<Pokemon />} />
    </Route>
  </Routes>
)

export default AppRoutes
