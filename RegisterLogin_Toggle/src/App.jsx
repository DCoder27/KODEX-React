import React, { Activity, useState } from "react";
import Register1 from "./components/Register1";
import Login from "./components/Login";
import Register2 from "./components/Register2";
import Login2 from "./components/Login2";
import LoginRHF from "./components/LoginRHF";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )} */}

      <Activity mode={toggle ? "visible" : "hidden"}>
        <Register2 setToggle={setToggle} />
      </Activity>
      <Activity mode={!toggle ? "visible" : "hidden"}>
        <LoginRHF setToggle={setToggle} />
      </Activity>
    </div>
  );
};

export default App;
