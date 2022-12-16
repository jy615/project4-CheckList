import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { instance } from "../constant";
function EditRow({
  contact,
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
}) {
  const [date, setDate] = useState();
  const [times, setTimes] = useState();
  const [procedere, setProcedere] = useState();

  // const handleUpdateData = async (e, id) => {
  //   // e.preventDefault();
  //   await instance
  //     .put(`/patient/update/${id}`, {
  //       date,
  //       times,
  //       procedere,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };


  const handleUpdateData = async (id) => {
    await instance
      .put(`/patient/update/${id}`,{
        date,
        times,
        procedere,
      })
      .then((re) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <tr>
      <td className="px-6 py-4 text-sm text-gray-500">{contact.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_name}
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{contact.patient_ic}</div>
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
          selected={date}
          name="patient_date"
          onChange={(date) => setDate(date)}
        />
      </td>
      <td>
        <select
          id="time"
          className="px-5 py-3 text-m text-black-500"
          name="patient_time"
          onChange={(e) => setTimes(e.target.value)}
        >
          <option defaultValue>Choose Time</option>
          <option value="8:00 am">8:00 am</option>
          <option value="9:00 am">9:00 am</option>
          <option value="10:00 am">10:00 am</option>
          <option value="11:00 am">11:00 am</option>
          <option value="12:00 pm">12:00 pm</option>
          <option value="1:00 pm">1:00 pm</option>
          <option value="2:00 pm">2:00 pm</option>
          <option value="3:00 pm">3:00 pm</option>
          <option value="4:00 pm">4:00 pm</option>
        </select>
      </td>
      <td>
        <select
          id="procedure"
          className="px-5 py-3 text-m text-black-500"
          name="procedure_name"
          onChange={(e) => setProcedere(e.target.value)}
        >
          <option defaultValue>Choose Procedure</option>
          <option value="Treadmil Stress Test">Treadmil Stress Test</option>
          <option value="Exercise Stress Test">Exercise Stress Test</option>
          <option value="Dobutamine Stress Test">Dobutamine Stress Test</option>
        </select>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {contact.patient_status}
      </td>
      <td className="px-6 py-4">
        <button
          type="submit"
          className="px-4 py-1 text-sm text-green-600 bg-green-200 rounded-full"
          onClick={() => {
            handleUpdateData(contact.id);
          }}
        >
          Save
        </button>
      </td>
    </tr>
  );
}

export default EditRow;
