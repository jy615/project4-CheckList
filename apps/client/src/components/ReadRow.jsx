import React from "react";
import {useNavigate} from "react-router-dom"
function ReadRow({ data, handleUpdate }) {
const navigate = useNavigate()

  const handleRow = () => {
    console.log("clicked");
    navigate("/procedure");
  };
  return (
    <tr
      className="whitespace-nowrap hover:bg-blue-50 cursor-pointer"
    //   onClick={handleRow}
    >
      <td className="px-6 py-4 text-sm text-gray-500">{data.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{data.name}</td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{data.ic}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{data.date}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{data.time}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{data.procedure}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {data.procedureStatus}
      </td>
      {data.procedureStatus === "" ?
       <td className="px-6 py-4">

       <button
       type= "button"
         className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
         onClick={handleRow}
       >
         Start
       </button>
     </td> :
     
        <td className="px-6 py-4">

        <button
        type= "button"
          className="px-4 py-1 text-sm text-yellow-600 bg-yellow-200 rounded-full"
          onClick={(event)=> handleUpdate(event, data)}
        >
          Update
        </button>
      </td>
     }
       
      
      
      
    </tr>
  );
}

export default ReadRow;
