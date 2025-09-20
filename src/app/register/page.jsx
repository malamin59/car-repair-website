"use client";

import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../components/logimage/LoginImage";
import Margin from "../components/margin/margin";
import { registerUser } from "../actions/auth/registerUser";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   await  registerUser(data);
  };

  const password = watch("password");

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="border p-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                className="border p-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="border p-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Margin>
  );
}
