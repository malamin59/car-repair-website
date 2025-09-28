"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function BookingUpdateFrom({ service, isLoading, isError }) {
  const { data: session } = useSession();
  const user = session?.user;
console.log(service)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email || "",
      phone: service?.phone || "",
      date: service?.date || "",
      dueAmount: service?.price || "",
      account: service?.account || "",
    },
  });

  const onSubmit = async (data) => {
    if (!service?._id) {
      toast.error("Invalid service ID");
      return;
    }

    const payload = {
      ...data,
      service_id: service.service_id,
      service_name: service.title,
      service_image: service.img,
    };

 
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  if (!service) return <p>Service not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">
        {service.title} Update Booking
      </h1>

       <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
               {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="w-full rounded px-3 py-2 border border-gray-300 focus:border-orange-600 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
       value={service?.phone}
            placeholder="Your Phone"
            {...register("phone", { required: "Phone is required" })}
            className="w-full rounded px-3 py-2 border border-gray-300 focus:border-orange-600 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full rounded px-3 py-2 border border-gray-300 focus:border-orange-600 focus:outline-none"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Due Amount */}
        <div>
          <label className="block font-semibold mb-1">Due Amount</label>
          <input
            type="text"
         value={service?.dueAmount}
            readOnly
            {...register("dueAmount")}
            className="w-full rounded px-3 py-2 border border-gray-300 bg-gray-100 focus:outline-none"
          />
        </div>

        {/* Present Account */}
        <div>
          <label className="block font-semibold mb-1">Present Account {service?.account}  </label>
          <input
            type="text"
           value={service?.account} 
            placeholder="Your Account Info"
            {...register("account", { required: "Account info is required" })}
            className="w-full rounded px-3 py-2 border border-gray-300 focus:border-orange-600 focus:outline-none"
          />
          {errors.account && (
            <p className="text-red-500 text-sm">{errors.account.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
