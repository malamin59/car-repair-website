'use client';
import React from 'react';
import BookingUpdateFrom from './Components/BookingUpdateFrom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function UpdateBookingPage({ params }) {
  // Unwrap the promise
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const { data: services = [], isLoading, isError } = useQuery({
    queryKey: ['myBookings', id], // include id for unique cache
    queryFn: async () => {
      const result = await axios.get(`/api/myBooking/${id}`);
      return result.data;
    },
  });

  return (
    <BookingUpdateFrom
      service={services}
      isError={isError}
      isLoading={isLoading}
    />
  );
}
