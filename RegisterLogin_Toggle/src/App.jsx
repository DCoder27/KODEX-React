import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
