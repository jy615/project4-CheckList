import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";
import ReadRow from "../components/ReadRow";
import EditRow from "../components/EditRow";

function PatientList({ isAuth }) {
  const navigate = useNavigate();
  const [patientdata, setPatientData] = useState(data);
  const [isTestChanged, setIsTestChanged] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [editData, setEditData] = useState(data);
  const [editFormData, setEditFormData] = useState({
    date: "",
    time: "",
    procedere: "",
  });
  const handleEditFormData = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editData };
    newFormData[fieldName] = fieldValue;
    setEditFormData[newFormData];
  };
  const handleUpdate = (event, data) => {
    event.preventDefault();
    setEditData(data);
    console.log(data.date);
    const dataValue = {
      date: data.date,
      time: data.time,
      procedere: data.procedure,
    };
    setEditFormData(dataValue);
  };
  const handleCancelTest = () => {
    console.log("test cancelled");
  };

  return (
    <>
      <div>
        <Nav isAuth={isAuth} />
      </div>
      <div className="flex justify-evenly flex-row text-grey-500 text-4xl font-bold">
        <p>Today's Appointment</p>
      </div>

      <form>
        <div className="container flex justify-evenly mx-auto">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table>
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">No.</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        NRIC/ FIN
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">Date</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Time</th>
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
                    {patientdata.map((data) => (
                      <>
                        {editData.id === data.id ? (
                          <EditRow
                            data={data}
                            editFormData={editFormData}
                            handleEditFormData={handleEditFormData}
                          />
                        ) : (
                          <ReadRow data={data} handleUpdate={handleUpdate} />
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PatientList;
