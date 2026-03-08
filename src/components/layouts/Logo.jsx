import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex justify-center items-center gap-2" href={"/"}>
      <Image
        alt="hero-kidzz logo"
        src={"/assets/logo.png"}
        height={50}
        width={45}
      />
      <h2 className="text-xl font-bold"><span className="text-[#8E4B3F]">H</span><span className="text-[#F9B38D]">ero</span> <span className="text-[#F7962F]">Kidzz</span></h2>
    </Link>
  );
};

export default Logo;
