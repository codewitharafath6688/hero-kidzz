import { getCart } from "@/actions/server/cart";
import Cart from "@/components/cart/Cart";
import Link from "next/link";
import React from "react";

const CartPage = async () => {
  const cartItems = await getCart();

  const formattedCartItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 60 : 0;
  const totalPrice = subtotal + shipping;

  return (
    <section className="bg-base-100 py-8 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-8 rounded-2xl border border-base-300 bg-base-200/50 p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="h-14 w-1 rounded-full bg-primary" />
            <div>
              <h1 className="text-3xl font-bold text-base-content md:text-4xl">
                My Cart
              </h1>
              <p className="mt-2 text-sm text-base-content/70 md:text-base">
                <span className="font-semibold text-primary">
                  {cartItems.length}
                </span>{" "}
                product types •{" "}
                <span className="font-semibold text-primary">{totalItems}</span>{" "}
                total items added
              </p>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-base-content">
              Your cart is empty
            </h2>
            <p className="mt-2 text-base-content/70">
              Add some products to see them here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              {cartItems.map((cartItem) => (
                <Cart key={cartItem._id.toString()} cartItem={cartItem} />
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-base-300 bg-base-100 shadow-lg">
                  <div className="border-b border-base-300 px-5 py-4">
                    <h2 className="text-xl font-bold text-base-content">
                      Order Summary
                    </h2>
                    <p className="mt-1 text-sm text-base-content/60">
                      Review your cart before checkout
                    </p>
                  </div>

                  <div className="space-y-4 px-5 py-4">
                    <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <div
                          key={item._id.toString()}
                          className="flex items-start justify-between gap-3 border-b border-base-200 pb-3"
                        >
                          <div className="min-w-0 flex-1">
                            <h3 className="line-clamp-1 text-sm font-semibold text-base-content">
                              {item.productTitle}
                            </h3>
                            <p className="mt-1 text-xs text-base-content/60">
                              Qty: {item.quantity} × ৳{item.price}
                            </p>
                          </div>

                          <p className="text-sm font-semibold text-base-content">
                            ৳{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-base-content/70">Items</span>
                        <span className="font-medium">{totalItems}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-base-content/70">Subtotal</span>
                        <span className="font-medium">
                          ৳{subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-base-content/70">Shipping</span>
                        <span className="font-medium">
                          ৳{shipping.toFixed(2)}
                        </span>
                      </div>

                      <div className="divider my-1" />

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-base-content">
                          Total Price
                        </span>
                        <span className="text-2xl font-extrabold text-primary">
                          ৳{totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={"/checkOut"}
                      disabled={!cartItems.length}
                      className="btn btn-primary mt-2 w-full rounded-xl text-base font-semibold"
                    >
                      Confirm Order
                    </Link>

                    <p className="text-center text-xs text-base-content/50">
                      Taxes and delivery charges may apply at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
