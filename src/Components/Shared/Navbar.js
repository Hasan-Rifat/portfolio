import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">My Resume</Link>
      </li>
      <li>
        <Link to="/">My Portfolio</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <a href="https://form.jotform.com/221595024749461" target="blank">
          Contact Me
        </a>
      </li>
    </>
  );
  return (
    <section className="shadow-lg sticky top-0 gradient-bg-transactions z-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div class="navbar ">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary font-bold"
              >
                {navLink}
              </ul>
            </div>
            <Link
              to="/"
              class="btn btn-ghost normal-case text-xl text-white font-bold"
            >
              Hasan Rifat
            </Link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 text-white font-bold">
              {navLink}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
