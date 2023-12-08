import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../utils/constants";


const rangeSwiper = () => {
  // Инициализация Swiper с автоматической высотой, горизонтальным направлением и одним видимым слайдом за раз
  const swiper = new Swiper('.range__swiper', {
    slidesPerView: 1,
    effect: "fade",
   allowTouchMove: false,
   fadeEffect: {
    crossFade: true
     },
     speed: 2000,
    spaceBetween: 0,
    direction: 'horizontal',
    // Отключен скроллбар Swiper
    // scrollbar: {
    //   el: '.range__swiper-scrollbar',
    //   dragSize: rem(11.3),
    // },
    // Обработчик события смены слайда для обновления ширины и позиции ползунка
    on: {
      slideChange: function () {
        updateScrollbarWidth();
      },
    },
  });

  // Элементы навигации
  const navItems = document.querySelectorAll('.range__swiper-nav-item');
  // Элемент ползунка скроллбара
  const scrollbarDrag = document.querySelector('.range__swiper-scrollbar-drag');

  // Функция для обновления ширины и позиции ползунка
  function updateScrollbarWidth() {
    // Удаление класса 'isActive' у текущего активного элемента навигации
    const activeNavItem = document.querySelector('.range__swiper-nav-item.isActive');
    if (activeNavItem) {
      activeNavItem.classList.remove('isActive');
    }

    // Получение индекса текущего слайда и соответствующего элемента навигации
    const currentSlideIndex = swiper.activeIndex;
    const newActiveNavItem = navItems[currentSlideIndex];
    // Добавление класса 'isActive' новому активному элементу навигации
    newActiveNavItem.classList.add('isActive');

    // Получение ширины и позиции нового активного элемента навигации
    const width = newActiveNavItem.offsetWidth;
    const left = newActiveNavItem.offsetLeft;
    // Установка ширины ползунка
    scrollbarDrag.style.width = `${width}px`;

    // Рассчет максимального значения translateX, чтобы удерживать ползунок в пределах скроллбара
    const maxTranslateX = scrollbarDrag.parentElement.offsetWidth - scrollbarDrag.offsetWidth;
    const translateX = Math.min(left, maxTranslateX);
    // Установка позиции ползунка
    scrollbarDrag.style.transform = `translateX(${translateX}px)`;
  }

  // Установка начальной ширины ползунка (ваше значение 11.3rem)
  scrollbarDrag.style.width = `11.3rem`;

  // Обработчик клика на элемент навигации
  navItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      // Переход к указанному слайду при клике на элемент навигации
      swiper.slideTo(index);
      // Получение ширины и позиции элемента навигации
      const width = item.offsetWidth;
      const left = item.offsetLeft;
      // Установка ширины и позиции ползунка
      scrollbarDrag.style.width = `${width}px`;
      scrollbarDrag.style.transform = `translateX(${left}px)`;

      // Удаление класса 'isActive' у всех элементов навигации и добавление его к выбранному элементу
      navItems.forEach((item) => {
        item.classList.remove('isActive');
      });
      item.classList.add('isActive');
    });
  });
};






export default rangeSwiper