"use client";

import React from "react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const CartPage = (): JSX.Element => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#212425] mb-4">
            Your cart is empty
          </h2>
          <p className="text-[#687474] mb-6">
            Start adding items to your cart!
          </p>
          <Link href="/">
            <Button className="bg-[#14adb6] hover:bg-[#14adb6]/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#212425]">
                Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
              </h1>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-full sm:w-24 md:w-32 h-32 bg-[#f5f5f5] rounded-lg overflow-hidden relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-base md:text-lg font-semibold text-[#212425] mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#687474] mb-2">
                              Category: {item.category}
                            </p>
                            <p className="text-lg md:text-xl font-bold text-[#00c9d6]">
                              RS {item.price.toLocaleString()}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 p-2 h-fit"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center border border-[#e0e0e0] rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-[#687474] hover:text-[#00c9d6]"
                            >
                              <FaMinus size={14} />
                            </button>
                            <span className="px-4 py-2 font-semibold text-[#212425] min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-[#687474] hover:text-[#00c9d6]"
                            >
                              <FaPlus size={14} />
                            </button>
                          </div>

                          <div className="text-sm text-[#687474]">
                            Subtotal: <span className="font-semibold text-[#212425]">
                              RS {(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#212425] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#687474]">
                    <span>Subtotal</span>
                    <span className="font-semibold">RS {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#687474]">
                    <span>Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg font-bold text-[#212425]">
                    <span>Total</span>
                    <span className="text-[#00c9d6]">RS {getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full bg-[#14adb6] hover:bg-[#14adb6]/90 text-white font-semibold py-6">
                  Proceed to Checkout
                </Button>

                <Link href="/">
                  <Button variant="outline" className="w-full mt-3">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
