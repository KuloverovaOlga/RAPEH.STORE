import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const heroSwiper = () => {
    const swiperContainer = document.querySelector('.hero__swiper');
    const paginationContainer = document.querySelector('.swiper-pagination');
    
    const swiperOne = new Swiper(swiperContainer, {
        slidesPerView: 1,
        effect: "fade",
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
             },
             speed: 1000,
        pagination: {
            el: paginationContainer,
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        on: {
            init: function () {
                updatePagination(this);
            },
            slideChange: function () {
                updatePagination(this);
            },
        },
    });

    function updatePagination(swiper) {
        const bullets = paginationContainer.querySelectorAll('.swiper-pagination-bullet');
        console.log(bullets)
        const numSlides = swiper.slides.length;
        const activeIndex = swiper.realIndex;

        bullets.forEach((bullet, index) => {
            bullet.classList.remove('custom-bullet-active', 'custom-bullet-active-next', 'custom-bullet-active-prev');

            let position = index - activeIndex;

            if (position < 0) {
                position += numSlides;
            }
        
            if (position > 2 || position < 0) {
                bullet.style.display = 'none';
            } else {
                bullet.style.display = 'flex';
            }
        
   
        });
    }



}

export default heroSwiper;





















