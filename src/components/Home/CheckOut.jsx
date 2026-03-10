"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems }) => {
  const router = useRouter();
  const session = useSession();

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const shipping = subtotal > 0 ? 60 : 0;
  const totalPrice = subtotal + shipping;

  const handleCheckout = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      deliveryInfo: form.deliveryInfo.value,
      instruction: form.instruction.value,
      phone: form.contactNo.value,
      subtotal,
      shipping,
      totalPrice,
      totalItems,
    };

    const result = await createOrder(payload);

    if (result.success) {
      Swal.fire("success", "Successfully, order added", "success");
      router.refresh();
    } else {
      Swal.fire("error", "Something went wrong", "error");
      router.push("/cart");
    }
  };

  if (session.status == "loading") return <h2>loading...</h2>;

  return (
    <section className="bg-base-100 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-start gap-4">
          <div className="h-14 w-1 rounded-full bg-primary"></div>

          <div>
            <h1 className="text-3xl font-bold text-base-content">
              Check Out Page
            </h1>
            <p className="font-semibold text-base-content/70">
              Checkout Information
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <form
              onSubmit={handleCheckout}
              className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={session?.data?.user?.name}
                      placeholder="Enter your name"
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={session?.data?.user?.email}
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Delivery Information</label>
                  <textarea
                    name="deliveryInfo"
                    placeholder="Enter full delivery address"
                    className="textarea textarea-bordered w-full"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="label">Special Instruction</label>
                  <textarea
                    name="instruction"
                    placeholder="Any note for delivery"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <div>
                  <label className="label">Contact No</label>
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="Enter phone number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <button className="btn btn-primary w-full text-base font-semibold">
                  Check Out with cash on delivery
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-xl border border-base-300 bg-base-100 p-5 shadow-md">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-start justify-between text-sm"
                  >
                    <div>
                      <p className="font-semibold">{item.productTitle}</p>
                      <p className="text-xs text-base-content/60">
                        Qty: {item.quantity} × ৳{item.price}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="divider"></div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-base-content/70">Items</span>
                  <span className="font-medium">{totalItems}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-base-content/70">Subtotal</span>
                  <span className="font-medium">৳{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-base-content/70">Shipping</span>
                  <span className="font-medium">৳{shipping.toFixed(2)}</span>
                </div>

                <div className="divider my-1"></div>

                <div className="flex items-center justify-between font-bold">
                  <span>Total Price</span>
                  <span className="text-lg text-primary">
                    ৳{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;