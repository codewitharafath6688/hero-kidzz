import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl transition">
      <figure className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="rounded-xl object-cover h-56 w-full"
        />
      </figure>

      <div className="card-body pt-0">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2">{product.title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 text-warning">
            <FaStar />
            {product.ratings}
          </span>

          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">Sold: {product.sold}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {product.discount > 0 && (
            <>
              <span className="line-through text-sm text-gray-400">
                ৳{product.price}
              </span>

              <span className="badge badge-success text-xs">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Button */}
        <div className="flex flex-col justify-center  gap-2 mt-3">
          <CartButton product={{ ...product, _id: product._id.toString() }} />
          <Link className="w-full" href={`/products/${product._id}`}>
            <button className="btn border-[#F7962F] bg-white hover:text-white hover:bg-[#F7962F] text-[#F7962F] btn-sm w-full gap-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
