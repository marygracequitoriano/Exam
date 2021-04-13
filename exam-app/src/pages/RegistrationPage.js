import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../services/axios";

function RegistrationPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    let res = await axiosInstance.post("register", data);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-purple-500 to-red-500">
          <div className="bg-blue-800 w-96 h-3/5 rounded-xl">
            <div className="flex items-center justify-center h-20 text-2xl text-gray-200 bg-blue-900 rounded-t-xl">
              <h1>Registration Form</h1>
            </div>
            <div>
              <div className="flex flex-col items-center font-sans">
                <input
                  className="w-3/4 p-2 mt-6 rounded-md"
                  {...register("firstName")}
                  placeholder="First Name"
                />
                <input
                  className="w-3/4 p-2 mt-4 rounded-md"
                  {...register("MiddleName")}
                  placeholder="Middle Name"
                />
                <input
                  className="w-3/4 p-2 mt-4 rounded-md"
                  {...register("LastName")}
                  placeholder="Last Name"
                />
                <input
                  className="w-3/4 p-2 mt-4 rounded-md"
                  {...register("Emailaddress")}
                  placeholder="Email Address"
                />
                <input
                  className="w-3/4 p-2 mt-4 rounded-md"
                  {...register("ContactNumber")}
                  placeholder="Contact Number"
                />
              </div>
              <div className="flex items-center justify-center gap-4 font-thin">
                <input
                  className="px-5 py-2 mt-10 text-base text-gray-200 bg-pink-600 rounded-sm"
                  placeholder="Register"
                  type="submit"
                />
                <Link to="/registeredUsers">
                  <button className="px-5 py-2 mt-10 text-base text-gray-200 bg-pink-600 rounded-sm">
                    Registered Users
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
