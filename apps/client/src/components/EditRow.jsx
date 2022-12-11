import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditRow({ data, editFormData, handleEditFormData }) {
  const [calenderdate, setCalenderDate] = useState();
  const handleUpdatedData = (e) => {
    e.preventDefault();
  console.log("submitted")

  }
  console.log(calenderdate);
  return (
    <tr>
      <td className="px-6 py-4 text-sm text-gray-500">{data.id}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{data.name}</td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{data.ic}</div>
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
          value={calenderdate}
          required="required"
          onChange={(e) => setCalenderDate(e)}
        />
      </td>
      <td>
        <select
          id="time"
          className="px-5 py-3 text-m text-black-500"
          name="time"
        >
          <option defaultValue>Choose Time</option>
          <option value="updatedtime">8:00 am</option>
          <option value="updatedtime">9:00 am</option>
          <option value="updatedtime">10:00 am</option>
          <option value="updatedtime">11:00 am</option>
          <option value="updatedtime">12:00 pm</option>
          <option value="updatedtime">1:00 pm</option>
          <option value="updatedtime">2:00 pm</option>
          <option value="updatedtime">3:00 pm</option>
          <option value="updatedtime">4:00 pm</option>
        </select>
      </td>
      <td>
        <select
          id="procedure"
          className="px-5 py-3 text-m text-black-500"
          name="procedure"
        >
          <option defaultValue>Choose Procedure</option>
          <option value="updatedprocedure">Treadmil Stress Test</option>
          <option value="updatedprocedure">Exercise Stress Test</option>
          <option value="updatedprocedure">Dobutamine Stress Test</option>
        </select>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {data.procedureStatus}
      </td>
      <td className="px-6 py-4">
        <button
          type="submit"
          className="px-4 py-1 text-sm text-green-600 bg-green-200 rounded-full"
          onClick={handleUpdatedData}
        >
          Save
        </button>
      </td>
    </tr>
  );
}

export default EditRow;
