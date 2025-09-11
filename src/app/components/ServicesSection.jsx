import Image from "next/image";
import React from "react";

export default async function ServicesSection() {
const data = []

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {data.map((items) => {
        return (
          <div key={items._id} className="lg:col-span-4  md:col-span-6 col-span-12   ">
            <Image  width={320} height={170} src={items.img} alt="services image hear"></Image>
          </div>
        );
      })}
    </div>
  );
}
