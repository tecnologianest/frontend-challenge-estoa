import HomePage from '../page/home'
import { Route, Routes } from 'react-router-dom'

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)

export default RoutesMain
