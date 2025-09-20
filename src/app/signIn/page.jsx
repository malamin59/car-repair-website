"use client";

import React from "react";
import LoginImage from "../components/logimage/LoginImage";
import Margin from "../components/margin/margin";
import LoginFrom from "./components/loginFrom";

export default function RegisterPage() {
  return (
    <Margin>
      <div className="flex flex-col  my-6 lg:flex-row items-center justify-center gap-8 min-h-[80vh]">
        {/* Left Image */}
        <div className="flex-1 flex justify-center ">
          <LoginImage />
        </div>

        {/* Form */}
        <div className="flex-1 max-w-md w-full p-8  lg:py-16 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
          <LoginFrom />
        </div>
      </div>
    </Margin>
  );
}
