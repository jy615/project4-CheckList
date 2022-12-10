import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav({isAuth, setShowModal, setIsSignUp}) {
  const navigate = useNavigate();
    const handleHomePage = () => {
        navigate("/")
    }
  
  const handleClick = () => {
    console.log("click")
    setShowModal(true)
    setIsSignUp(true)
  }

  
  return (

    <div className='flex justify-between bg-transparent bg-opacity-60 bg-fixed p-4'>
    <div className='font-sans font-medium text-4xl text-gray-600 hover: cursor-pointer'onClick={handleHomePage}>CheckList</div>
   { isAuth ? 
   <>
   <div className=' hover:text-green text-blue font-bold py-2 px-4'>Hi User </div>
   <button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'> Log Out</button>
  </>
   :
   <>
   <button className='bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleClick}> Log In</button>
   </>
   }
    
    </div>
    

  )
}

export default Nav