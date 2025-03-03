import { Link, NavLink } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/autSlice";

const navLinkStyle = (isActive) => {
  return `hover:underline p-2 w-full cursor-pointer hover:text-orange-400 text-center ${
    isActive && "underline font-semibold text-orange-400"
  }`;
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="max-w-[1280px] w-full mx-auto flex justify-between items-center py-2 md:py-4 px-4 relative">
      <Link to={"/"} className="text-2xl text-teal-700 font-bold italic">
        Quizify
      </Link>
      <button
        onClick={() => setMenu((menu) => !menu)}
        className={`${
          menu ? "text-teal-700 bg-white" : "text-white bg-teal-700"
        } md:hidden p-3 rounded-md z-50`}
      >
        {menu ? <IoMdClose /> : <HiBars3CenterLeft className="font-bold" />}
      </button>

      <ul
        className={`${
          menu ? "flex" : "hidden"
        } absolute w-full md:w-auto top-0 right-0 left-0 md:static text-sm md:flex flex-col justify-center items-center gap-2 md:flex-row text-white bg-teal-700 md:text-teal-700 md:bg-white p-16 md:p-0 rounded-md border md:border-0 z-30`}
      >
        <NavLink className={({ isActive }) => navLinkStyle(isActive)} to={"/"}>
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkStyle(isActive)}
          to={"/profile"}
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkStyle(isActive)}
          to={"/writing-plygnd"}
        >
          Writing
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkStyle(isActive)}
          to={"/quiz"}
        >
          Quizes
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkStyle(isActive)}
          to={"/blogs"}
        >
          Blogs
        </NavLink>

        {authState.isAuthenticated ? (
          <button
            className={`hover:underline hover:font-semibold p-2 w-full cursor-pointer hover:text-orange-400`}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        ) : (
          <NavLink
            className={({ isActive }) => navLinkStyle(isActive)}
            to={"/login"}
          >
            Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
