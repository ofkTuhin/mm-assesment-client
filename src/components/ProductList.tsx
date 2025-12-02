"use client"
import { IProduct } from '@/type'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { useCartStore } from '@/store/useCartStore'

const ProductList = ({products}:{products: IProduct[]}) => {
    const { addToCart } = useCartStore();
  
    const handleAddToCart = (product:IProduct) => {
      addToCart(product, 1);
      // Optionally show a success message or notification
    };
  
  return (

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full  gap-3 md:gap-4 lg:gap-6">
      {products?.map((product, index) => (
        <Card
          key={index}
          className="flex flex-col items-center bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition border border-[#00000021]"
        >
          <CardContent className="flex flex-col items-center gap-3 p-0 w-full">

            {/* Title */}
            <div className="text-[#034e53] text-xs md:text-sm font-normal text-center">
              {product.title}
            </div>

            {/* Product Image */}
            <div className="w-[80px] relative md:w-[150px] h-[80px] md:h-[150px] flex justify-center items-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
              <Link href={`/product/${product.id}`} className="absolute inset-0" />
            </div>

            {/* Price */}
            <div className="text-[#0aaeb8] text-sm md:text-[15px] font-normal">
              {product.price}
            </div>

            {/* Button */}
            <Button className="w-full h-[32px] md:h-[36px] text-xs md:text-sm bg-[#14adb6] hover:bg-[#14adb6]/90 text-white rounded-md" onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
   
  )
}

export default ProductList