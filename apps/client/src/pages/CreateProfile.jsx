import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate} from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';



function CreateProfile({isAuth}) {
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(false)
  const [profileData, setProfileData] = useState([])
  const navigate = useNavigate();
  // useEffect(()=> {
  //   getProfileData();
  // }, [])

  let _csrfToken = null;
  
  const handleClick = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    
    let formData = new FormData(e.target);
    let logInData = Object.fromEntries(formData.entries());
    console.log(logInData)
    if (_csrfToken === null) {
    await fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json" 
    },
    body: JSON.stringify(logInData)})
    
    .then((response)=> {
      return response.json();
    setError(false) 
    }).catch((error) => {
      setError(true)
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
              }})
    e.preventDefault();
    if (error === false) {
      toast.success("Profile Created Successfully",{
      position: toast.POSITION.TOP_CENTER,
      autoClose: true,
      transition: Zoom
    })} else {
      toast.warn("Please Fill Up All Details",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        transition: Zoom
      })}
    // setProfileData((logInData))
     }}
    
    //navigate("/patientList")
        
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div
          className="py-12 bg-transparent transition duration-150 ease-in-out z-10 absolute top-10 right-0 bottom-10 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
        <div className="justify-center max-width:360px flex  text-gray-600 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h1 className="justify-center text-4xl text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            Create Profile
          </h1>
        </div>

        <label
          htmlFor="firstname"
          className="text-gray-800 text-xl font-bold leading-tight tracking-normal"
        >
          Name
        </label>
        <input
          id="firstname"
          type="text"
          required={true}
          name="UserFirstName"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="James Bond"
        />
       
        <label
          htmlFor="dateofbirth"
          className="text-gray-800 text-xl font-bold leading-tight tracking-normal"
        >
          Date Of Birth
        </label>
        
        <DatePicker 
        filterDate={d => {
          return new Date() > d;
        }}
        placeholderText= "Date of Birth"
        showMonthDropdown
        showYearDropdown
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        dateFormat="dd/MM/yyyy"
        selected={date} 
        name="UserDOB"
        onChange={(date) => setDate(date)} />
      
        <label
          htmlFor="gender"
          className="text-gray-800 text-xl font-bold leading-tight tracking-normal"
        >
          Specialty
        </label>
        <div className="p-4 flex">
          <div className="flex items-center mr-4 mb-2">
            <input
              type="radio"
              id="A3-yes"
              name="UserSpecialty"
              value="doctor"
              required="required"
              className="opacity-0 absolute h-8 w-8"
            />
            <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
              <svg
                className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#1F73F1"
                    fillRule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <label htmlFor="A3-yes" className="select-none">
              Doctor
            </label>
          </div>

          <div className="flex items-center mr-4 mb-2">
            <input
              type="radio"
              id="A3-yes"
              name="UserSpecialty"
              value="medtech"
              required="required"
              className="opacity-0 absolute h-8 w-8"
            />
            <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-200">
              <svg
                className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#1F73F1"
                    fillRule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <label htmlFor="A3-yes" className="select-none">
              Medical Technologist
            </label>
          </div>

          <div className="flex items-center mr-4 mb-2">
            <input
              type="radio"
              id="A3-yes"
              name="UserSpecialty"
              value="nurse"
              required="required"
              className="opacity-0 absolute h-8 w-8"
            />
            <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
              <svg
                className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#1F73F1"
                    fillRule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <label htmlFor="A3-yes" className="select-none">
             Nurse
            </label>
          </div>
        </div>
       
        <div className="flex items-center justify-start w-full">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={handleClick}
                >
                  Cancel
                </button>
                <ToastContainer /> 
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProfile;
