import React from "react";
import { IoSunny } from "react-icons/io5";
import Container from "../Container";

export const Navbar = () => {
  return (
    <>
      <div className="bg-secondary shadow-sm shadow-gray-500">
        <Container className="p-4">
          <div className="flex justify-between items-center">
            <img src="./logo2.png" alt="logo" className="h-12" />

            <ul className="flex items-center space-x-9">
              <li>
                <input
                  type="text"
                  className="border border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus: border-white transition text-white"
                  placeholder=" Search..."
                />
              </li>
              <li className="text-white font-semibold text-lg">Login</li>
              <li>
                <button className="bg-dark-subtle p-1 rounded-md">
                  <IoSunny className="text-secondary" size={24} />
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};
