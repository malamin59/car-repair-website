import Margin from "@/app/components/margin/margin";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ServicesDetailsPage({ params }) {
  const p = await params;
  const servicesCollection = await dbConnect(collections.SERVICES);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

  return (
    <Margin>
      <div>
        {/* banner section */}
        <section className="rounded-lg overflow-hidden">
          <figure className="relative w-full h-44 sm:h-80 md:h-96 lg:h-[300px]">
            <Image
              width={1300}
              height={200}
              src="/assets/images/checkout/checkout.png"
              alt="services"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-20 text-white space-y-2 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Service Details
              </h1>
            </div>

            {/* Bottom-right Breadcrumb */}
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-orange-600 lg:p-3 p-2 rounded text-sm sm:text-base">
              Home / Service Details
            </p>
          </figure>
        </section>

        {/*  */}
        <section>
          <Image src={data.img} width={500} height={200} alt="services image" />
          <h3>{data?.title}</h3>
        </section>
      </div>
    </Margin>
  );
}
