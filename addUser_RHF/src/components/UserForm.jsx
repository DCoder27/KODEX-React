import { nanoid } from "nanoid";
import React from "react";
import { set, useForm } from "react-hook-form";

const UserForm = ({
  setToggle,
  setToggleForm,
  toggleForm,
  setUsers,
  editedUser,
  setEditedUser,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange" /** this will validate the form on every change */,
    defaultValues: editedUser,
  });

  const onFormSubmit = (data) => {
    console.log(data);

    if (editedUser) {
      let editedUsers = null;
      setUsers((prev) => {
        editedUsers = prev.map((user) =>
          user.id === editedUser.id ? { ...data, id: user.id } : user,
        );
        return editedUsers;
      });
      localStorage.setItem("users", JSON.stringify(editedUsers));
      setEditedUser(null);
    } else {
      let users = null;
      setUsers((prev) => {
        users = [...prev, { ...data, id: nanoid() }];
        return users;
      });
      localStorage.setItem("users", JSON.stringify(users));
    }

    reset();
    setToggle(false);
    setTogglreForm(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      {/* Close Button */}
      <button
        type="button"
        onClick={() => {
          setToggle(false);
          setToggleForm(false);
        }}
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          {toggleForm ? "Update User" : "Add User"}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {toggleForm? "Modify the information below to update the user." : "Fill in the details below to create a new user."}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            type="text"
            placeholder="John Doe"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
        </div>

        {/* Mobile */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            type="number"
            inputMode="numeric"
            maxLength={10}
            placeholder="9876543210"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">{errors.mobile?.message}</p>
        </div>

        {/* Profession */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Profession
          </label>
          <input
            {...register("profession", {
              required: "Profession is required",
            })}
            type="text"
            placeholder="Frontend Developer"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.profession?.message}
          </p>
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            {...register("location", {
              required: "Location is required",
            })}
            type="text"
            placeholder="Mumbai"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.location?.message}
          </p>
        </div>

        {/* Image URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Profile Image URL
          </label>
          <input
            {...register("imageUrl", {
              required: "Image URL is required",
              pattern: {
                value:
                  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
                message: "Enter a valid URL",
              },
            })}
            type="url"
            placeholder="https://example.com/profile.jpg"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-black focus:bg-white"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.imageUrl?.message}
          </p>
        </div>

        {/* Submit */}
        <button
          disabled={!isValid}
          type="submit"
          className={`w-full rounded-2xl ${isValid ? "bg-[#0f88da]" : "bg-[#4e5459]"} py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg active:translate-y-0`}
        >
          {toggleForm ? "Save Changes" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
