import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { api } from "../constant";

function LogIn({ setShowModal, isAuth, setIsAuth, isSignUp, setIsSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  console.log(email, password, confirmpassword);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  const handleLogInProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/auth/login`, {
        email,
        password,
      });
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/patientList");
        setIsAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // setProfileData((logInData))

  return (
    <div>
      <form onSubmit={handleLogInProfile} method="post">
        <div
          className="py-12 bg-transparent transition duration-150 ease-in-out z-10 absolute top-10 right-0 bottom-10 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <div className="justify-center w-full flex  text-gray-600 mb-1">
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h1 className="justify-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                  Log In
                </h1>
              </div>

              <input
                id="email"
                type="email"
                required={true}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Email"
              />

              <input
                id="password"
                type="password"
                required={true}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Password"
              />

              <div className=" flex items-center justify-start w-full">
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={handleLogInProfile}
                >
                  Log In
                </button>
              </div>

              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={handleClick}
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
