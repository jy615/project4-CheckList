
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import PatientList from './pages/patientList'
import CreateProfile from './pages/CreateProfile'
import Procedure from './pages/Procedure'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/createProfile"} element={<CreateProfile />}/>
      <Route path={"/patientList"} element={<PatientList />}/>
      <Route path={"/procedure"} element={<Procedure />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App