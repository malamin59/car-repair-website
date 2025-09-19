  import React from "react";

  export default function Margin({ children, className = "" }) {
    return (
      <div
        className={` lg:px-20 md:px-8 px-2 mt-3  mx-auto ${className}`}
      > 
        {children}
      </div>
    );
  }
