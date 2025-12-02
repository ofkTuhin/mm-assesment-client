import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// The image shows small/inactive versions of these icons.
// For the final code, I'll use placeholders, but you should
// ensure you use the correct icons (Facebook, LinkedIn, Instagram).
// The image shows Twitter but the provided socialIcons array includes Twitter.

const trendingLinks = [
  "Installments",
  "Electronics",
  "Grocery",
  "Health & Beauty",
  "Home Appliances",
  "Mobile Accessories",
];

const informationLinks = [
  "About Us",
  "Contact Us",
  "FAQs",
  "Shipping & Return",
  "Privacy policy",
  "Terms & Conditions",
];

const customerCareLinks = [
  "My Account",
  "Track Your Order",
  "Recently Viewed",
  "Wishlist",
  "Compare",
  "Become a Vendor",
];

// Reordering/Filtering based on the image: Facebook, LinkedIn, Instagram
// Using react-icons for social media icons
const socialIcons = [
  { Icon: FaFacebook, label: "Facebook", url: "#" },
  { Icon: FaLinkedin, label: "LinkedIn", url: "#" },
  { Icon: FaInstagram, label: "Instagram", url: "#" },
];

export const FooterSection = (): JSX.Element => {
  // Define image paths for payment methods (you must ensure these paths are correct in your project)
  const paymentIcons = [
    { src: "/footer/Frame 317.png", alt: "Visa" },
    { src: "/footer/Frame 323.png", alt: "Mastercard" },
    { src: "/footer/Frame 322.png", alt: "Cash on Delivery" },
    { src: "/footer/MASTER.png", alt: "Easy Installment Plans" },
  ];

  return (
    <footer className="w-full bg-[#393939]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-3/4 lg:mx-auto py-8 md:py-10 lg:px-[106px]">
        {/* Main content grid - Stack on mobile, grid on tablet+, flex on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-8 md:gap-10 lg:gap-6">
          {/* Column 1: Contact Info and Socials */}
          <div className="flex flex-col gap-3.5 lg:max-w-[250px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[134.5px] h-12">
                <Image
                  src="/vector-1.svg"
                  alt="Winstore Logo"
                  width={92}
                  height={29}
                  className="absolute top-[9px] -left-0.5 w-[92px] h-[29px]"
                />
                <div className="top-2.5 left-[94px] absolute h-[22px] flex items-center justify-center font-normal text-white text-[19px] tracking-[0] leading-[normal] whitespace-nowrap">
                  store
                </div>
              </div>
            </Link>

            <div className="font-normal text-sm sm:text-base md:text-lg tracking-[0.20px] leading-[17px]">
              <span className="text-[#00c9d6] tracking-[0.04px]">
                Got questions? Call us 24/7!
              </span>
            </div>

            <div className="font-normal text-white text-xs md:text-[13px] tracking-[0.20px] leading-[17px] mt-1">
              03 111 666 144 <br />
              0317 1777015.
            </div>

            <div className="font-normal text-sm sm:text-base md:text-lg tracking-[0.20px] leading-[17px] mt-2">
              <span className="text-[#00c9d6] tracking-[0.04px]">
                Contact info
                <br />
              </span>
              <span className="text-white text-sm md:text-[15px] tracking-[0.03px]">
                info@winstore.pk
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialIcons.map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Trending Links */}
          <div className="flex flex-col gap-4 md:gap-[21px]">
            <h3 className="font-normal text-[#00c9d6] text-base sm:text-lg md:text-xl tracking-[0] leading-[normal]">
              Trending
            </h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              {trendingLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-normal text-white text-xs md:text-[13px] tracking-[0] leading-[normal] hover:text-[#00c9d6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Information Links */}
          <div className="flex flex-col gap-4 md:gap-[21px]">
            <h3 className="font-normal text-[#00c9d6] text-base sm:text-lg md:text-xl tracking-[0] leading-[normal]">
              Information
            </h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              {informationLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-normal text-white text-xs md:text-[13px] tracking-[0] leading-[normal] hover:text-[#00c9d6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Customer Care */}
          <div className="flex flex-col gap-4 md:gap-[21px]">
            <h3 className="font-normal text-[#00c9d6] text-base sm:text-lg md:text-xl tracking-[0] leading-[normal]">
              Customer Care
            </h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              {customerCareLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-normal text-white text-xs md:text-[13px] tracking-[0] leading-[normal] hover:text-[#00c9d6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Payment Icons - Responsive layout */}
        <div className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-6 justify-center lg:justify-end">
          {paymentIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              height={60}
              width={80}
              alt={icon.alt}
              className="rounded-sm shadow-md object-contain h-[50px] w-[70px] md:h-[60px] md:w-[80px] lg:h-[70px] lg:w-[90px]"
            />
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-black py-3 md:py-4 px-4 md:px-8 lg:px-[106px]">
        <div className="text-white text-xs sm:text-sm font-normal tracking-[0.20px] leading-[17px] text-center lg:text-left">
          © 2021 Winstore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// Re-exporting the component is good practice if this is an index file
// export default FooterSection;