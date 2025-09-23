"use client";

import CheckoutFrom from "@/components/CheckoutFrom";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const { id } = params;

  // Fetch single service dynamically
  const {
    data: service,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await fetch(`/api/services/${id}`);
      if (!res.ok) throw new Error("Failed to fetch service");
      return res.json();
    },
    enabled: !!id,
  });

  return (
    <CheckoutFrom service={service} isLoading={isLoading} isError={isError} />
  );
}
