window.$ = window.jQuery = require('jquery');

const productCardMin = () => {
    const addBasketButton = document.querySelector('.popup__add-basket-button');
    const checkboxs = document.querySelectorAll('.popup__add-basket-info-weight-radio-label');

    const counters = document.querySelectorAll('.popup__add-basket-information-counter');

    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('product-card__like-box')) {
            e.preventDefault();
            target.closest('.product-card').classList.toggle('isFavorite');
        }
        if (target.classList.contains('product-card__basket')) {
            // $(target).unbind('click');
            e.preventDefault();
            // target.closest('.product-card').classList.toggle('isBasket');
        }
    });

    checkboxs.forEach((checkbox) => {
        checkbox.onclick = function (e) {
            const inputCheckbox = e.currentTarget.querySelector('input'); // Получаем текущий чекбокс
            const counter = e.currentTarget.parentElement.querySelector('.popup__add-basket-information-counter');
            const counterNumber = counter.querySelector('.popup__add-basket-information-counter-number');

            if (inputCheckbox.checked) {
                addBasketButton.removeAttribute('disabled');
                counterNumber.textContent = '1';
            } else {
                counterNumber.textContent = '0';
                let allUnchecked = true;
                checkboxs.forEach((item) => {
                    if (item.querySelector('input').checked) {
                        allUnchecked = false;
                    }
                });
                if (allUnchecked) {
                    addBasketButton.setAttribute('disabled', 'disabled');
                    // target.closest('.product-card').classList.remove('isBasket');
                }
            }
        };
    });

    counters.forEach((counter) => {
        counter.onclick = function (e) {
            e.stopPropagation();
            const decrementButton = counter.querySelector('.popup__add-basket-information-counter-btn--min img');
            const incrementButton = counter.querySelector('.popup__add-basket-information-counter-btn--plus img');
            let counterNumber = counter.querySelector('.popup__add-basket-information-counter-number');
            const checkBox = e.currentTarget.parentElement.querySelector('input');

            if (e.target === incrementButton) {
                incrementCounter(counterNumber, checkBox);
              
            }
            if (e.target === decrementButton) {
                decrementCounter(counterNumber, checkBox);
             
            }
            // Функция для уменьшения значения счетчика
            function decrementCounter(counterNumber, checkBox) {
                let currentValue = parseInt(counterNumber.textContent);

                // Уменьшаем значение счетчика, минимальное значение - 1
                if (currentValue > 0) {
                    currentValue--;
                    counterNumber.textContent = currentValue;
                }
                if (currentValue < 1) {
                    counterNumber.textContent = 0;
                    let allUnchecked = true;
                    if (checkBox) {
                        checkBox.checked = false;
                    }
                    checkboxs.forEach((item) => {
                        if (item.querySelector('input') && item.querySelector('input').checked) {
                            allUnchecked = false;
                        }
                    });
                    if (!checkBox || allUnchecked) {
                        addBasketButton.setAttribute('disabled', 'disabled');

                        // target.closest('.product-card').classList.remove('isBasket');
                    }
                }
            }

            // Функция для увеличения значения счетчика
            function incrementCounter(counterNumber, checkBox) {
                let currentValue = parseInt(counterNumber.textContent);

                // Увеличиваем значение счетчика
                currentValue++;

                // Обновляем значение счетчика
                counterNumber.textContent = currentValue;
                if (checkBox) {
                    checkBox.checked = 'true';
                }
                addBasketButton.removeAttribute('disabled');
            }
        };
    });


};

export default productCardMin();
