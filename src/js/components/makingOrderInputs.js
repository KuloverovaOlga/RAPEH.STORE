const makingOrderInputs = () => {
    function validateForm() {
        const inputs = document.querySelectorAll('.making-order__form-input');
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        return isValid;
    }

    function updateButtonClass() {
        const makingOrderButton = document.querySelector('.making-order__cheque-btn');

        if (validateForm()) {
            makingOrderButton.classList.remove('_disactive');
        } else {
            makingOrderButton.classList.add('_disactive');
        }
    }

    const orderInputs = document.querySelectorAll('.making-order__form-input');

    orderInputs.forEach((input) => {
        input.addEventListener('change', updateButtonClass);
    });

    updateButtonClass(); // Может быть не нужно, если все поля начинаются пустыми или заполненными
};

export default makingOrderInputs;
