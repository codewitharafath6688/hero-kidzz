"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();
  return products;
};

export const getSignleProduct = async (id) => {
  if (!id || id.length !== 24) {
    return null;
  }
  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collections.PRODUCTS).findOne(query);
  return product ? JSON.parse(JSON.stringify(product)) : null;
};
