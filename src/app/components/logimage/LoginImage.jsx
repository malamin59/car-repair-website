import Image from "next/image";
import React from "react";

export default function LoginImage() {
  return (
    <div>
      <Image width={400} height={20} alt="login image" src="/assets/images/login/login.svg" className="px-8 lg:px-0" />
    </div>
  );
}
