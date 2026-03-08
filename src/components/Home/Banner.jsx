import Image from "next/image";
import React from "react";
import { fontBangla } from "@/app/layout";

const Banner = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="space-y-4">
        <h2 className={`${fontBangla.className} text-6xl font-semibold`}>শিশুর জন্য <span className="text-[#F7962F] leading-19.5">সুন্দর ভবিষ্যত</span> <br/> প্রদান করুন</h2>
        <p className="text-gray-700">Buy every toy up to 15% discount</p>
        <button className="btn border-[#F7962F] bg-white border-2 hover:bg-[#F7962F]">Explore More</button>
      </div>
      <div>
        <Image alt="Buy every toy up to 15% discount" src={"/assets/hero.png"} width={500} height={400}/>
      </div>
    </div>
  );
};

export default Banner;
