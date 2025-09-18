import Image from "next/image";
import React from "react";

export default function NavLogo() {
  return (
    <div>
      <Image
        src={"/assets/logo.svg"}
        width={65}
        height={50}
        alt="navbar-logo"
        className=" lg:block hidden"
      ></Image>
    </div>
  );
}
