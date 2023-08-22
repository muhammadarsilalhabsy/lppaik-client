import React, { useState } from "react";

const linkList = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "kegiatan",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
];
const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <header className="bg-accent">
      <div className="flex items-center py-5 container relative">
        {/* logo */}
        <div className="w-3/12">
          <a href="" className="font-bold text-2xl">
            LPPAIK.
          </a>
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
            className={`absolute lg:block lg:static lg:border-0 border-2 border-black rounded-lg right-4 top-full overflow-hidden ${
              !isToggle ? "hidden" : ""
            }`}
          >
            <ul className="lg:flex lg:justify-center lg:items-center gap-5 ">
              {linkList.map(({ name, link }) => (
                <li className="group" key={name}>
                  <a
                    href={link}
                    className="text-black lg:text-white flex capitalize lg:group-hover:text-black group-hover:text-white lg:border-none p-4 lg:p-2 hover:bg-accent  lg:hover:bg-transparent"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* button and profile */}
        <div className="w-3/12 lg:flex justify-end ">
          <button className="btn btn-primary btn-sm">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
