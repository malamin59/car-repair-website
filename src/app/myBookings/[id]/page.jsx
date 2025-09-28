import BookingUpdateFrom from '@/components/BookingUpdate/page'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function UpdateBookingPage() {
    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/api/myBooking");
      return res.data;
    },
  });
  return (
<BookingUpdateFrom data={data}/>
)
}
