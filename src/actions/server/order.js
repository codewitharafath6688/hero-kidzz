"use server";

import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { authOptions } from "@/lib/authOptions";
import { Boldonse } from "next/font/google";
import { transporter } from "@/lib/mailer";
import { orderInvoiceTemplate } from "@/lib/orderInvoiceTemplate";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const cart = await getCart();
  if (cart.length == 0) return { success: false };
  const newOrder = {
    createdAt: new Date().toISOString(),
    items: cart,
    ...payload,
  };

  const result = await orderCollection.insertOne(newOrder);
  if (Boolean(result.insertedId)) {
    const result = await clearCart();
  }
  const order = {
    ...newOrder,
    _id: result.insertedId.toString(),
  };
  await transporter.sendMail({
    from: `"Hero Kidzz" <${process.env.EMAIL_FROM}>`,
    to: user.email,
    subject: "Your Order Invoice - Hero Kidzz",
    html: orderInvoiceTemplate(order, user),
  });
  return { success: Boolean(result.insertedId) };
};
