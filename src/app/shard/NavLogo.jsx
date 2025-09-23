import Image from "next/image";
import React from "react";

export default function NavLogo() {
  return (
    <div>
      <Image
  src="/assets/logo.svg"
  alt="navbar-logo"
  width={0}
  height={0}
  className="hidden lg:block w-[65px] h-auto"
/>
    </div>
  );
}
