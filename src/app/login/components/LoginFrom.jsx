"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import handleApiError from "@/app/shard/handleApiError";
import toast from "react-hot-toast";

export default function LoginFrom() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
     reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const response = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        router.push("/");
        toast.success("login Successfully!");
        reset
      } 
      
      else {
        toast.error("login failed!");
      }
    } catch (errors) {
      return handleApiError();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
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

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors"
        >
          Sign In
        </button>
        <p className="text-center">
          new this site please
          <Link href={"/signIn"}>
            {" "}
            <span className="text-orange-500"> register </span>{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
