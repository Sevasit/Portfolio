import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav((el) => !el);
  };

  return (
    <header className="z-1000">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className=" text-4xl font-bold text-red-400 hover:text-white cursor-pointer ">
          <NavLink to="/" exact>
            Sevasit.
          </NavLink>
        </h1>
        <ul className="hidden md:flex">
          <li className="text-xl p-1 mr-10 ease-out duration-100 hover:text-red-400 hover:border-b-2 border-red-400 cursor-pointer">
            <NavLink activeClassName={styles.active} to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="text-xl p-1 mr-10 ease-out duration-100 hover:text-red-400 hover:border-b-2 border-red-400 cursor-pointer">
            <NavLink activeClassName={styles.active} to="/About">
              About
            </NavLink>
          </li>
          <li className="text-xl p-1 mr-10 ease-out duration-100 hover:text-red-400 hover:border-b-2 border-red-400 cursor-pointer">
            <NavLink activeClassName={styles.active} to="/Skills">
              Skills
            </NavLink>
          </li>
          <li className="text-xl p-1 mr-10 ease-out duration-100 hover:text-red-400 hover:border-b-2 border-red-400 cursor-pointer">
            <NavLink activeClassName={styles.active} to="/Project">
              Project
            </NavLink>
          </li>
          <li className="text-xl p-1 mr-10 ease-out duration-100 hover:text-red-400 hover:border-b-2 border-red-400 cursor-pointer">
            <NavLink activeClassName={styles.active} to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={navHandler} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500 bg-black h-screen"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 hover:text-red-400 hover:border-b-2 hover:border-red-400">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-400 hover:border-b-2 hover:border-red-400">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-400 hover:border-b-2 hover:border-red-400">
              <NavLink to="/Skills">Skills</NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-400 hover:border-b-2 hover:border-red-400">
              <NavLink to="/Project">Project</NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-400 hover:border-b-2 hover:border-red-400">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
