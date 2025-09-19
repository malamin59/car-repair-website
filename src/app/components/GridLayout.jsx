  // src/components/GridLayout.jsx
  import React from "react";

  export default function GridLayout({ children, className = "" }) {
    return (
      <div
        className={`grid  gap-8 lg:grid-cols-3 mb-4 lg:px-20 md:px-8 px-2 md:grid-cols-2 sm:grid-cols-1 ${className}`}
      >
        {children}
      </div>
    );
  }
