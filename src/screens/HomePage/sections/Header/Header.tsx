import {
  FaChevronDown as ChevronDownIcon,
  FaHeadphones as HeadphonesIcon,
  FaHeart as HeartIcon,
  FaSearch as SearchIcon,

  FaUser as UserIcon,
} from "react-icons/fa";
import { CiShoppingCart as ShoppingCartIcon } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full bg-[#02474c] px-4 md:px-8 lg:px-16 py-4">
      <div className="flex flex-col gap-3 mx-auto max-w-[1400px]">
        {/* Top Row - Logo and Icons on Mobile, Full Layout on Desktop */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Always visible */}
          <Link href="/" className="relative flex-shrink-0">
            <div className="relative w-[100px] sm:w-[134.5px] h-10 sm:h-12">
              <Image
                src="/vector-1.svg"
                alt="Winstore Logo"
                width={92}
                height={29}
                className="absolute top-[7px] sm:top-[9px] -left-0.5 w-[68px] sm:w-[92px] h-[22px] sm:h-[29px]"
                priority
              />
              <div className="absolute top-[33px] sm:top-[41px] left-[19px] sm:left-[26px] w-[5px] sm:w-[7px] h-[5px] sm:h-[7px] bg-white rounded-[3.5px]" />
              <div className="absolute top-[33px] sm:top-[41px] left-8 sm:left-11 w-[5px] sm:w-[7px] h-[5px] sm:h-[7px] bg-white rounded-[3.5px]" />
              <div className="absolute top-0 left-[45px] sm:left-[60px] w-[5px] sm:w-[7px] h-[5px] sm:h-[7px] bg-white rounded-[3.5px]" />
              <div className="absolute top-[7px] sm:top-[9px] left-[70px] sm:left-[94px] h-5 sm:h-6 flex items-center justify-center [font-family:'Acme',Helvetica] font-normal text-white text-[14px] sm:text-[19px] tracking-[0] leading-[normal]">
                store
              </div>
            </div>
          </Link>

          {/* Desktop Search Bar - Hidden on mobile */}
          <div className="relative flex-shrink-0 w-[534px] hidden lg:block">
            <div className="flex items-center bg-white rounded-md h-[39px]">
              <div className="flex items-center px-[18px] border-r border-gray-200 h-full">
                <span className="font-normal text-[#aba3a3] text-[13px] tracking-[0] leading-[normal]">
                  All categories
                </span>
                <ChevronDownIcon size={24} className="ml-2 text-[#aba3a3]" />
              </div>
              <div className="flex-1 px-4">
                <Input
                  type="text"
                  placeholder="Search for products"
                  className="border-0 h-full p-0 font-normal text-[#aba3a3] text-[13px] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button className="h-full w-[43px] rounded-l-none bg-[#b6b6b6] hover:bg-[#b6b6b6]/90">
                <SearchIcon size={20} className="text-white" />
              </Button>
            </div>
          </div>

          {/* Spacer - Desktop only */}
          <div className="flex-shrink-0 w-[134.5px] hidden lg:block" />

          {/* Contact Info - Desktop only */}
          <div className="hidden lg:flex flex-col gap-1 flex-shrink-0">
            <div className="font-normal text-white text-[9px] tracking-[0] leading-[normal]">
              Call Us Now
            </div>
            <div className="flex items-center gap-1">
              <HeadphonesIcon size={19} className="text-white" />
              <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                +011 5827918
              </span>
            </div>
            <div className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
              Sign In
            </div>
          </div>

          {/* Navigation Icons - Always visible */}
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
            <Button variant="ghost" className="hover:bg-transparent p-1.5 sm:p-2">
              <UserIcon size={20} className="sm:w-6 sm:h-6 text-white" />
            </Button>
            <Button variant="ghost" className="hover:bg-transparent p-1.5 sm:p-2">
              <HeartIcon size={20} className="sm:w-6 sm:h-6 text-white" />
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-0.5 hover:bg-transparent p-1.5 sm:p-2"
            >
              <div className="relative">
                <ShoppingCartIcon size={20} className="sm:w-6 sm:h-6 text-white" />
                <Badge className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center p-0 bg-transparent border-0 font-normal text-[#fcdd3b] text-[12px] sm:text-[15px]">
                  3
                </Badge>
              </div>
              <span className="hidden md:inline font-normal text-white text-[15px] tracking-[0] leading-[normal] ml-1">
                Cart
              </span>
            </Button>
          </nav>
        </div>

        {/* Mobile Search Bar - Full width on second line */}
        <div className="relative w-full lg:hidden">
          <div className="flex items-center bg-white rounded-md h-[36px] sm:h-[39px]">
            <div className="hidden sm:flex items-center px-3 sm:px-[18px] border-r border-gray-200 h-full">
              <span className="font-normal text-[#aba3a3] text-[11px] sm:text-[13px] tracking-[0] leading-[normal]">
                All categories
              </span>
              <ChevronDownIcon size={20} className="sm:w-6 sm:h-6 ml-1 sm:ml-2 text-[#aba3a3]" />
            </div>
            <div className="flex-1 px-3 sm:px-4">
              <Input
                type="text"
                placeholder="Search for products"
                className="border-0 h-full p-0 font-normal text-[#aba3a3] text-[11px] sm:text-[13px] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button className="h-full w-[36px] sm:w-[43px] rounded-l-none bg-[#b6b6b6] hover:bg-[#b6b6b6]/90">
              <SearchIcon size={16} className="sm:w-5 sm:h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
