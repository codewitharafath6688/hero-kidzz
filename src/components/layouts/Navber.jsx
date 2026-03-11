import React from "react";
import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import AuthButton from "../buttons/AuthButton";

const Navber = () => {
  const nav = (
    <>
      <li>
        <NavLinks href={"/"}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={"/products"}>Products</NavLinks>
      </li>
      <li>
        <NavLinks href={"/blog"}>Blog</NavLinks>
      </li>
      <li>
        <NavLinks href={"/contact"}>Contact</NavLinks>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 ">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>

          <Logo />
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end space-x-3">
          <Link className="btn text-white bg-[#F7962F]" href={"/cart"}>
            <GrCart />
          </Link>

          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Navber;