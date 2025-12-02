"use client"
import { ICategory } from '@/type';
import { useRouter } from 'next/navigation';
import  { useState } from 'react'

const CategoryList = ({categories}:{categories:ICategory[]}) => {
      const [activeCategory, setActiveCategory] = useState("electronics");
      const router = useRouter();

      const handleCategory = (category: string) => {
        setActiveCategory(category);
        router.push(`?category=${category}`, { scroll: false });
      };
    
  return (
     <div className="flex-col w-full  items-center pmd:px-0 my-6" >
         <div className="flex-shrink-0">
        <h2 className="[font-family:'Roboto',Helvetica] font-normal text-xl md:text-[28px] tracking-[0] leading-[normal]">
          <span className="text-[#00c9d6]">Best </span>
          <span className="text-[#212425]">Deals</span>
        </h2>
      </div>

      <nav className="flex items-center gap-2 md:gap-[11px] flex-1 overflow-x-auto">
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategory(category.name)}
            className="flex flex-col items-center gap-[11px] relative group"
          >
            <span
              className={`[font-family:'Roboto',Helvetica] font-normal text-sm md:text-[19px] tracking-[0] leading-[35px] whitespace-nowrap ${
                activeCategory === category.name ? "text-[#00c9d6]" : "text-black"
              }`}
            >
              {category.name.toLocaleUpperCase()}
            </span>
            {activeCategory === category.name && (
              <div className="w-full h-[3px] bg-[#00c9d6]" />
            )}
          </button>
        ))}
      </nav>

      
      </div>
  )
}

export default CategoryList