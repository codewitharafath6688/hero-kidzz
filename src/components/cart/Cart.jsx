"use client";
import { decreaseItem, deleteCart, increaseItem } from "@/actions/server/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import Swal from "sweetalert2";

const Cart = ({ cartItem }) => {
  const router = useRouter();
  const {
    username,
    email,
    productTitle,
    productId,
    quantity,
    image,
    price,
    _id,
  } = cartItem;

  const safePrice = Number(price) || 0;
  const [cartQuantity, setCartQuantity] = useState(Number(quantity) || 1);
  const [isPending, startTransition] = useTransition();

  const handleIncrease = () => {
    startTransition(async () => {
      const result = await increaseItem(_id, cartQuantity);

      if (result.success) {
        setCartQuantity((prev) => prev + 1);
        Swal.fire("Success", "Quantity increased", "success");
        router.refresh();
      } else {
        Swal.fire({
          title: "Oops!",
          text: result.message || "Something went wrong",
          icon: "error",
        });
      }
    });
  };

  const handleDecrease = () => {
    if (cartQuantity <= 1) return;

    startTransition(async () => {
      const result = await decreaseItem(_id, cartQuantity);

      if (result.success) {
        setCartQuantity((prev) => prev - 1);
        Swal.fire("Success", "Quantity decreased", "success");
        router.refresh();
      } else {
        Swal.fire({
          title: "Oops!",
          text: result.message || "Something went wrong",
          icon: "error",
        });
      }
    });
  };

  const handleDeleteCart = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteCart(_id);
        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your cart item has been deleted.",
            icon: "success",
          });
          router.refresh();
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="card gap-5 border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={image}
              alt={productTitle}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />

            <div className="space-y-1">
              <h2 className="text-lg font-semibold">{productTitle}</h2>
              <p className="text-sm text-base-content/70">
                Product ID: {productId}
              </p>
              <p className="text-sm">Customer: {username}</p>
              <p className="text-sm text-base-content/70">{email}</p>
              <p className="text-base font-bold text-primary">
                ৳{safePrice.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex items-center overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-sm">
              <button
                onClick={handleDecrease}
                className="flex h-8 w-8 cursor-pointer items-center justify-center border-r border-base-300"
                disabled={isPending || cartQuantity <= 1}
              >
                <FiMinus size={14} />
              </button>

              <span className="flex h-8 min-w-[40px] items-center justify-center text-sm font-medium">
                {cartQuantity}
              </span>

              <button
                onClick={handleIncrease}
                className="flex h-8 w-8 cursor-pointer items-center justify-center border-l border-base-300"
                disabled={isPending}
              >
                <FiPlus size={14} />
              </button>
            </div>

            <p className="text-sm font-medium">
              Total: ৳{(safePrice * cartQuantity).toLocaleString()}
            </p>

            <button
              onClick={handleDeleteCart}
              className="btn btn-outline btn-error btn-sm gap-2"
            >
              <HiOutlineTrash size={16} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;