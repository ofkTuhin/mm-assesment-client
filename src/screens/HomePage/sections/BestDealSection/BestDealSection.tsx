import React from "react";

import { fetchApi } from "@/lib/fetchApi";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import { ICategory, IProduct } from "@/type";
import CategoryList from "@/components/CategoryList";



export const BestDealSection =async ({category}:{category:string}) => {

  const products= await fetchApi(`products/category/${category|| "electronics"}`) as IProduct[];
  const categories= await fetchApi(`products/categories`) as ICategory[]; 
  console.log({categories})



  return (
       <section className="flex flex-col  w-full items-center  gap-4 relative px-4 md:px-8 lg:px-16  py-4">
     <CategoryList categories={categories} />
      <ProductList products={products} />
    </section>
    
  );
};
