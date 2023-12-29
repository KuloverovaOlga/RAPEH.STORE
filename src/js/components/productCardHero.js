const productCardHero = () => {
    const button = document.querySelector('.product-hero__info-basket-favorite');

    button.addEventListener('click', () => {
        button.classList.toggle('isActive');
    });

    const parentMain = document.querySelector('.product-hero')

    if(!parentMain.classList.contains('not-available')) {
        const counterParent = document.querySelector('.product-hero__info-basket-box');
        // Находим все элементы с классом "product-hero__information-counter"
        const counter = counterParent.querySelector('.product-hero__information-counter');
    
        // Находим кнопку уменьшения и увеличения внутри текущего счетчика
        const decrementButton = counter.querySelector('.product-hero__information-counter-btn--min img');
        const incrementButton = counter.querySelector('.product-hero__information-counter-btn--plus img');
        const counterNumber = counter.querySelector('.product-hero__information-counter-number');
    
        counterParent.addEventListener('click', (e) => {
            if (e.target != counter && e.target != decrementButton && e.target != incrementButton && e.target != counterNumber) {
                counterParent.classList.add('active');
            }
        });

   
            decrementButton.onclick = function () {
                decrementCounter(counterNumber);
            };
    
            incrementButton.onclick = function () {
                incrementCounter(counterNumber);
            };
   


      
    
        // Функция для уменьшения значения счетчика
        function decrementCounter(counterNumber) {
            let currentValue = parseInt(counterNumber.innerText);
    
            // Уменьшаем значение счетчика, минимальное значение - 1
            if (currentValue > 0) {
                currentValue--;
                counterNumber.innerText = currentValue;
            }
            if (currentValue < 1) {
                counterParent.classList.remove('active');
                counterNumber.innerText = 1;
            }
        }
    
        // Функция для увеличения значения счетчика
        function incrementCounter(counterNumber) {
            let currentValue = parseInt(counterNumber.innerText);
            // Увеличиваем значение счетчика
            currentValue++;
    
            // Обновляем значение счетчика
            counterNumber.innerText = currentValue;
    
            // Обновляем класс родительского элемента
            counterParent.classList.add('active');
        }
    }


   
};

export default productCardHero;
