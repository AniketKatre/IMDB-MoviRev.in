import React from "react";
import { IoSunny } from "react-icons/io5";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/theme";

export const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-secondary shadow-sm shadow-gray-500">
        <Container className="p-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="./logo2.png" alt="logo" className="h-12" />
            </Link>

            <ul className="flex items-center space-x-9">
              <li>
                <input
                  type="text"
                  className="border border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus: border-white transition text-white"
                  placeholder=" Search..."
                />
              </li>
              <li className="text-white font-semibold text-lg">
                <Link to="/auth/signin">Login</Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="dark:bg-dark-subtle bg-lime-100 p-1 rounded-lg"
                >
                  <IoSunny
                    className="dark:text-slate-800 text-slate-400"
                    size={24}
                  />
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};
