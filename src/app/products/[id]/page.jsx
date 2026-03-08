import { getSignleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import React from "react";
import {
  FaStar,
  FaRegStar,
  FaShoppingBag,
  FaCommentDots,
  FaTag,
} from "react-icons/fa";

export const productMetadata = {
  title: "Toy Product | Hero Kidzz",
  description:
    "Discover amazing toys at Hero Kidzz. Safe, fun, and educational toys for children.",
  openGraph: {
    images: [
      {
        url: "https://i.ibb.co.com/DPLBYg5n/image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSignleProduct(id);

  if (!product) {
    return <h2>Product Details not found.</h2>;
  }

  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100,
  );

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex items-center gap-1 text-warning">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={500}
              className="rounded-2xl w-full h-auto max-h-[500px] object-cover"
            />
          </figure>
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-base-content">
              {product.title}
            </h1>
            <p className="text-lg text-base-content/70 mt-2">
              {product.bangla}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              {renderStars(product.ratings)}
              <span className="font-semibold">{product.ratings}</span>
            </div>

            <div className="badge badge-outline gap-2 p-4">
              <FaCommentDots />
              {product.reviews} Reviews
            </div>

            <div className="badge badge-outline gap-2 p-4">
              <FaShoppingBag />
              {product.sold} Sold
            </div>
          </div>

          <div className="bg-base-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-primary">
                ৳{discountedPrice}
              </span>
              <span className="text-lg line-through text-base-content/50">
                ৳{product.price}
              </span>
              <div className="badge badge-error gap-1 text-white p-3">
                <FaTag />
                {product.discount}% OFF
              </div>
            </div>

            <CartButton product={product} />
          </div>

          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body">
              <h2 className="card-title text-xl">Product Description</h2>
              <p className="whitespace-pre-line leading-8 text-base-content/80">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;