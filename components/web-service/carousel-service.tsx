import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CarouselItem from "./carousel-item";
import { it } from "node:test";
type Props = {};

const arr = [
  { url: "/image/category-project/Image (2).png", alt: "123" },
  { url: "/image/category-project/Image (3).png", alt: "1234" },
  { url: "/image/category-project/Image (4).png", alt: "1235" },
  { url: "/image/category-project/Image (5).png", alt: "1236" },
  { url: "/image/category-project/Image (2).png", alt: "123" },
  { url: "/image/category-project/Image (3).png", alt: "1234" },
  { url: "/image/category-project/Image (4).png", alt: "1235" },
  { url: "/image/category-project/Image (5).png", alt: "1236" },
  { url: "/image/category-project/Image (2).png", alt: "123" },
];
const CarouselService = (props: Props) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
         400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 26,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 26,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arr.map((item) => {
          return (
            <SwiperSlide key={item.alt}>
              <CarouselItem item={item} />
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          {" "}
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CarouselService;
