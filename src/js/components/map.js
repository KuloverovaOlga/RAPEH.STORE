// const map = () => {
//     function init() {
//         let map = new ymaps.Map(
//             'map',
//             {
//                 center: [55.814446538335254, 37.641919735260025],
//                 zoom: 10,
//             },
//             {
//                 yandexMapDisablePoiInteractivity: true,
//             }
//         );

//         let placemark = new ymaps.Placemark(
//             [55.86773756887682, 37.66713250000002],
//             {},
//             {
//                 iconLayout: 'default#image',
//                 iconImageHref: './assets/images/place-mark.svg',
//                 iconImageSize: [30, 35],
//                 iconImageOffset: [-15, -35],
//             }
//         );

//         map.controls.remove('geolocationControl'); // удаляем геолокацию
//         map.controls.remove('searchControl'); // удаляем поиск
//         map.controls.remove('trafficControl'); // удаляем контроль трафика
//         map.controls.remove('typeSelector'); // удаляем тип
//         map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//         map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//         map.controls.remove('rulerControl'); // удаляем контрол правил
//         //   map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

//         map.geoObjects.add(placemark);
//     }
//     ymaps.ready(init);
// };

// export default map;
