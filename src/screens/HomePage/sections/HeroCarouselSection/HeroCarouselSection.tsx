import { Carousel } from "../../../../components/Carousel";

const heroSlides = [
  {
    id: "slide-1",
    image: "/hero/hero-banner.png",
    title: "Shop Computer & experiences",
    description: "You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.",
  },
  {
    id: "slide-2",
    image: "/hero/hero-banner-1.jpg",
    title: "Exclusive Offers",
    description: "Limited time deals on your favorite products",
  },
  {
    id: "slide-3",
    image: "/hero/hero-banner-2.jpg",
    title: "Shop with Confidence",
    description: "Authentic products with easy returns",
  },
];

export const HeroCarouselSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="w-full  mx-auto ">
        <Carousel
          slides={heroSlides}
          autoplay={false}
          autoplayInterval={5000}
        />
      </div>
    </section>
  );
};
