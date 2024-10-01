
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Employees from './components/pages/Employees'
import Category from './components/pages/Category'
import Profile from './components/pages/Profile'

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/adminLogin' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}>

    <Route path='' element={<Home/>}></Route>
    <Route path='/dashboard/employee' element={<Employees/>}></Route>
    <Route path='/dashboard/category' element={<Category/>}></Route>
    <Route path='/dashboard/profile' element={<Profile/>}></Route>
    
    
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
