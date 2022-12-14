import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../constant";
function ReadRow({
  name,
  editFormData,
  contacts,
  contact,
  handleEditClick,
  handleShowchecklist,
  handleResult
}) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await instance
      .delete(`/patient/delete/${id}`)
      .then((re) => {
        const index = contacts
          .map(function (e) {
            return e.id;
          })
          .indexOf(id);
        contacts.splice(index, 1);
        navigate("/patientList");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRow = () => {
    console.log("clicked");
    navigate("/procedure");
  };
  return (
    <>
    <tr
      className="whitespace-nowrap hover:bg-blue-50 cursor-pointer"
      //   onClick={handleRow}
    >
      <td className="px-6 py-4 text-sm text-gray-500">{contact.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_name}
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.patient_ic}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.patient_date}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_time}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_procedure}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_status}
      </td>

      <td className="px-6 py-4">
        <button
          type="button"
          className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
          onClick={()=>{
            handleResult();
            localStorage.setItem('id',contact.id);
          }}
        >
          Start
        </button>
      </td>

      {/* <td className="px-6 py-4">

        <button
        type= "button"
          className="px-4 py-1 text-sm text-green-600 bg-green-200 rounded-full"
          onClick={(event)=> handleEditClick(event, contact)}
        >
          Completed
        </button>
      </td> */}

      <td className="px-6 py-4">
        <button
          type="button"
          className="px-4 py-1 text-sm text-black-600 bg-black-200 rounded-full"
          onClick={handleShowchecklist}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="px-4 py-1 text-sm text-black-600 bg-black-200 rounded-full"
          onClick={() => handleDelete(contact.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>

      <td></td>
    </tr>
  </>
  );
}

export default ReadRow;
