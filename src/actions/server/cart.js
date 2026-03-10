"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  console.log(user);
  if (!user) return { success: false };

  //getCartItem => user email & productId

  const query = {
    email: user?.email,
    productId: product?._id,
  };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    //if exist => update the cart
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
  } else {
    //not exist => create the cart
    const newData = {
      username: user?.name,
      email: user?.email,
      productTitle: product?.title,
      productId: product?._id,
      quantity: 1,
      image: product?.image,
      price: Math.round(
        product?.price - (product?.price * product?.discount) / 100,
      ),
    };
    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};

export const getCart = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = {
    email: user?.email,
  };
  const result = await cartCollection.find(query).toArray();
  const formattedResult = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return formattedResult;
});

export const deleteCart = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  if (id?.length != 24) return { success: false };
  const query = { _id: new ObjectId(id) };
  const result = await cartCollection.deleteOne(query);
  if (result.deletedCount) return revalidatePath("/cart");
  return { success: Boolean(result.deletedCount) };
};

export const increaseItem = async (id, quantity) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  if (quantity > 10)
    return { success: false, message: "You can't 10 products at a time" };
  const query = { _id: new ObjectId(id) };
  const updatedData = {
    $inc: {
      quantity: 1,
    },
  };
  const result = await cartCollection.updateOne(query, updatedData);

  return { success: Boolean(result.modifiedCount) };
};

export const decreaseItem = async (id, quantity) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  if (quantity <= 1)
    return { success: false, message: "Quantity can't be empty" };
  const query = { _id: new ObjectId(id) };
  const updatedData = {
    $inc: {
      quantity: -1,
    },
  };
  const result = await cartCollection.updateOne(query, updatedData);

  return { success: Boolean(result.modifiedCount) };
};

export const clearCart = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = {
    email: user?.email,
  };
  const result = await cartCollection.deleteMany(query);
  return { success: Boolean(result.deletedCount) };
};
