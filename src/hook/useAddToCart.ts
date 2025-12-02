"use client";

import { useCartStore } from '@/store/useCartStore';
import { IProduct } from '@/type';

export const useAddToCart = () => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: IProduct, quantity: number = 1) => {
    addToCart(product, quantity);
    // You can add toast notification here if you have a toast library installed
    // toast.success(`${product.title} added to cart!`);
  };

  return { handleAddToCart };
};
