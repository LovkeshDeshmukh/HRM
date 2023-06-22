import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Sidebar from './Pages/Sidebar'
import Sidebar1 from './Pages/Sidebar1'
import Addemp from './Pages/Addemp'
import Employedetails from './Pages/Employedetails'
import Addtraines from './Pages/Addtraines'
import Trainesdetails from './Pages/Trainesdetails'
import Addproject from './Pages/Addproject'
import Projects from './Pages/Projects'
import Empattendence from './Pages/Empattendence'
import Eattdetails from './Pages/Eattdetails'
import Addempbank from './Pages/Addempbank'
import Empbankdet from './Pages/Empbankdet'
import Addclient from './Pages/Addclient'
import Clientdetails from './Pages/Clientdetails'
import Salaryreport from './Pages/Salaryreport'
import Signup from './Pages/Signup'
import Trainattendence from './Pages/Trainattendence'
import TraineePro from './Pages/TraineePro'
import Addsyllabus from './Pages/Addsyllabus'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Header' element={<Header/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Sidebar' element={<Sidebar/>}></Route>
        <Route path='/Sidebar1' element={<Sidebar1/>}></Route>
        <Route path='/Addemp' element={<Addemp/>}></Route>
        <Route path='/Employedetails' element={<Employedetails/>}></Route>
        <Route path='/Addtraines' element={<Addtraines/>}></Route>
        <Route path='/Trainesdetails' element={<Trainesdetails/>}></Route>
        <Route path='/Addproject' element={<Addproject/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Empattendence' element={<Empattendence/>}></Route>
        <Route path='/Eattdetails' element={<Eattdetails/>}></Route>
        <Route path='/Addempbank' element={<Addempbank/>}></Route>
        <Route path='/Empbankdet' element={<Empbankdet/>}></Route>
        <Route path='/Addclient' element={<Addclient/>}></Route>
        <Route path='/Clientdetails' element={<Clientdetails/>}></Route>
        <Route path='/Salaryreport' element={<Salaryreport/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Trainattendence' element={<Trainattendence/>}></Route>
        <Route path='/TraineePro' element={<TraineePro/>}></Route>
        <Route path='/Addsyllabus' element={<Addsyllabus/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App