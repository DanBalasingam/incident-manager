import { Routes, Route } from 'react-router'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Incidents from './pages/Incidents'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="incidents" element={<Incidents />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
