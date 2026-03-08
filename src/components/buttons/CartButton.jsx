"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const path = usePathname();

  const handleAddToCart = () => {
    if (!session) {
      router.push(`/login?callbackUrl=${path}`);
      return;
    }

    alert(product._id);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn btn-primary mt-3 w-full md:w-48 flex items-center gap-2"
    >
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;