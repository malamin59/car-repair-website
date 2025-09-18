import Image from "next/image";
import React from "react";
import BannerImage from "../../../../public/assets/images/banner/5.jpg";

export default function BannerPage() {
  return (
    <div className="w-full lg:px-20 md:px-8 px-2 mt-3 mb-12 mx-auto">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
        {/* Banner Image */}
        <Image
          src={BannerImage}
          alt="banner image"
          fill
          className="object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Optional content on top */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-start 
                    px-4 sm:px-8 md:px-12 lg:px-20 text-white lg:space-y-4 space-y-2"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Affordable <br className="hidden lg:block"/> Price For Car <br /> Servicing
          </h1>

          <p className="text-sm sm:text-base md:text-lg">
            There are many variations of passages of available, but <br />
            the majority have suffered alteration in some form
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <button className="btn bg-orange-600 text-white rounded w-full sm:w-auto">
              Discover More
            </button>
            <button className="btn btn-outline text-white rounded hover:bg-transparent w-full sm:w-auto">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
