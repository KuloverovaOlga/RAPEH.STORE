import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const similarProductsSwiper = () => {
  const swiperInner = new Swiper(".similar-products__swiper", {
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
    pagination: {
      el: '.similar-products__swiper .swiper-pagination',
    },
    grabCursor: true,
    navigation: {
      nextEl: ".similar-products__swiper .swiper-button-next",
      prevEl: ".similar-products__swiper .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 12,
        grid: {
          rows: 1,
        },
      },
    },
  });






};

export default similarProductsSwiper;
