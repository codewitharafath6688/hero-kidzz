"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialButton from "../button/SocialButton";
const Login = () => {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    console.log(result);
    if (!result.ok) {
      Swal.fire("error", "Email or, password not matched, Try Google login or, register",  "error");
    } else {
      Swal.fire("success", "Successfully Login", "success");
      router.push(callBack);
    }

    // TODO: connect login API
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Hero Kidzz
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full pl-10"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="input input-bordered w-full pl-10 pr-10"
                required
              />

              <button
                type="button"
                className="absolute right-3 top-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full">Login</button>
          <SocialButton></SocialButton>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link
            href={`/register?callbackUrl=${callBack}`}
            className="link link-primary"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
