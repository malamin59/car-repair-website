import Margin from "@/app/components/margin/margin";
import { collections, dbConnect } from "@/lib/dbConnect";

import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ServicesDetailsPage({ params }) {
  // Connect to MongoDB and fetch the service by id
  const servicesCollection = await dbConnect(collections.SERVICES);
  const data = await servicesCollection.findOne({ _id: new ObjectId(params.id) });

  if (!data) {
    return (
      <Margin>
        <h2 className="text-red-600 text-xl font-semibold">Service not found</h2>
      </Margin>
    );
  }


  return (
    <Margin>
      <div className="space-y-10 mb-8">
        {/* Banner */}
        <section className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/assets/images/checkout/checkout.png"
            alt="services"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-10 lg:px-20 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Service Details</h1>
          </div>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded text-sm sm:text-base">
            Home / {data?.title}
          </p>
        </section>

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            {/* Service Image */}
            <div className="w-full h-60 sm:h-80 md:h-96 relative rounded-lg overflow-hidden">
              <Image
                src={data?.img}
                alt={data?.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold">{data?.title}</h2>
            <p className="text-gray-600">{data?.description}</p>

            {/* Facilities */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {data?.facility?.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h4 className="font-semibold text-lg mb-1">{f.name}</h4>
                  <p className="text-gray-500 text-sm">{f.details}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">3 Simple Steps to Process</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {["Step One", "Step Two", "Step Three"].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-4 rounded-lg text-center"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold mb-2 sm:mb-3">
                      {i + 1}
                    </span>
                    <h4 className="font-semibold">{step}</h4>
                    <p className="text-gray-500 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
           
          </div>

          {/* RIGHT SIDE (SIDEBAR) */}
          <div className="flex-shrink-0 w-full lg:w-80 space-y-6">
            {/* Services List */}
            <div className="rounded-lg p-5 space-y-3">
              <h3 className="font-bold text-lg mb-2">Services</h3>
              {data?.relatedServices?.length
                ? data.relatedServices.map((s, i) => (
                    <button
                      key={i}
                      className={`block w-full text-left px-4 py-2 rounded transition ${
                        s === data?.title
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 hover:bg-orange-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))
                : ["Full Car Repair", "Engine Repair", "Automatic Services", "Engine Oil Change", "Battery Charge"].map((s, i) => (
                    <button
                      key={i}
                      className={`block w-full text-left px-4 py-2 rounded transition ${
                        s === data?.title
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 hover:bg-orange-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
            </div>

            {/* Download */}
            <div className="rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3">Download</h3>
              <button className="bg-orange-600 text-white w-full py-2 rounded">PDF Download</button>
            </div>

            {/* Contact */}
            <div className="bg-black text-white p-5 rounded-lg space-y-2">
              <h3 className="font-bold text-lg">Car Doctor</h3>
              <p>Need Help? We are here for you.</p>
              <button className="bg-orange-600 w-full py-2 rounded">Get Quote</button>
            </div>

            {/* Price */}
            <div className="rounded-lg p-5">
              <p className="text-gray-600">Price</p>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                ${data?.price}
              </h2>
              <Link href={`/checkout/${data._id}`} className="bg-orange-600 text-white w-full py-2 rounded">
                Proceed Checkout
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Margin>
  );
}
