import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditRow({ contact, editFormData, handleEditFormChange, handleEditFormSubmit}) {
  const [calenderdate, setCalenderDate] = useState();
  const handleUpdatedData = (e) => {
    e.preventDefault();
  console.log("submitted")

  }
  console.log(calenderdate);
  return (

    <tr>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.name}</td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.ic}</div>
      </td>
      <td className="px-6 py-4 text-m text-black-500">
        <DatePicker
          filterDate={(d) => {
            return new Date() < d;
          }}
          placeholderText="Choose Date"
          showMonthDropdown
          showYearDropdown
          yearDropdownItemNumber={10}
          scrollableYearDropdown
          dateFormat="dd/MM/yyyy"
          selected={calenderdate}
          name="updateddate"
          value={editFormData.date}
          required="required"
          onChange={(e) => setCalenderDate(e)}
        />
      </td>
      <td>
        <select
          id="time"
          className="px-5 py-3 text-m text-black-500"
          name="time"
          onChange={handleEditFormChange}
        >
          <option defaultValue>Choose Time</option>
          <option value={editFormData.time}>8:00 am</option>
          <option value={editFormData.time}>9:00 am</option>
          <option value={editFormData.time}>10:00 am</option>
          <option value={editFormData.time}>11:00 am</option>
          <option value={editFormData.time}>12:00 pm</option>
          <option value={editFormData.time}>1:00 pm</option>
          <option value={editFormData.time}>2:00 pm</option>
          <option value={editFormData.time}>3:00 pm</option>
          <option value={editFormData.time}>4:00 pm</option>
        </select>
      </td>
      <td>
        <select
          id="procedure"
          className="px-5 py-3 text-m text-black-500"
          name="updatedprocedure"
          onChange={handleEditFormChange}
        >
          <option defaultValue>Choose Procedure</option>
          <option value={editFormData.procedure}>Treadmil Stress Test</option>
          <option value={editFormData.procedure}>Exercise Stress Test</option>
          <option value={editFormData.procedure}>Dobutamine Stress Test</option>
        </select>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.procedureStatus}
      </td>
      <td className="px-6 py-4">
        <button
          type="submit"
          className="px-4 py-1 text-sm text-green-600 bg-green-200 rounded-full"
        >
          Save
        </button>
      </td>
    </tr>
   
  );
}

export default EditRow;
