const productCardMin = () => {
    document.querySelectorAll(".product-card__swiper").forEach(item => {
      item.addEventListener("click", (e) => {
        let target = e.target;
    
        if (target.classList.contains("product-card__like-box")) {
          e.preventDefault();
          target.closest(".product-card").classList.toggle("isFavorite");
        }
        if (target.classList.contains("product-card__basket")) {
          e.preventDefault();
          // target.closest(".product-card").classList.toggle("isBasket");
        }
      });
    })
}

export default productCardMin ()
