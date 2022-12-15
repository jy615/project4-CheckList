
import React from 'react'
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import PatientList from './pages/patientList'
import CreateProfile from './pages/CreateProfile'
import LogIn from './components/LogIn.jsx'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/createProfile/:id"} element={<CreateProfile />}/>
      <Route path={"/patientList"} element={<PatientList />}/>
      <Route path={"/login"} element={<LogIn />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App