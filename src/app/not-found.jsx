import Image from "next/image";
import React from "react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        width={400}
        height={300}
        alt="404 image"
        src="/assets/images/banner/1.jpg"
        className="px-8 lg:px-0"
      />
      <h1 className="text-2xl font-bold mt-4">404 - Page Not Found</h1>
    </div>
  );
}
