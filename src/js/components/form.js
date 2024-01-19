// // import IMask from 'imask';

// // const form = (selector) => {

// //     const form = document.querySelector(selector);
// //     form.addEventListener('submit', (e) => {
// //         e.preventDefault();

// //         const name = form.querySelector('.input--name').value;

// //         function validateName(name) {form
// //             return name.trim() !== '';
// //         }

// //         if (!validateName(name)) {
// //             alert('Введите корректное имя.');
// //             return;
// //         } else {
// //             form.submit()
// //         }
// //     });

// //     const tel = form.querySelector('.input--tel')

// //     IMask(tel, {
// //         mask: '+{7}(000)000-00-00',
// //     });

// // }

// // export default form

// import { bodyLockStatus, bodyLock, bodyUnlock } from '../utils/constants';
// var $ = require('jquery');

// function closeModal(selector) {
//     document.querySelector(selector).setAttribute('aria-hidden', 'true');
//     $('html').removeClass('popup-show');
//     document.querySelector(selector).classList.remove('popup_show');
//     bodyUnlock();
// }

// function openModal(selector) {
//     document.querySelector(selector).setAttribute('aria-hidden', 'false');
//     $('html').addClass('popup-show');
//     $(selector).addClass('popup_show');
//     bodyLock();
// }

// const openModalWithPromise = (selector) => {
//     return new Promise((resolve) => {
//         openModal(selector);
//         resolve();
//     });
// };

// const form = (selector) => {
//     const form = document.querySelector(selector);
//     const name = form.querySelector('.input--name');
//     const phone = form.querySelector('.input--tel');
//     const checkbox = form.querySelector('.input--checkbox');
//     const nameError = form.querySelector('.input--name + span.error-span');
//     const phoneError = form.querySelector('.input--tel + span.error-span');

//     name.addEventListener('input', function (event) {
//         if (name.validity.valid) {
//             nameError.innerText = '';
//             nameError.classList.remove('active');
//             name.classList.remove('invalid');
//         } else {
//             if (name.validity.valueMissing) {
//                 nameError.classList.add('active');
//                 name.classList.add('invalid');
//             }
//             nameError.innerText = 'Введите текстовое значение';
//             nameError.classList.add('active');
//             name.classList.add('invalid');
//         }
//     });

//     phone.addEventListener('input', function (event) {
//         if (phone.validity.valid) {
//             phoneError.textContent = '';
//             phoneError.classList.remove('active');
//             phone.classList.remove('invalid');
//         } else {
//             if (phone.validity.valueMissing) {
//                 phoneError.classList.add('active');
//                 phone.classList.add('invalid');
//             }
//             phoneError.innerText = 'Введите числовое значение';
//             phoneError.classList.add('active');
//             phone.classList.add('invalid');
//         }
//     });

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const submittedName = name.value.trim();
//         const submittedPhone = phone.value.trim();

//         if (submittedName !== '' && submittedPhone !== '' && (!checkbox || (checkbox && checkbox.checked))) {
//             $.ajax({
//                 // ваш код для отправки данных
//                 success: function () {
//                     if (form.closest('.popup')) {
//                         closeModal(`#${form.closest('.popup').id}`)
//                         // document.querySelector(`#${form.closest('.popup').id}`).setAttribute('aria-hidden', 'true');
//                         // document.querySelector(`#${form.closest('.popup').id}`).classList.remove('popup_show');
//                     }
//                     // После успешной отправки выполните следующий код
//                     openModalWithPromise(e.target.dataset.popupMessage).then(() => {
//                         name.value = '';
//                         phone.value = '';
//                         if(checkbox) {
//                             checkbox.checked = false;
//                         }

//                     });
//                 },
//             });
//         } else {
//             if (submittedName == '') {
//                 name.classList.add('invalid');
//                 nameError.textContent = 'Заполните поле';
//                 nameError.classList.add('active');
//             }
//             if (submittedPhone == '') {
//                 phone.classList.add('invalid');
//                 phoneError.textContent = 'Заполните поле';
//                 phoneError.classList.add('active');
//             }
//             if (!checkbox.checked) {
//                 checkbox.nextElementSibling.style.color = 'red'
//             }

//             return;
//         }
//     });

//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('popup__success-wrapper')) {
//             closeModal(`#${e.target.closest('.popup').id}`);
//         }
//         if (e.target.classList.contains('success-close-btn')) {
//             closeModal(`#${e.target.closest('.popup').id}`);
//         }
//     });
// };

// export default form;

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
    // // Функция для проверки, введены ли все цифры
    // function isCodeComplete() {
    //     return Array.from(codeInputs).every(input => input.value !== '');
    // }
    // // Функция для получения кода
    // function getCode() {
    //     return Array.from(codeInputs).map(input => input.value).join('');
    // }
    codeInputs.forEach((item, i) => {
        item.addEventListener('input', () => {
            handleInput(i + 1);
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
    })
    passRepeat.forEach((item, i) => {
        item.addEventListener('input', () => {
            passRep(i);
        });
        item.addEventListener('blur', () => {
            passRep(i);
        });
    })
   
   

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
            console.log(span)
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
    console.log(dropdown);
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
                        const locality = document.querySelector('.input-dropdown--locality');
                        const street = document.querySelector('.input-dropdown--street');
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
                        const street = document.querySelector('.input-dropdown--street');
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
        console.log(formElements)
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
