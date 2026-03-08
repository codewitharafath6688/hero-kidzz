import React from "react";
import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCart";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = (await getProducts()) || [];
  console.log(products);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {products.map((product, i) => (
          <ProductCard product={product} key={i}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
