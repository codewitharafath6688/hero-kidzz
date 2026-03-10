import { getCart } from "@/actions/server/cart";
import CheckOut from "@/components/Home/CheckOut";
import React from "react";

const CheckOutPage = async () => {
  const cartItems = await getCart();
  const formatedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <CheckOut cartItems={formatedItems} />
    </div>
  );
};

export default CheckOutPage;
