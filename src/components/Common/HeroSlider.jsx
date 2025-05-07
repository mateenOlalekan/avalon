import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../assets/image/Fashion.jpeg";
import img2 from "../../assets/image/Gadget.jfif";
import img3 from "../../assets/image/Furniture.jpg";

const slides = [
  {
    id:1,
    image: img1,
    title: "Summer Collection 2025",
    description: "Discover the latest products with personalized !",
    cta: "Shop Now",

  },
  {
    id:1,
    image: img1,
    title: "New Arrivals",
    description: "Discover the latest products with personalized !",
    cta: "Shop Now",

  },
  {
    id: 2,
    image: img1,
    title: "New Arrivals",
    description: "Discover the latest fashion trends now!",
    cta: "Shop Now",
  },
  {
    id: 3,
    image: img2,
    title: "Latest Tech Gadgets ",
    description: "Up to 40% off on the latest electronics and gadgets. Limited time offer!",
    cta: "Explore Now",
  },
  {
    id: 4,
    image: img3,
    title: "Home & Living Essentials",
    description: "Transform your space with our curated collection of home decor and furniture.",
    cta: "Explore Collection",
  },
];

const HeroSlider = () => {
  return (
    <div className="lg:w-10/12 w-full relative h-[455px] rounded-xl overflow-hidden ">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{ clickable: true }}    
        autoplay={{ delay: 4000 }}   
        loop={true}
        effect="fade" 
        className="w-full "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[455px] rounded-xl overflow-hidden">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[630px] object-cover"
                loading="
                lazy"
                style={{ filter: "brightness(0.8)" }}
                
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center py-6 px-15 text-white">
                <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-lg md:text-xl">{slide.description}</p>
                <button className="mt-4 bg-green-600 hover:bg-green-600 transition-all duration-500 text-white font-semibold px-6 py-2 rounded-full ">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="hero-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800/60 hover:bg-gray-800/90 text-white p-2 rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800/60 hover:bg-gray-800/90 text-white p-2 rounded-full">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
