"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";
import Loading from "../shard/Loading";
import GridLayout from "./GridLayout";

export default function ServicesSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/api/services");
      return res.data;
    },
  });
  console.table(data);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <GridLayout>
      {data?.map((items) => (
        <div className="w-full shadow-xl rounded-xl  p-3 " key={items._id}>
          <Image
            width={320}
            height={200}
            src={items.img}
            alt="services image hear"
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="my-2 font-bold text-xl">{items.title}</h2>
          <p className="text-red-400 font-bold"> Price : {items.price}</p>
        </div>
      ))}
    </GridLayout>
  );
}
