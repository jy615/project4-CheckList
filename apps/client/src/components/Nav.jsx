import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav({isAuth, setShowModal, setIsAuth, setIsSignUp}) {
  const navigate = useNavigate();
    const handleHomePage = () => {
        navigate("/")
    }
  
  const handleLogIn = () => {
    console.log("click")
    setIsSignUp(true)
    navigate("/login")
  }

  const handleLogout = (e) => {
    console.log("logout")
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    navigate("/")
  }
  return (

    <div className='flex justify-between bg-transparent bg-opacity-60 bg-fixed p-4'>
    <div className='font-sans font-medium text-4xl text-gray-600 hover: cursor-pointer'onClick={handleHomePage}>CheckList</div>
   { isAuth ? 
   <>
   <button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'onClick={(e)=> handleLogout(e)}> Log Out</button>
  </>
   :
   <>
   <button className='bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleLogIn}> Log In</button>
   </>
   }
    
    </div>
    

  )
}

export default Nav