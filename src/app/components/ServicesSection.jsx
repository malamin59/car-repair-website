"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";
import Loading from "../shard/Loading";
import GridLayout from "../shard/GridLayout";

export default function ServicesSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/api/services");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <GridLayout>
      {data?.map((items) => (
        <div key={items._id} className="w-full">
          <Image
            width={320}
            height={200}
            src={items.img}
            alt="services image hear"
            className="w-4xl  object-cover rounded-md  h-56"
          />
        </div>
      ))}
    </GridLayout>
  );
}
