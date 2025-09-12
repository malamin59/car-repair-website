"use client";

import React from "react";

export default function GridLayout({ children, className = "" }) {
  return (
    <div
      className={`grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-6 mx-auto 
        items-center 
        justify-center px-2 lg:px-8 md:px-8 mt-4 ${className}`}
    >
      {children}
    </div>
  );
}
