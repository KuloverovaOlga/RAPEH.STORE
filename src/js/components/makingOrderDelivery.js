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

    const lists = document.querySelectorAll('.making-order__delivery-second-list')

    lists.forEach(item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            let btns = item.querySelectorAll('.making-order__delivery-second-btn')
            if (target.classList.contains('making-order__delivery-second-btn')) {
                btns.forEach(btn => {
                    btn.classList.remove('active')
                })
                target.classList.add('active')
            }
        })
    })
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
