import React from "react";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <nav className="sticky h-[20%] top-0 z-50 border-b border-gray-400/75 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left - Default User Avatar */}
        <div>
          <img
            src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Ghost"
            alt="User Avatar"
            className="h-11 w-11 rounded-full border border-gray-200 bg-gray-100 p-1 shadow-sm"
          />
        </div>

        {/* Center - Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-black"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-black"
            >
              Users
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-black"
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-all duration-200 hover:text-black"
            >
              Settings
            </a>
          </li>
        </ul>

        {/* Right - Add User Button */}
        <button
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg active:translate-y-0"
        >
          {toggle ? "Show User" : "+ Add User"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
