import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { fetchApi } from "@/lib/fetchApi";
import { ICategory } from "@/type";

export const CategoryListSection = async () => {
  const categoryData = await fetchApi("products/categories") as ICategory[];
  
  return (
    <section className="w-full flex items-center justify-center py-4 sm:py-6 md:py-8 bg-[linear-gradient(180deg,rgba(243,237,201,1)_0%,rgba(255,255,255,0)_100%)]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-2 sm:mt-3 md:mt-4">
        <h2 className="w-full [font-family:'Century_Gothic-Regular',Helvetica] font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 sm:mb-5 md:mb-6">
          <span className="text-[#00c9d6]">Featured </span>
          <span className="text-black">Categories</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {categoryData?.map((category: ICategory) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow rounded-full">
              <CardContent className="p-3 sm:p-4 md:p-5 flex items-center justify-center rounded-full">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center">{category.name.toLocaleUpperCase()}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
