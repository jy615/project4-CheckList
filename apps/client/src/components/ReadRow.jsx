import React from "react";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ReadRow({ contacts, contact, handleEditClick, handleShowchecklist }) {
const navigate = useNavigate()
const handleDelete = (id) => {
  const index = contacts.map(function(e){
    return e.id
  }).indexOf(id);
  contacts.splice(index, 1)
  navigate("/patientList")
}
  const handleRow = () => {
    console.log("clicked");
    navigate("/procedure");
  };
  return (
    <tr
      className="whitespace-nowrap hover:bg-blue-50 cursor-pointer"
    //   onClick={handleRow}
    >
      <td className="px-6 py-4 text-sm text-gray-500">{contact.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.name}</td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.ic}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.date}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.time}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.procedure}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.procedureStatus}
      </td>
      {contact.procedureStatus === "" ?
       <td className="px-6 py-4">

       <button
       type= "button"
         className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
         onClick={handleShowchecklist}
       >
         Start
       </button>
     </td> :
     
        <td className="px-6 py-4">

        <button
        type= "button"
          className="px-4 py-1 text-sm text-yellow-600 bg-yellow-200 rounded-full"
          onClick={(event)=> handleEditClick(event, contact)}
        >
          Update
        </button>
      </td>
     }
       <td className="px-6 py-4">

<button
type= "button"
  className="px-4 py-1 text-sm text-black-600 bg-black-200 rounded-full"
  onClick={()=> handleDelete(contact.id)}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

</button>
</td> 
      
      
      
    </tr>
  );
}

export default ReadRow;
