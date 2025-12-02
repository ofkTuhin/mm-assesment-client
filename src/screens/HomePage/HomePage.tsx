

import { ProductListSection } from "./sections/ProductListSection";
import { CategoryHighlightSection } from "./sections/CategoryHighlightSection";
import { CategoryListSection } from "./sections/CategoryListSection";
import { HeroCarouselSection } from "./sections/HeroCarouselSection";
import { CategoryProduct } from "./sections/CategoryProduct";


export const HomePage = async ({
  category,
}: {
  category:string;
})=> {
  return (
    <div className="bg-white w-full flex flex-col">
      <CategoryHighlightSection />

      <HeroCarouselSection />

      <CategoryListSection />

      <ProductListSection />

      <CategoryProduct  category={category}/>

    </div>
  );
};
