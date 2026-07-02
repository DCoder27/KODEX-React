import React, { useRef, useState } from "react";

const Register2 = ({ setToggle }) => {
  let data = {};
  let inputRef = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const { current } = inputRef;
    data = {
      ...data,
      name: current.name.value,
      email: current.email.value,
      password: current.password.value,
    };
    console.log("Form Data => ", data);
  };

  return (
    <div className="h-auto w-[25%] min-w-[320px] rounded-xl bg-white px-7 py-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            ref={(e) => {
              inputRef.current.name = e;
            }}
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full rounded border-2 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            ref={(e) => {
              inputRef.current.email = e;
            }}
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full rounded border-2 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            ref={(e) => {
              inputRef.current.password = e;
            }}
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full rounded border-2 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded bg-[#360c5d] py-2 font-medium text-white hover:bg-[#501b81]"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer font-medium text-[#360c5d] hover:underline"
        >
          Click here for login
        </span>
      </p>
    </div>
  );
};

export default Register2;
