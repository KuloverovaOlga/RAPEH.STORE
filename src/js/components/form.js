import './formModal';
import { formFieldsInit, formSubmit } from './formModal';

window.$ = window.jQuery = require('jquery');

const form = () => {
    // form fields
    formFieldsInit({ viewPass: true });

    // submit form
    formSubmit();

    const codeInputs = document.querySelectorAll('.popup__fields-num');
    // Функция для обработки ввода в каждом поле
    function handleInput(index) {
        if (codeInputs[index - 1].value && index < codeInputs.length) {
            // Автоматически переключаем фокус на следующее поле
            codeInputs[index].focus();
        }
    }
    codeInputs.forEach((item, i) => {
        item.addEventListener('input', () => {
            handleInput(i + 1);
        });
        item.addEventListener('focus', () => {
            // Проверяем предыдущие инпуты на наличие незаполненных данных
            for (let j = i - 1; j >= 0; j--) {
                if (codeInputs[j].value === '') {
                    // Если находим незаполненный инпут, перенаправляем фокус на него
                    codeInputs[j].focus();
                    break;
                }
            }
        });
    });

    const firstInput = codeInputs[0];

    // Добавляем обработчик события для вставки кода в первый инпут
    firstInput.addEventListener('paste', (event) => {
        // Предотвращаем стандартное поведение вставки
        event.preventDefault();

        // Получаем вставленный текст
        const pastedText = (event.clipboardData || window.clipboardData).getData('text');

        // Разбиваем текст на отдельные символы
        const characters = pastedText.split('');

        // Перебираем все инпуты и устанавливаем значение
        codeInputs.forEach((input, index) => {
            if (characters[index]) {
                input.value = characters[index];
                input.classList.remove('_form-error');
                input.classList.add('_filled');
                input.parentElement.classList.remove('_form-error');
            }
        });

        if (characters.length > codeInputs.length || characters.length == codeInputs.length) {
            codeInputs[codeInputs.length - 1].focus();
        }
        if (characters.length < codeInputs.length) {
            codeInputs[characters.length - 1].focus();
        }
    });

    codeInputs.forEach((item, i) => {
        item.addEventListener('input', () => {
            handleInput(i + 1);
        });

        item.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && item.value === '') {
                if (i > 0) {
                    codeInputs[i - 1].focus();
                }
            }
        });
    });

    const passFirst = document.querySelectorAll('.popup__label--pass-first input');
    const passRepeat = document.querySelectorAll('.popup__label--pass-repeat input');

    function passRep(i) {
        const inputValue = passRepeat[i].value.trim();
        const inputFirstValue = passFirst[i].value.trim();
        const parent = passRepeat[i].parentElement.parentElement;
        const span = parent.nextElementSibling;

        if (inputValue !== inputFirstValue) {
            span.classList.add('active');
            parent.classList.add('_form-error');
        } else {
            span.classList.remove('active');
            parent.classList.remove('_form-error');
        }
    }

    function passFir(i) {
        const inputValue = passFirst[i].value.trim();
        const parent = passFirst[i].parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я0-9]{8,}$/.test(inputValue) && inputValue != '') {
            parent.classList.add('_form-error');
        } else {
            parent.classList.remove('_form-error');
        }
    }
    passFirst.forEach((item, i) => {
        item.addEventListener('input', () => {
            passRep(i);
            passFir(i);
        });
        item.addEventListener('blur', () => {
            passRep(i);
            passFir(i);
        });
    });
    passRepeat.forEach((item, i) => {
        item.addEventListener('input', () => {
            passRep(i);
        });
        item.addEventListener('blur', () => {
            passRep(i);
        });
    });

    const tel = document.querySelectorAll('.input--tel');

    tel.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.parentElement.nextElementSibling;
            const parent = item.parentElement.parentElement;

            if (!/^[0-9 ()+]+$/.test(inputValue) && inputValue != '') {
                span.classList.add('active');
                parent.classList.add('_form-error');
            } else if (inputValue.length < 11) {
                parent.classList.add('_form-error');
            } else {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        });
    });
    const mail = document.querySelectorAll('.input--mail');

    mail.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const parent = item.parentElement.parentElement;

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
                parent.classList.add('_form-error');
            } else {
                parent.classList.remove('_form-error');
            }
        });
    });

    const name = document.querySelectorAll('.input--name');
    name.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.parentElement.nextElementSibling;
            const parent = item.parentElement.parentElement;
   
            if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) && inputValue != '') {
                span.classList.add('active');
                parent.classList.add('_form-error');
            } else {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        });
    });
    const dropdown = document.querySelectorAll('.input-dropdown');
   
    dropdown.forEach((item) => {
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;
        item.addEventListener('change', () => {
            let radio = item.closest('.form__dropdown_top').nextElementSibling.querySelectorAll('input');

            radio.forEach((ra) => {
                if (ra.checked) {
                    span.classList.remove('active');
                    parent.classList.remove('_form-error');
                } else {
                    span.classList.add('active');
                    parent.classList.add('_form-error');
                }
            });

            // if(item.classList.contains('input-dropdown--locality'))
            // if(item.classList.contains('input-dropdown--street'))
        });
        item.addEventListener('blur', () => {
            setTimeout(() => {
                if (item.classList.contains('filled') && item.value) {
                    span.classList.remove('active');
                    parent.classList.remove('_form-error');

                    if (item.classList.contains('input-dropdown--region')) {
                        const locality = item.closest('.making-order__delivery-third-form').querySelector('.input-dropdown--locality');
           
                        const street = item.closest('.making-order__delivery-third-form').querySelector('.input-dropdown--street');
             
                        const localitySpan = locality.parentElement.nextElementSibling;
                        const localityParent = locality.parentElement.parentElement;
                        const streeSpan = street.parentElement.nextElementSibling;
                        const streetParent = street.parentElement.parentElement;
                        if (locality.value) {
                            locality.value = '';
                            localitySpan.classList.add('active');
                            localityParent.classList.add('_form-error');
                            localityParent.classList.remove('filled');
                        }
                        if (street.value) {
                            street.value = '';
                            streeSpan.classList.add('active');
                            streetParent.classList.add('_form-error');
                            streetParent.classList.remove('filled');
                        }
                    }

                    if (item.classList.contains('input-dropdown--locality')) {
                        const street = item.closest('.making-order__delivery-third-form').querySelector('.input-dropdown--street');
                        const streeSpan = street.parentElement.nextElementSibling;
                        const streetParent = street.parentElement.parentElement;
                        if (street.value) {
                            street.value = '';
                            streeSpan.classList.add('active');
                            streetParent.classList.add('_form-error');
                            streetParent.classList.remove('filled');
                        }
                    }
                } else {
                    span.classList.add('active');
                    parent.classList.add('_form-error');
                    item.classList.remove('filled');
                }
            }, 200);
        });
        item.addEventListener('input', () => {
            let radio = item.closest('.form__dropdown_top').nextElementSibling.querySelectorAll('input');

            radio.forEach((ra) => {
                ra.checked = false;
            });
            span.classList.add('active');
            parent.classList.add('_form-error');
            item.classList.remove('filled');
        });
    });

    const required = document.querySelectorAll('.popup__label--required input, .popup__label--required textarea');

    required.forEach((item) => {
        item.addEventListener('blur', () => {
            const inputValue = item.value.trim();

            if (inputValue === '' || item.parentElement.parentElement.classList.contains('_form-error')) {
                item.parentElement.querySelector('.star').style.opacity = 1;
            } else {
                item.parentElement.querySelector('.star').style.opacity = 0;
            }
        });
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();

            if (inputValue === '' || item.parentElement.parentElement.classList.contains('_form-error')) {
                item.parentElement.querySelector('.star').style.opacity = 1;
            } else {
                item.parentElement.querySelector('.star').style.opacity = 0;
            }
        });
    });

    function setupFormListener(formSelector, submitButtonSelector) {
        const form = document.querySelector(formSelector);
        const submitButton = document.querySelector(submitButtonSelector);

        const formElements = form.querySelectorAll('input[data-required], textarea[data-required]');
   
        const formElementCheckbox = form.querySelectorAll('.popup__input-checkbox');
        const formElementsParents = form.querySelectorAll('.input-group');
        const formElementsLabel = form.querySelectorAll('.popup__label');

        function updateSubmitButtonState() {
            const isEmpty = Array.from(formElements).some((element) => {
                return element.value.trim() === '';
            });
            const formError = Array.from(formElementsParents).some((element) => {
                return element.classList.contains('_form-error');
            });
            const formErrorLabel = Array.from(formElementsLabel).some((element) => {
                return element.classList.contains('_form-error');
            });
            const formErrorCheckbox = Array.from(formElementCheckbox).some((element) => {
                return !element.checked;
            });

            // Устанавливаем или удаляем атрибут disabled в зависимости от условия
            if (isEmpty || formError || formErrorLabel || formErrorCheckbox) {
                submitButton.setAttribute('disabled', 'disabled');
            } else {
                submitButton.removeAttribute('disabled');
            }
        }

        formElements.forEach((element) => {
            element.addEventListener('input', updateSubmitButtonState);
        });

        updateSubmitButtonState();
    }

    // Использование:
    setupFormListener('.popup__entrys-personal-area-form', '.popup__body-btn-personal-area-button');
    setupFormListener('.popup__password-recovery-form', '.popup__password-recovery-body-btn');
    setupFormListener('.popup__body-registration-form', '.popup__body-btn-registration-form');
    setupFormListener('.popup__sign-up-form', '.popup__sign-up-form-btn');
    setupFormListener('.popup__review-form', '.popup__review-form-btn');
    setupFormListener('.account__table-data._form', '.account__table-data-btn._form');
    setupFormListener('.account__table-data._password', '.account__table-data-btn._password');
};

export default form;
