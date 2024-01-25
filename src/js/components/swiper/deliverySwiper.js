import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const deliverySwiper = () => {
  let swiperOne = null; // Объявляем переменную, чтобы хранить экземпляр Swiper

  const swiperPopularCategories = () => {
    const initSwiper = () => {
      swiperOne = new Swiper(".delivery__swiper", {
        direction: "vertical",
        slidesPerView: "3",
        loop: true,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".delivery__swiper-button-next",
          prevEl: ".delivery__swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: "auto",
            spaceBetween: 32,
            centeredSlides: true,
          },
        },
      });
    };

    const destroySwiper = () => {
      if (swiperOne !== null) {
        // swiperOne.destroy();
        swiperOne = null;
      }
    };

    if (window.innerWidth > 768) {
      initSwiper();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        if (swiperOne === null) {
          initSwiper();
        }
      } else {
        destroySwiper();
      }
    });
  };

  // Вызываем функцию инициализации Swiper
  swiperPopularCategories();

  const swiperDeliveryRibbon = new Swiper(".swiper-delivery-ribbon", {
    speed: 5000, //задаем скорость движения нашей бегущей строки
    spaceBetween: rem(2.3), // задаем отступы
    loop: true, //зацикливаем, что бы движание было бесконечным
    allowTouchMove: false, // можно ещё отключить свайп
    autoplay: {
      //задаем автоплей по умолчанию с нулевой задержкой
      delay: 0,
      disableOnInteraction: false, // отключаем возможность отлючить анимацию при касании
      reverseDirection: true,
    },
    breakpoints: {
      //стандартные настройки, котрые не так важны
      769: {
        slidesPerView: "auto",
        // reverseDirection: true,
      },
    },
  });
};

export default deliverySwiper;




