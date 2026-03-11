"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
  const path = usePathname();

  const isActive =
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-[#F7962F] font-bold"
          : "hover:text-[#F7962F] transition"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
