"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export default function Delete({ id }) {
  const queryClient = useQueryClient();
  const { mutate: deleteServices, isLoading } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`/api/services/${id}`);
    },
    onSuccess: () => {
      toast.success("Deleted Successfully!");
      queryClient.invalidateQueries(["myBookings"]);
    },
    onError: () => {
      toast.error("Failed the delete services");
    },
  });
  const handleDelete = () => {
    if (confirm("Are you sure you went to delete the data"))
      deleteServices(id);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded disabled:opacity-50"
    >
        {isLoading ? 'Deleting...': 'Delete'}
    </button>
  );
}
