import Link from "next/link";
import React from "react";
import NavLogo from "./NavLogo";
export default function NavBar() {
  const links = (
    <>
      {" "}
      <li>
        {" "}
        <Link href={"/"}> Home </Link>{" "}
      </li>{" "}
      <li>
        {" "}
        <Link href={"/"}> About </Link>{" "}
      </li>{" "}
      <li>
        {" "}
        <Link href={"/"}> Services </Link>{" "}
      </li>{" "}
      <li>
        {" "}
        <Link href={"/"}> Blog </Link>{" "}
      </li>{" "}
      <li>
        {" "}
        <Link href={"/"}> Contact </Link>{" "}
      </li>{" "}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 lg:px-8 md:px-8">
      {" "}
      <div className="navbar-start">
        {" "}
        <div className="dropdown">
          {" "}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 lg:hidden"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {" "}
            {/* */} {links}{" "}
          </ul>{" "}
        </div>{" "}
        <Link href={"/"}>
          {" "}
          <NavLogo />{" "}
        </Link>{" "}
      </div>{" "}
      <div className="navbar-center hidden lg:flex">
        {" "}
        <ul className="menu menu-horizontal px-1">
          {" "}
          {/* */} {links}{" "}
        </ul>{" "}
      </div>{" "}
      <div className="navbar-end">
        {" "}
        <Link
          href={"/"}
          className="text-red-500 btn-sm btn border-rose-400 rounded"
        >
          Appointment
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
