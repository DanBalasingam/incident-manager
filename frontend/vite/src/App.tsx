import { Routes, Route } from 'react-router'
import Dashboard from './pages/dashboard'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={ }>
        <Route index element={<Dashboard />} />
        <Route element={ } />
      </Route>
    </Routes>
  )
}

export default App
