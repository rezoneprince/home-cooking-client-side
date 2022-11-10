import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import logo from "./../../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };
  const menu = (
    <>
      <li>
        <NavLink to="/menu">All Menu</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        {!user?.uid ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button onClick={handleLogout} to="">
            Logout
          </button>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <NavLink to="" className="btn btn-ghost normal-case text-xl ">
          <img src={logo} alt="" className="w-full h-full" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Header;
