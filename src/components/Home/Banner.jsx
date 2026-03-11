import Image from "next/image";
import React from "react";
import { fontBangla } from "@/app/layout";

const Banner = () => {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
        <div className="space-y-4 text-center lg:max-w-xl lg:text-left">
          <h2
            className={`${fontBangla.className} text-3xl font-semibold leading-snug sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            আপনার শিশুকে দিন একটি <br />
            <span className="text-[#F7962F]">সুন্দর ভবিষ্যত</span>
          </h2>

          <p className="text-sm text-gray-700 sm:text-base md:text-lg">
            Buy every toy up to 15% discount
          </p>

          <button className="btn border-2 border-[#F7962F] bg-white text-black hover:bg-[#F7962F] hover:text-white">
            Explore More
          </button>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            alt="Buy every toy up to 15% discount"
            src="/assets/hero.png"
            width={500}
            height={400}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;