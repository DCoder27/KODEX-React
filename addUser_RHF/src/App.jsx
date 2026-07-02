import React, { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [editedUser, setEditedUser] = useState(null);

  const handleDelete = (id) => {
    let newUsers = users.filter((elem) => elem.id !== id);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <div className="flex min-h-screen flex-col p-3  gap-4 bg-gray-50 bg-gray-100 ">
      <Navbar setToggle={setToggle} toggle={toggle} />
      {toggle ? (
        <UserForm
          setToggle={setToggle}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
          setUsers={setUsers}
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
      ) : (
        <div className="h-[80%] flex flex-wrap gap-2">
          {users.map((elem) => (
            <UserCard
              key={elem.id}
              user={elem}
              handleDelete={handleDelete}
              setEditedUser={setEditedUser}
              setToggle={setToggle}
              setToggleForm={setToggleForm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
