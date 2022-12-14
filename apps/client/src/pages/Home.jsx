import React from 'react'
import Nav from '../components/Nav'
import Modal from '../components/Modal'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  //const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)

  
  const handleClick = () => {
    console.log("click")
    setShowModal(true)
  }
  return (
    <div>
   <Nav isAuth={isAuth} setIsAuth={setIsAuth} setShowModal={setShowModal} isSignUp ={isSignUp} setIsSignUp={setIsSignUp} />
    <h1 className="text-7xl	font-extrabold flex items-center justify-center h-80">Paperless Checklist</h1>
      {!isAuth && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={handleClick}>Create Account</button> }
      {showModal && <Modal setShowModal={setShowModal} isAuth={isAuth} setIsAuth={setIsAuth} isSignUp ={isSignUp} setIsSignUp={setIsSignUp}/>}
    
    </div>
 
  )
}

export default Home