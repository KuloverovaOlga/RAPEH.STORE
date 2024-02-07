// const notification = () => {
//     const productCardBasket = document.querySelectorAll('.product-card__basket');
//     const productCardLike = document.querySelectorAll('.product-card__like-box');
//     const notification = document.querySelector('.notification');

//     productCardBasket.forEach((item) => {
//         item.addEventListener('click', function (e) {
//             e.preventDefault();
//             item.closest(".product-card").classList.toggle("isBasket");
//             if (item.closest(".product-card").classList.contains("isBasket")) {
//                 notification.classList.add('_show');

//                 setTimeout(function () {
//                     notification.classList.remove('_show');
//                 }, 2000);
//             }
//         });
//     });

//     productCardLike.forEach((item) => {
//         item.addEventListener('click', function (e) {
//             e.preventDefault();
//             item.closest(".product-card").classList.toggle("isFavorite");
//         })})
// };
// export default notification;
