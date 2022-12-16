import React from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mockdata from "./data.json";
import ReadRow from "../components/ReadRow";
import EditRow from "../components/EditRow";
import BasicCheckList from "../components/BasicCheckList";
import axios from "axios";
import { instance } from "../constant";

function PatientList({ isAuth, contact }) {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState();
  const [isUpdate, setIsUpdate] = useState(contact);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [editContactId, setEditContactId] = useState();
  const [showCheckList, setShowCheckList] = useState(false);
  const [result, setResult] = useState(false);
  const [name, setName] = useState();

  const handleShowchecklist = () => {
    setShowCheckList(true);
    console.log("clicked!");
  };
  const handleResult = () => {
    setResult(true);
    console.log("clicked!");
  };
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await instance.get("/patient/get");
      console.log(res);
      setContacts(res.data);
      setIsAuth(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const deleteProfile = async (id) => {
  //   try {
  //     await instance.delete(`/patient/delete/${id}`);
  //     getProfile();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    ic: "",
    date: "",
    time: "",
    procedere: "",
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    console.log(newFormData);
    newFormData[fieldName] = fieldValue;
    setEditFormData[newFormData];
  };
  const handleEditClick = async (e, id) => {
    let formData = new FormData(e.target);
    let logInData = Object.fromEntries(formData.entries());
    console.log(logInData);
    // e.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:5000/patient/get/3", {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(logInData),
    //   });
    // } catch (err) {
    //   console.error(err.message);
    // }

    // setEditContactId(contact.id);
    console.log(contact);
    const formValues = {
      date: contact.date,
      time: contact.time,
      procedure: contact.procedure,
    };
    setEditFormData(formValues);
  };
  const handleEditFormSubmit = (event, contact) => {
    event.preventDefault();
    const editedContact = {
      id: contact.id,
      name: contact.name,
      ic: contact.ic,
      date: editFormData.date,
      time: editFormData.time,
      procedure: editFormData.procedure,
      proceducontacttatus: contact.proceducontacttatus,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact.id === editFormData.id
    );
    newContacts[index] = editedContact;
    setContacts(newContacts);
    console.log(newContacts);
  };
  const handleCancelTest = () => {
    console.log("test cancelled");
  };

  return (
    <>
      <div>
        <Nav isAuth={isAuth} />
      </div>
      <div className="flex justify-evenly flex-row text-grey-500 text-2xl font-bold">
        <p>Hello There, Today's Appointment hello {name}</p>
      </div>
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
                    <th className="px-6 py-2 text-xs text-gray-500">Action</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Update</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {contacts &&
                    contacts.map((contact) => (
                      <>
                        {showCheckList === true ? (
                          <EditRow
                            id={contact.id}
                            contact={contact}
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleEditFormSubmit={handleEditFormSubmit}
                          />
                        ) : (
                          <>
                            <ReadRow
                              contact={contact}
                              contacts={contacts}
                              handleEditClick={handleEditClick}
                              handleShowchecklist={handleShowchecklist}
                              handleResult={handleResult}
                            />
                          </>
                        )}
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {result ? (
                <BasicCheckList
                  contact={contact}
                  contacts={contacts}
                  // setShowCheckList={setShowCheckList}
                  // showCheckList={showCheckList}
                />
              ) : (
                ""
              )}
    </>
  );
}

export default PatientList;
