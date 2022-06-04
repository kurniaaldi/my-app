import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [topScroll] = React.useState(true);

  return (
    <nav
      className={`flex-wrap items-center justify-between mobile:px-0 px-16 py-3 top-0 ${
        topScroll ? "shadow-none" : "flex shadow"
      } bg-white dark:bg-grey-dark-nav fixed w-full z-50`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative self-center flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <p>logo</p>
          <button
            className="flex items-center justify-between text-fontBlack cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          ></button>
          <ul className="lg:flex gap-2 flex-col lg:flex-row list-none lg:ml-auto sm:hidden mobile:hidden">
            <li
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="nav-item border-b border-primary dark:border-white"
            >
              <a className="text-primary py-2 flex items-start text-base leading-snug dark:text-white hover:text-primary">
                <span className="ml-2">label</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`lg:flex flex-grow items-center
              ${navbarOpen ? " flex" : "hidden"}`}
          id="example-navbar-danger"
        >
          <ul className="flex gap-2 flex-col sm:items-start lg:items-center lg:flex-row list-none lg:ml-auto mobile:items-start">
            <li
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="nav-item border-b border-primary dark:border-white"
            >
              <a className="text-primary py-2 flex items-start text-base leading-snug dark:text-white hover:text-primary">
                <span className="ml-2">label</span>
              </a>
            </li>
            <li
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="nav-item border-b border-primary dark:border-white"
            >
              <a className="text-primary py-2 flex items-start text-base leading-snug dark:text-white hover:text-primary">
                <span className="ml-2">label</span>
              </a>
            </li>
            <li
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="nav-item border-b border-primary dark:border-white"
            >
              <a className="text-primary py-2 flex items-start text-base leading-snug dark:text-white hover:text-primary">
                <span className="ml-2">label</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
