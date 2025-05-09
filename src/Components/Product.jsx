import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Importing product images
import img1 from "/src/assets/201.jpg";
import img2 from "/src/assets/40.png";
import img3 from "/src/assets/42.png";
import img4 from "/src/assets/41.png";
import img5 from "/src/assets/5.png";

// Product array with imported images
const product = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
];

const Product = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-full mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white">PRODUCT</h2>
        <div className="w-16 h-1 mx-auto my-2"></div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {product.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-black p-4 shadow-lg rounded-xl">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="rounded-lg w-full h-85 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
