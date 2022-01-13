import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// React Icons
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"
import "../App.css";
// CONTEXT
import GithubContext from "../Context/GithubContext";
import ThemeContext from "../Context/ThemeContext";

const Header = () => {
  const { users } = useContext(GithubContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // Mobile Menu Functions
  const mobileMenu = () => {
    document.querySelector('#mobile-menu').classList.toggle('hidden')
  }
  const mobileMenuClose = () => {
    document.querySelector('#mobile-menu').classList.add('hidden')
  }

  return (
    <header
      className={`flex justify-between ${theme === "dark" ? "bg-slate-800" : "bg-black"
        } items-center p-5 px-4 md:px-40`}>

      {/* Logo */}
      <div className="logo text-2xl flex items-center">
        <Link to={"/"}>
          <BsGithub className="text-2xl md:text-3xl" />
        </Link>
        <h1 className="mx-3 text-sm md:text-2xl">
          <Link to={"/"}>Github Profile Finder</Link>
        </h1>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:items-center ">
        <ul className="flex text-sm md:text-xl">
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "text-orange-400" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink
              to="/myprofile"
              className={(navData) =>
                navData.isActive ? "text-orange-400" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink
              to="/404"
              className={(navData) =>
                navData.isActive ? "text-orange-400" : ""
              }
            >
              404 Page
            </NavLink>
          </li>
        </ul>
        <label
          onChange={(e) => {
            e.target.checked ? setTheme("white") : setTheme("dark");
          }}
          className="chkbx ml-5"
        >
          <input type="checkbox" />
          <span className="x"></span>
          <div className="absolute text-sm left-1.5">
            {theme === "dark" ? "LIGHT" : "DARK"}
          </div>
        </label>
      </nav>

      {/* Mobile Right Bar */}
      <div className="md:hidden flex mr-2">
        {/* Mobile Theme Button */}
        <label
          onChange={(e) => {
            e.target.checked ? setTheme("white") : setTheme("dark");
          }}
          className="chkbx md:hidden mr-4"
        >
          <input type="checkbox" />
          <span className="x"></span>
          <div className="absolute text-sm left-1.5">
            {theme === "dark" ? "LIGHT" : "DARK"}
          </div>
        </label>
        {/* Mobile Hamburger Btn */}
        <button onClick={mobileMenu} className=" md:hidden">
          <AiOutlineMenu className="text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul id="mobile-menu" className={`hidden md:hidden absolute z-10 top-16 left-0 ${theme === "dark" ? "bg-slate-800" : "bg-black"} w-full flex flex-col items-center`}>

        <li onClick={mobileMenuClose} className="p-3">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-orange-400" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li onClick={mobileMenuClose} className="p-3">
          <NavLink
            to="/myprofile"
            className={(navData) =>
              navData.isActive ? "text-orange-400" : ""
            }
          >
            My Profile
          </NavLink>
        </li>

        <li onClick={mobileMenuClose} className="p-3">
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? "text-orange-400" : ""
            }
          >
            404 Page
          </NavLink>
        </li>



      </ul>

    </header>
  );
};

export default Header;
