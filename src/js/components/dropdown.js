window.$ = window.jQuery = require('jquery');

const dropdown = () => {
console.log('123456')
// Обработчик клика на верхней части выпадающего списка
$('.making-order__accordion').on("click", '.form__dropdown_top', function () {
    
    // Закрыть выпадающие меню для всех элементов
    $('.form__dropdown_top').not(this).each(function () {
        $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideUp();
        $(this).removeClass("open");
        $(this).closest('.form__item').removeClass("active");
       
    });

    // Открыть/закрыть выпадающее меню для текущего элемента
    $(this).addClass("open");
    $(this).closest('.form__item').addClass("active");
    $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideDown();

});

    // Обработчик фокуса на input в выпадающем списке с поиском
    $('.making-order__accordion').on("focus", '.form__dropdown_search .form__dropdown_top input', function () {
    // Проверка наличия класса open
    if (!$(this).closest('.form__dropdown_top').hasClass('open')) {
        // Анимация и добавление классов при открытии выпадающего списка
        $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideDown();
        $(this).closest('.form__dropdown_top').addClass("open");
        $(this).closest('.form__item').addClass("active");
    }
});

// Обработчик клика на элементе выпадающего списка
$('.making-order__accordion').on("click", '.form__dropdown_item', function () {
    // Проверка наличия родительского элемента .form__dropdown_search
    if ($(this).closest('.form__dropdown_search').length) {
        // Установка значения и стилей при выборе элемента в выпадающем списке с поиском
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').addClass('_filled');
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').val($(this).find('.form__dropdown_item_name').text());
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').addClass('filled');
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').removeClass('_form-error');
        $(this).closest('.form__dropdown').find('.popup__label--required').removeClass('_form-error');
        $(this).closest('.form__dropdown').find('.error-span').removeClass('active');
        $(this).closest('.form__dropdown').find('.form__dropdown_top .star').css('opacity', '0');
        $(this).closest('.form__dropdown').find('.form__dropdown_top').removeClass("open");
        $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideUp();
    }
});

// Обработчик клика вне элементов выпадающего списка
$(document).on('click', function (e) {
    if ($(e.target).closest(".form__dropdown").length === 0) {
        // Закрытие выпадающего списка при клике вне его области
        $('.form__dropdown_top.open').each(function (params) {
            $(this).removeClass("open");
            $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideToggle();
            $(this).closest('.form__item').removeClass("active");
        });
    }
});

// Обработчик события нажатия клавиши в поле ввода
$('.making-order__accordion').on("keyup", '.form__dropdown_top input', function () {
    var value = $(this).val().toLowerCase();
    // Фильтрация элементов выпадающего списка по введенному значению
    $(this).closest(".form__dropdown").find('.form__dropdown_item').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});

}

export default dropdown
