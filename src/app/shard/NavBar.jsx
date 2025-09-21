"use client";
import Link from "next/link";
import React from "react";
import NavLogo from "./NavLogo";
import Margin from "../components/margin/margin";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
export default function NavBar() {
  const { data, status } = useSession();
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

  const handleSigOut = () =>{
    signOut()
    toast.success('logout Successfully')
  }
  return (
    <Margin>
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
        <div className="navbar-end   gap-2">
          {" "}
          <Link
            href={"/"}
            className="text-red-500 btn-sm border-none btn border-rose-400 rounded"
          >
            Appointment
          </Link>{" "}
          {status == "authenticated" ? (
            <>
              {" "}
              <button
                className="btn btn-sm text-orange-500 rounded"
                onClick={() => handleSigOut()}
              >
                {" "}
                Signout
              </button>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="text-red-500 btn-sm btn border-rose-400 rounded"
              >
                Login
              </Link>{" "}
            </>
          )}
        </div>{" "}
      </div>
    </Margin>
  );
}
