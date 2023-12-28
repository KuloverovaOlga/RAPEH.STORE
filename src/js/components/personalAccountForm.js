// const personalAccountForm = () => {
//     // Находим все элементы input с классом input--name
//     const inputs = document.querySelectorAll('.input--name');

//     // Добавляем обработчик события для каждого найденного элемента
//     inputs.forEach((input) => {
//         input.addEventListener('change', function () {
//             // Проверяем значение поля на наличие символов, отличных от букв
//             if (!/^[a-zA-Z]+$/.test(this.value)) {
//                 // Если найдены недопустимые символы, добавляем класс _form-error
//                 this.classList.add('_form-error');
//             } else {
//                 // Если введены только буквы, удаляем класс _form-error
//                 this.classList.remove('_form-error');
//             }
//         });
//     });
// };

// export default personalAccountForm;
