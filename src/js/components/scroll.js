import jqueryMCustomScrollbarConcat from '../utils/jquery.mCustomScrollbar.concat.min';
window.$ = window.jQuery = require('jquery');
jqueryMCustomScrollbarConcat();
const scroll = () => {
  
        $('.mycustom-scroll').mCustomScrollbar({
            axis: 'x', // вертикальный скролл
            scrollInertia: '300', // продолжительность прокрутки, значение в миллисекундах
    
            mouseWheel: {
                deltaFactor: 300, // кол-во пикселей на одну прокрутку колёсика мыши
            },
        });
    

        if (window.innerWidth > 768) {
            document.querySelectorAll('.mCSB_container').forEach(item => {
                item.style.left = 0
            })
            document.querySelectorAll('.mCSB_dragger').forEach(item => {
                item.style.left = 0
            })
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setTimeout(() => {
                    document.querySelectorAll('.mCSB_container').forEach(item => {
                        item.style.left = 0
                    })
                    document.querySelectorAll('.mCSB_dragger').forEach(item => {
                        item.style.left = 0
                    })
                }, 500)
               
            }
        })
   
};

export default scroll;
