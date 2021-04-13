import React, { useEffect } from "react";
import axiosInstance from "../services/axios";

function RegisteredUsers({ getUsers, setGetUsers }) {
  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosInstance.get("register");
      setGetUsers(res.data);
    };
    console.log(fetchData);
  }, [setGetUsers]);
  return (
    <div className="flex justify-center w-full h-screen pt-10 bg-gray-100">
      <div>
        <div className="grid grid-cols-6 gap-10 pb-5 text-2xl">
          <p>ID</p>
          <p>FirstName</p>
          <p>MiddleName</p>
          <p>LastName</p>
          <p>Emailaddress</p>
          <p>ContactNumber</p>
        </div>
        {getUsers &&
          getUsers.map((user) => {
            return (
              <div className="grid grid-cols-6 gap-10">
                <p>{user.id}</p>
                <p>{user.firstName}</p>
                <p>{user.MiddleName}</p>
                <p>{user.LastName}</p>
                <p>{user.Emailaddress}</p>
                <p>{user.ContactNumber}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RegisteredUsers;
