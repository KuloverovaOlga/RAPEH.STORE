const makingOrderDelivery = () => {
    const deliveryTypes = document.querySelectorAll('.making-order__delivery-types-element');

    deliveryTypes.forEach(function (element) {
        element.addEventListener('click', function () {
            deliveryTypes.forEach(function (el) {
                el.classList.remove('_active');
            });
            element.classList.add('_active');
        });
    });
};


// try {
//     const deliveryTypes = document.querySelectorAll('.making-order__delivery-types-element');
   
//        deliveryTypes.forEach(function (element) {
//            element.addEventListener('click', function () {
//                deliveryTypes.forEach(function (el) {
//                    el.classList.remove('_active');
//                });
//                element.classList.add('_active');
   
//    if ( element.classList.contains('_active')) {
//    setTimeout(() => {const accordionItemBody = document.querySelector('.making-order__accordion-content._delivery')
//                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'}, 300)
//    }
   
               
//            });
//        });
   
   
//        } catch {}

export default makingOrderDelivery;
