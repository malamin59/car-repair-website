"use client";
import axios from "axios";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

export default function ServiceForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      service_id: "",
      title: "",
      img: "",
      price: "",
      description: "",
      facility: [{ name: "", details: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facility",
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/services", data);
      toast.success("Data sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Failed to send data");
    }
  };

  return (
    <div>
      <form
        className="space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>Service ID:</label>
          <input
            {...register("service_id", { required: "Service ID is required" })}
            className="border p-2 w-full"
          />
          {errors.service_id && (
            <p className="text-red-500">{errors.service_id.message}</p>
          )}
        </div>

        <div>
          <label>Title:</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="border p-2 w-full"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label>Image URL:</label>
          <input
            {...register("img", { required: "Image URL is required" })}
            className="border p-2 w-full"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>

        <div>
          <label>Price:</label>
          <input
            {...register("price", { required: "Price is required" })}
            className="border p-2 w-full"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="border p-2 w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label>Facilities:</label>
          {fields.map((field, index) => (
            <div key={field.id} className="border p-2 mb-2">
              <input
                placeholder="Facility Name"
                {...register(`facility.${index}.name`, {
                  required: "Facility name is required",
                })}
                className="border p-2 w-full mb-1"
              />
              <input
                placeholder="Facility Details"
                {...register(`facility.${index}.details`, {
                  required: "Facility details are required",
                })}
                className="border p-2 w-full mb-1"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ name: "", details: "" })}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Add Facility
          </button>
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
