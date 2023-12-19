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

const form = () => {


  // form fields
  formFieldsInit({ viewPass: false });
  
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
    // Функция для проверки, введены ли все цифры
    function isCodeComplete() {
        return Array.from(codeInputs).every(input => input.value !== '');
    }
    // Функция для получения кода
    function getCode() {
        return Array.from(codeInputs).map(input => input.value).join('');
    }
    codeInputs.forEach((item, i) => {
      item.addEventListener('input', ()=> {
        handleInput(i+1)})
    })


    const tel = document.querySelectorAll('.input--tel')

    tel.forEach(item => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.nextElementSibling;
            const parent = item.parentElement;

            if (!/^[0-9 ()+]+$/.test(inputValue) && inputValue !='') {
                span.classList.add('active');
                parent.classList.add('_form-error');
            }  else  {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        })
    })
    const mail = document.querySelectorAll('.input--mail')

    mail.forEach(item => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const parent = item.parentElement;

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue !='') {
                parent.classList.add('_form-error');
            }  else  {
                parent.classList.remove('_form-error');
            }
        })
    })

    const required = document.querySelectorAll('.popup__label--required input, .popup__label--required textarea')

    required.forEach(item => {
        item.addEventListener('blur', () => {
            const inputValue = item.value.trim();
            if (inputValue === '' || item.parentElement.classList.contains('_form-error')) {
                item.parentElement.classList.add('popup__label--star');
            }  else  {
                item.parentElement.classList.remove('popup__label--star');
            }
        })
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            if (inputValue === '' || item.parentElement.classList.contains('_form-error')) {
                item.parentElement.classList.add('popup__label--star');
            }  else  {
                item.parentElement.classList.remove('popup__label--star');
            }
        })
    })

     

    function setupFormListener(formSelector, submitButtonSelector) {
        const form = document.querySelector(formSelector);
        const submitButton = document.querySelector(submitButtonSelector);
    
        const formElements = form.querySelectorAll('input, textarea');
        const formElementsParents = form.querySelectorAll('.input-group')
        const formElementsLabel = form.querySelectorAll('.popup__label')
    
        console.log(formElementsParents)
        function updateSubmitButtonState() {
            const isEmpty = Array.from(formElements).some(element => {
                return element.value.trim() === '';
            });
            const formError = Array.from(formElementsParents).some(element => {
           
                return element.classList.contains('_form-error');
            });
            const formErrorLabel = Array.from(formElementsLabel).some(element => {
                console.log(element)
                return element.classList.contains('_form-error');
            });
         
            // Устанавливаем или удаляем атрибут disabled в зависимости от условия
            if (isEmpty || (formError || formErrorLabel)) {
                submitButton.setAttribute('disabled', 'disabled');
            } else {
                submitButton.removeAttribute('disabled');
            }
        }
    
        formElements.forEach(element => {
            element.addEventListener('input', updateSubmitButtonState);
        });
    
        updateSubmitButtonState();
    }
    
    // Использование:
    setupFormListener('.popup__entrys-personal-area-form', '.popup__body-btn-personal-area-button');
    setupFormListener('.popup__password-recovery-form', '.popup__password-recovery-body-btn');
    setupFormListener('.popup__body-registration-form', '.popup__body-btn-registration-form');

}

export default form

