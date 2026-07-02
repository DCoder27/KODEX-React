import React from "react";

const UserCard = ({
  user,
  handleDelete,
  setEditedUser,
  setToggle,
  setToggleForm,
}) => {
  return (
    <div className="w-[30%] h-[80%] max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={user.imageUrl}
          alt="User Avatar"
          className="h-24 w-24 rounded-full border-4 border-gray-100 bg-gray-50 p-2"
        />
      </div>

      {/* User Info */}
      <div className="mt-5 text-center">
        <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
        <p className="mt-1 text-sm text-gray-500">{user.profession}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Email</span>
          <span className="font-medium text-gray-800">{user.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Mobile</span>
          <span className="font-medium text-gray-800">+91 {user.mobile}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Location</span>
          <span className="font-medium text-gray-800">{user.location}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            setEditedUser(user);
            setToggle((prev) => !prev);
            setToggleForm(true);
          }}
          className="flex-1 rounded-xl bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => {
            handleDelete(user.id);
          }}
          className="flex-1 rounded-xl border border-red-200 bg-red-50 py-2.5 font-medium text-red-600 transition hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
