"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { handleCart } from "@/actions/server/cart";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const isLogin = session.status == "authenticated";

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result.success) {
        Swal.fire("Added to card successfully", product?.title, "success");
        // return;
      } else {
        Swal.fire("error", "something wrong happened", "error");
        // return;
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={session.status == "loading" || isLoading}
      onClick={handleAddToCart}
      className="btn btn-primary mt-3 w-full flex items-center gap-2"
    >
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;
