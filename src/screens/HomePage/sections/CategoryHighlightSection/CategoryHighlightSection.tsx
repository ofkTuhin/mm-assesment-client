import { FaBars as MenuIcon } from "react-icons/fa";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "Easy Monthly Installments" },
  { label: "Shop by Brands" },
  { label: "Become a Vendor" },
];

export const CategoryHighlightSection = (): JSX.Element => {
  return (
    <nav className="w-full bg-[#0e3b3d] shadow-[0px_4px_9px_#00000063]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[51px] py-2 sm:py-2.5 md:py-3 gap-2 sm:gap-3 md:gap-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-9">
          <Button
            variant="ghost"
            className="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-1.5 sm:px-2 md:px-[7px] py-1.5 sm:py-2 md:py-[7px] rounded-lg hover:bg-[#0e3b3d]/80 h-auto"
          >
            <MenuIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[13.24px] md:h-[12.27px] text-white" />
            <span className="[font-family:'Century_Gothic-Regular',Helvetica] font-normal text-white text-xs sm:text-sm md:text-base lg:text-[17px] tracking-[0] leading-[normal]">
              Browse By Category
            </span>
          </Button>

          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="[font-family:'Century_Gothic-Regular',Helvetica] font-normal text-white text-[10px] sm:text-xs md:text-[13px] tracking-[0] leading-[normal] hover:bg-[#0e3b3d]/80 h-auto px-0"
            >
              {item.label}
            </Button>
          ))}
        </div>

      
      </div>
    </nav>
  );
};
