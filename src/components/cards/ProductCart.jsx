import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const price = Number(product.price) || 0;
  const percentage = Number(product.percentage ?? product.discount ?? 0) || 0;
  const discountedPrice = Math.round(price - (price * percentage) / 100);

  return (
    <div className="card border border-base-200 bg-base-100 shadow-md transition hover:shadow-xl">
      <figure className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="h-56 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body pt-0">
        <h2 className="card-title line-clamp-2 text-base">{product.title}</h2>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-warning flex items-center gap-1">
            <FaStar />
            {product.ratings}
          </span>
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        <p className="text-sm text-gray-500">Sold: {product.sold}</p>

        <div className="mt-1 flex items-center gap-2">
          {percentage > 0 ? (
            <>
              <span className="text-primary text-lg font-bold">
                ৳{discountedPrice.toLocaleString()}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ৳{price.toLocaleString()}
              </span>
              <span className="badge badge-success text-xs">
                {percentage}% OFF
              </span>
            </>
          ) : (
            <span className="text-primary text-lg font-bold">
              ৳{price.toLocaleString()}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-col justify-center gap-2">
          <CartButton product={{ ...product, _id: product._id.toString() }} />
          <Link className="w-full" href={`/products/${product._id}`}>
            <button className="btn btn-sm w-full gap-2 border-[#F7962F] bg-white text-[#F7962F] hover:bg-[#F7962F] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;