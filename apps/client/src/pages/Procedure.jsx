import React from "react";
import BasicCheckList from "../components/BasicCheckList";
import Nav from "../components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockdata from "./data.json";
import PersonalProcedure from "../components/PersonalProcedure";

function Procedure({ isAuth }) {
  const [showCheckList, setShowCheckList] = useState(false);
  const [isFormSubmmited, setIsFormSubmitted] = useState(false);
  const [allmockdata, setAllMockData] = useState(mockdata);
  const navigate = useNavigate();

  const handleShowchecklist = () => {
    setShowCheckList(true);
  };

  return (
    <>
      <div>
        <Nav isAuth={isAuth} />
      </div>

      <div className="container flex justify-evenly mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Date</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Time</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Procedure
                    </th>

                    <th className="px-6 py-2 text-xs text-gray-500">
                      Checklist
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Procedure Status
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showCheckList && (
        <BasicCheckList
          setShowCheckList={setShowCheckList}
          showCheckList={showCheckList}
        />
      )}
    </>
  );
}

export default Procedure;
