
import React from 'react'
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import PatientList from './pages/patientList'
import CreateProfile from './pages/CreateProfile'
import LogIn from './components/LogIn.jsx'
import Home from './pages/Home'
import BasicCheckList from './components/BasicCheckList'
import EditRow from './components/EditRow'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/createProfile/:id"} element={<CreateProfile />}/>
      <Route path={"/patientList"} element={<PatientList />}/>
      <Route path={"/login"} element={<LogIn />}/>
      <Route path={"/edit"} element={<EditRow />}/>
      <Route path={"/basicChecklist"} element={<BasicCheckList />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App