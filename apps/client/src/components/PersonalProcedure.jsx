import React from 'react'
import {useState} from 'react'
function PersonalProcedure({contact, handleShowchecklist}) {

    const [isFormSubmmited, setIsFormSubmitted] = useState(false)

  return (
     
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
  )
}

export default PersonalProcedure