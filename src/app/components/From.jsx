"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function From() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('/api/services', data);
      toast.success("data send successfully!")
    } catch (error) {
      console.log(error);
      toast.error(error.message | "fail send to data")
    }
  };

  return (
    <div>
      <form
        className="space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {" "}
        <div>
          <label>Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="border p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", { required: "email is required" })}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 cursor-pointer text-white w-full p-2 rounded"
        >
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
}
