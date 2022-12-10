import React from 'react'
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import data from "./data.json"

function PatientList({isAuth}) {
    const navigate = useNavigate();
    const [data, setData] = useState(data)
    const [isTestCanceled, setIsTestCanceled] = useState(false)
    const handleRow = (data) => {
        console.log("clicked")
        navigate("/procedure")
    }
    const handleCancelTest = () => {
        console.log("test cancelled")
    }
    const handleConvertTest = () => {
        console.log("test converted")
    }
  return (
    <>
     <div>
       <Nav isAuth={isAuth} />
    </div>
    <div className="flex justify-evenly flex-row text-grey-500 text-4xl font-bold">   
    <p>Today's Appointment</p>
    </div>
   
    <div className="container flex justify-evenly mx-auto">
    <div className="flex flex-col">
        <div className="w-full">
            <div className="border-b border-gray-200 shadow">
                <table>
                    <thead className="bg-gray-50">
                        <tr>
                        <th className="px-6 py-2 text-xs text-gray-500" >
                                No.
                            </th>
                        <th className="px-6 py-2 text-xs text-gray-500" >
                                Name
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500" >
                                NRIC/ FIN
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
                                Procedure Status
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((data)=>(
                             <tr className="whitespace-nowrap hover:bg-blue-50 cursor-pointer" onClick={handleRow}>
                             <td className="px-6 py-4 text-sm text-gray-500">
                                 {data.id}
                             </td>
                             <td className="px-6 py-4 text-sm text-gray-500">
                                  {data.name}
                             </td>
                             <td className="px-6 py-4">
                                 <div className="text-sm text-gray-500">
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
                             
                         </tr>
                        ))}
                       
                        <tr className="whitespace-nowrap hover:bg-blue-50 cursor-pointer" onClick={handleRow}>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            Kassandra Haley
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                S1234567F
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                4/12/2022
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                10:00a.m
                                  </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            Exercise Stress Echo
                            </td>
                           
                        </tr>
                        <tr className="whitespace-nowrap hover:bg-blue-50 cursor-pointer" onClick={handleRow}>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            Rowan Nikolaus
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                S8765432F
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                4/12/2022
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                 10:30a.m
                                  </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                Exercise Stress Echo
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                Reschedule
                            </td>
                            {isTestCanceled ?
                          <>
                            <td className="px-6 py-4">
                                <button className="px-4 py-1 text-sm text-red-600 bg-red-200 rounded-full" onClick={handleCancelTest}>Cancel Test</button>
                            </td>
                          </>:
                          <>
                          <td className="px-6 py-4">
                              <button className="px-4 py-1 text-sm text-red-600 bg-red-200 rounded-full" onClick={handleConvertTest}>Reschedule</button>
                          </td>
                        </>
                          }
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

   </>
  )
}

export default PatientList