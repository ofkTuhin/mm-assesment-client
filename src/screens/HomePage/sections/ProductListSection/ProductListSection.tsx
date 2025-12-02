
import { fetchApi } from "@/lib/fetchApi";
import ProductList from "@/components/ProductList";
import { IProduct } from "@/type";


export const ProductListSection = async() => {
  const products= await fetchApi("/products?limit=10") as IProduct[]

 
  return (
       <section className=" w-full items-center gap-4 px-4 md:px-8 lg:px-16 py-8 md:py-[46px] bg-white">
    {/* Title */}

      <div className="flex w-full  items-center px-4 md:px-0 mb-6">
      <h2 className="w-full [font-family:'Century_Gothic-Regular',Helvetica] font-normal text-xl md:text-[28px]">
        <span className="text-[#00c9d6]">New </span>
        <span className="text-black">Arrivals</span>
      </h2>
    </div>
 

    <ProductList products={products} />
   

  </section>
   
  );
};
 