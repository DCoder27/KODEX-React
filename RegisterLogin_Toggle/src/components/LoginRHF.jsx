import React from "react";
import { useForm } from "react-hook-form";
const LoginRHF = ({ setToggle }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data => ", data);
    reset();
  };

  return (
    <div className="h-auto w-[25%] min-w-[320px] rounded-xl bg-white px-7 py-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            {...register("email")}
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
            name="password"
            {...register("password")}
            type="password"
            placeholder="Enter password"
            className="w-full rounded border-2 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded bg-[#360c5d] py-2 font-medium text-white hover:bg-[#501b81]"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer font-medium text-[#360c5d] hover:underline"
        >
          Click here for register
        </span>
      </p>
    </div>
  );
};

export default LoginRHF;
