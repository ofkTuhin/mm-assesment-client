"use client";

import React, { useState } from "react";
import { FaHeart as Heart, FaShoppingCart as ShoppingCart, FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/type";
import ProductList from "@/components/ProductList";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";





export const ProductPage = ({ product, relatedProducts }:{ product: IProduct, relatedProducts: IProduct[]}): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optionally show a success message or notification
  };





  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center bg-[#f5f5f5] rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4 md:p-8"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#212425] mb-3 md:mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i < Math.floor(product.rating.rate)
                          ? "fill-[#ffc107] text-[#ffc107]"
                          : "fill-[#e0e0e0] text-[#e0e0e0]"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1l2.939 6.21h6.72l-5.44 3.96 2.079 6.33-5.298-3.84-5.298 3.84 2.079-6.33-5.44-3.96h6.72z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-[#687474]">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00c9d6]">
                  RS {product.price.toLocaleString()}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#687474] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 border-t pt-4 md:pt-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-center sm:justify-start border border-[#e0e0e0] rounded-lg w-full sm:w-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 md:p-3 text-[#687474] hover:text-[#00c9d6]"
                >
                  <Minus size={18} className="md:w-5 md:h-5" />
                </button>
                <span className="px-4 py-2 font-semibold text-[#212425] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 md:p-3 text-[#687474] hover:text-[#00c9d6]"
                >
                  <Plus size={18} className="md:w-5 md:h-5" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-11 md:h-12 bg-[#14adb6] hover:bg-[#14adb6]/90 text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} className="md:w-5 md:h-5" />
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">Add</span>
              </Button>

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2.5 md:p-3 border rounded-lg transition-colors ${
                  isFavorite
                    ? "bg-[#00c9d6] border-[#00c9d6] text-white"
                    : "border-[#e0e0e0] text-[#687474] hover:text-[#00c9d6]"
                }`}
              >
                <Heart size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 md:mt-16 lg:mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#212425] mb-6 md:mb-8">
            Related Products
          </h2>
          <ProductList products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
