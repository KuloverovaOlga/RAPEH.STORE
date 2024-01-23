import jqueryMCustomScrollbarConcat from '../utils/jquery.mCustomScrollbar.concat.min';
window.$ = window.jQuery = require('jquery');
jqueryMCustomScrollbarConcat();
const scroll = () => {
    $('.mycustom-scroll').mCustomScrollbar({
        axis: 'x', // вертикальный скролл
        scrollInertia: '300', // продолжительность прокрутки, значение в миллисекундах

        mouseWheel: {
            deltaFactor: 30, // кол-во пикселей на одну прокрутку колёсика мыши
        },
    });
};

export default scroll;
