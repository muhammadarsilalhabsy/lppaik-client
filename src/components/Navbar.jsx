import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { linkList } from "../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.userState);
  const [isToggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  function handelLogout() {
    dispatch(userLogout());
  }

  return (
    <header className="top-0 left-0 w-full flex items-center z-50 border-b-2 border-black fixed bg-white">
      <div className="flex items-center py-5 container relative">
        {/* logo */}
        <div className="lg:w-3/12 w-1/3">
          <Link to="/" className="font-bold text-2xl tracking-wider">
            LPPAIK.
          </Link>
        </div>

        {/* link */}

        <div className="w-6/12 flex items-center lg:block lg:items-start ">
          <button
            onClick={() => setToggle(!isToggle)}
            type="button"
            id="hamburger"
            name="hamburger"
            className={`block absolute right-4 lg:hidden ${
              isToggle ? "hamburger-active" : ""
            }`}
          >
            <span className="hamburger-line origin-top-left"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line origin-bottom-left "></span>
          </button>

          <nav
            className={`absolute lg:block lg:static lg:border-0 border-2 border-black rounded-lg right-4 top-20 overflow-hidden ${
              !isToggle ? "hidden" : ""
            }`}
          >
            <ul className="lg:flex lg:justify-center lg:items-center gap-5 bg-slate-100 lg:bg-transparent">
              {linkList.map(({ name, link }) => (
                <li className="group" key={name}>
                  <Link
                    to={link}
                    className="text-black flex capitalize tracking-wider group-hover:text-white lg:group-hover:text-accent lg:border-none py-4 px-8 lg:p-2 hover:bg-accent  lg:hover:bg-transparent"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* button and profile */}
        <div className="lg:w-3/12 w-2/3 lg:flex lg:justify-end justify-center">
          {user ? (
            <>
              <div
                className="avatar dropdown dropdown-bottom dropdown-end cursor-pointer"
                tabIndex={0}
              >
                <div className="w-10 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                  <img src="haha.jpeg" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-6 border-2 border-black"
                >
                  <li className="hover:bg-accent rounded-lg">
                    <Link to="/profile">View profile</Link>
                  </li>
                  <li className="hover:bg-error rounded-lg">
                    <button
                      onClick={handelLogout}
                      className="text-red-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-accent tracking-wider btn-sm ex-border text-black hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
