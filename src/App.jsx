
import Patient from './Patient'
import About from './About'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Billing from './Billing'
import Contactus from './Contactus'
import Login from './Login'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contactus' element={<Contactus/>}/>
      <Route path='Patient' element={<Patient/>}/>
      <Route path='Billing' element={<Billing/>}/>
      <Route path='Login' element={<Login/>}/>


     </Routes>
  
    </>
  )
}

export default App
