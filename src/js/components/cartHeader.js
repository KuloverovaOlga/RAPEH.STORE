const cartHeader = () => {
    const cartHeaderActived = document.querySelector('.cart-header-actived');
    const cartHeader = document.querySelector('.cart-header');

    // При нажатии на кнопку активации корзины показываем блок корзины
    cartHeaderActived.addEventListener('click', function () {
        cartHeader.classList.toggle('active');
    });

    cartHeader.style.transition = 'transform 0.3s, opacity 0.3s';

    // // При нажатии на любую часть экрана, кроме блока корзины, скрываем блок корзины
    // document.addEventListener('click', function (event) {
    //     var isClickInsideCart = cartHeader.contains(event.target);
    //     var isClickOnCartActivedButton = event.target === cartHeaderActived;

    //     if (!isClickInsideCart && !isClickOnCartActivedButton) {
    //         cartHeader.classList.remove('active');
    //     }
    // });
};

export default cartHeader;
