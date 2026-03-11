"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return { success: false, message: "Unauthorized" };

  const productId = product?._id?.toString();
  const price = Number(product?.price) || 0;
  const percentage = Number(product?.percentage ?? product?.discount ?? 0) || 0;
  const finalPrice = Math.round(price - (price * percentage) / 100);

  const query = {
    email: user.email,
    productId,
  };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };

    const result = await cartCollection.updateOne(query, updatedData);
    revalidatePath("/cart");
    return { success: Boolean(result.modifiedCount) };
  } else {
    const newData = {
      username: user.name,
      email: user.email,
      productTitle: product?.title || "",
      productId,
      quantity: 1,
      image: product?.image || "",
      price: finalPrice,
      originalPrice: price,
      percentage,
      createdAt: new Date(),
    };

    const result = await cartCollection.insertOne(newData);
    revalidatePath("/cart");
    return { success: result.acknowledged };
  }
};

export const getCart = cache(async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return [];

  const query = {
    email: user.email,
  };

  const result = await cartCollection.find(query).toArray();

  return result.map((item) => ({
    ...item,
    _id: item._id.toString(),
    price: Number(item.price) || 0,
    quantity: Number(item.quantity) || 1,
  }));
});

export const deleteCart = async (id) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return { success: false };
  if (!id || id.length !== 24) return { success: false };

  const query = {
    _id: new ObjectId(id),
    email: user.email,
  };

  const result = await cartCollection.deleteOne(query);
  revalidatePath("/cart");

  return { success: Boolean(result.deletedCount) };
};

export const increaseItem = async (id, quantity) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return { success: false };
  if (quantity >= 10) {
    return { success: false, message: "You can't add more than 10 products at a time" };
  }

  const query = {
    _id: new ObjectId(id),
    email: user.email,
  };

  const updatedData = {
    $inc: {
      quantity: 1,
    },
  };

  const result = await cartCollection.updateOne(query, updatedData);
  revalidatePath("/cart");

  return { success: Boolean(result.modifiedCount) };
};

export const decreaseItem = async (id, quantity) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return { success: false };
  if (quantity <= 1) {
    return { success: false, message: "Quantity can't be less than 1" };
  }

  const query = {
    _id: new ObjectId(id),
    email: user.email,
  };

  const updatedData = {
    $inc: {
      quantity: -1,
    },
  };

  const result = await cartCollection.updateOne(query, updatedData);
  revalidatePath("/cart");

  return { success: Boolean(result.modifiedCount) };
};

export const clearCart = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return { success: false };

  const query = {
    email: user.email,
  };

  const result = await cartCollection.deleteMany(query);
  revalidatePath("/cart");

  return { success: Boolean(result.deletedCount) };
};