import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("email is:", email);
    console.log("Password is:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-gray-700 p-10 flex h-screen w-screen justify-center items-center">
      <div className=" border-green-500 border-2 p-10 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandeler(e);
          }}
          className=" p-20 flex flex-col     gap-10"
        >
          <input
            required
            className="bg-white rounded-2xl text-2xl text-black px-10 py-5  border-none outline-none "
            type="email"
            placeholder="Enter your name"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="bg-white rounded-2xl text-2xl text-black px-10 py-5  border-none outline-none "
            type="password"
            placeholder="Enter Password "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex justify-center items-center p-10">
            <button
              type="submit"
              className="bg-gray-800 w-50 h-15 px-5 rounded-3xl text-white  cursor-pointer text-center hover:bg-gray-900"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
