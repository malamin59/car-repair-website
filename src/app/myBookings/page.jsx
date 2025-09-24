"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Margin from "../components/margin/margin";
import Loading from "../shard/Loading";

export default function MyVBooking() {
  const { data: services = [], isLoading, isError } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const result = await axios.get("/api/services/getmyServices");
      return result.data;
    },
  });

  if (isLoading) return <Loading/>
  if (isError) return <p className="text-center text-red-500">Failed to load data</p>;

  return (
   <Margin>
     <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Service Name</th>
            <th className="p-3">Due Amount</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id} className="hover:bg-gray-50">
              {/* Image */}
              <td className="p-3">
                <img
                  src={service.service_image}
                  alt={service.service_name}
                  className="w-16 h-16 rounded object-cover"
                />
              </td>

              {/* Service Name */}
              <td className="p-3">
                <div className="font-medium">{service.service_name}</div>
                <div className="text-sm text-gray-500">{service.account}</div>
              </td>

              {/* Due Amount */}
              <td className="p-3">{service.dueAmount}</td>

              {/* Date */}
              <td className="p-3">{service.date}</td>

              {/* Status */}
              <td className="p-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded">
                  Pending
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </Margin>
  );
}
