"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn border-[#F7962F] border-2 bg-[#F7962F] hover:bg-white text-white hover:text-black">
            LogOut
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"} className="btn bg-white hover:bg-[#F7962F] border-2 border-[#F7962F] ">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
