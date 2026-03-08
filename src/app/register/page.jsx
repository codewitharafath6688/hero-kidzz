import Register from "@/components/auth/register/Register";
import React from "react";

export const metadata = {
  title: "Register | Hero Kiddz",
  description: "Create your Hero Kiddz account",
};

const RegisterPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <Register />
    </section>
  );
};

export default RegisterPage;
