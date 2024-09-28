
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/adminLogin' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
