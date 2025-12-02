"use client";

import React from "react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus, FaTrash, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps): JSX.Element => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCartStore();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg md:text-xl font-bold text-[#212425]">
              Shopping Cart ({getTotalItems()})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes size={20} className="text-[#687474]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-[#687474] mb-4">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-lg font-semibold mb-2">Your cart is empty</p>
                  <p className="text-sm">Add items to get started!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-20 h-20 bg-[#f5f5f5] rounded-lg overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-[#212425] line-clamp-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 flex-shrink-0"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>

                      <p className="text-sm font-bold text-[#00c9d6] mb-2">
                        RS {item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#e0e0e0] rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-[#687474] hover:text-[#00c9d6]"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="px-3 py-1 font-semibold text-[#212425] text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-[#687474] hover:text-[#00c9d6]"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>

                        <span className="text-sm font-semibold text-[#212425]">
                          RS {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-[#212425]">Subtotal:</span>
                <span className="text-xl font-bold text-[#00c9d6]">
                  RS {getTotalPrice().toLocaleString()}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <Link href="/cart" onClick={onClose}>
                  <Button className="w-full bg-[#14adb6] hover:bg-[#14adb6]/90 text-white font-semibold">
                    View Cart
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
