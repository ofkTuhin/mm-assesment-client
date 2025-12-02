import React from 'react';
// import { ProductPage } from '../ProductPage';
import { fetchApi } from '@/lib/fetchApi';
import { ProductPage } from '../ProductPage';


interface PageProps {
  params: {
    id: string;
  };
}

const Page = async({ params }: PageProps) => {
  const { id } = await params;

  const getSingleProduct =  await fetchApi(`products/${id}`);
  if(!getSingleProduct) {
    return <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-lg text-red-500">Product not found</div>
    </div>
  }
  const relatedProducts = await fetchApi(`products/category/${getSingleProduct.category}?limit=6`);

  
  return <ProductPage product={getSingleProduct} relatedProducts={relatedProducts} />;
 
};

export default Page;