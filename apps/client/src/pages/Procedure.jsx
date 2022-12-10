import React from 'react'
import BasicCheckList from '../components/BasicCheckList'
import Nav from '../components/Nav'
import {useState} from 'react'
import TEECheckList from '../components/TEECheckList'
import { useNavigate } from "react-router-dom";

function Procedure({isAuth}) {
    const [showCheckList, setShowCheckList] = useState(false)
    const [isFormSubmmited, setIsFormSubmitted] = useState(false)
    const [isTee, setIsTee] = useState(false)
    const navigate = useNavigate();
    // const data = navigate.location.state.data
    
    const handleShowchecklist = () => {
        setShowCheckList(true)
      }
      const handleShowTEElist = () => {
        setIsTee(true)
      }
    
  return (
<>
<div>
       <Nav isAuth={isAuth} />
       </div>
     
       <div className="container flex justify-evenly mx-auto">
    <div className="flex flex-col">
        <div className="w-full">
            <div className="border-b border-gray-200 shadow">
                <table>
                    <thead className="bg-gray-50">
                        <tr>
                        <th className="px-6 py-2 text-xs text-gray-500">
                                Name
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Date
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Time
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Procedure
                            </th>
                            
                          
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Checklist
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                            Procedure Status
                            </th>
                            {!isFormSubmmited &&
                          <>
                         
                          </>
}
                        </tr>
                    </thead>
                   
                    <tbody className="bg-white">
                        <tr className="whitespace-nowrap">
                            <td className="px-6 py-4 text-sm text-gray-500">
                                Lee Jia Yi
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    4/12/2022
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                 9.00am
                                  </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            Treadmill Stress Test
                            </td>
                          {!isFormSubmmited ? 
                          <>
                           <td className="px-6 py-4">
                                <button className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full" onClick={handleShowchecklist}>Create</button>
                            </td>
                            <td className="px-6 py-4">   
                            </td>
                            
                            </>
                            :
                            <>
                            <td className="px-6 py-4">
                                <button className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full" onClick={handleShowchecklist}>Update</button>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            Proceed
                            </td> 
                            </> }
                           
                         
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        </div>
                        {showCheckList && <BasicCheckList setShowCheckList={setShowCheckList} showCheckList={showCheckList}/> }
                        {isTee && <TEECheckList setIsTee={setIsTee} isTee={isTee}/>}
                        </>
  )
}

export default Procedure