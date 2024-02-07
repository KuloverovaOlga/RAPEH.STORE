const burgerMenu = () => {

        const burger = document.querySelector('.burger');
        const navWrapper = document.querySelector('.header');
        const nav = document.querySelector('.header__desk-nav');
    
        function openBurger() {
            document.body.style.overflow = 'hidden';
            navWrapper.classList.remove('fixed-nav');
            burger.classList.add('active');
            nav.classList.add('active');

        }
    
        function closeBurger() {
            document.body.style.overflow = '';
            burger.classList.remove('active');
            nav.classList.remove('active');
      
        }
    
        burger.addEventListener('click', () => {
            burger.classList.contains('active') ? closeBurger() : openBurger();
        });

        nav.addEventListener('click', (e) => {
    
            if (e.target.classList.contains('header__link') || e.target.classList.contains('header__close-btn'))  {
                closeBurger();
              
            }

        });

        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                closeBurger()
            }
        })

    };
    


export default burgerMenu