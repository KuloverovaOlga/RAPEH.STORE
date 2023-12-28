import personalAccount from './personalAccountTabs';
import personalAccountForm from './personalAccountForm';
import catalog from './catalog';
import catalogFilter from './catalogFilter';
import cartHeader from './cartHeader';
import cartAccordion from './cartAccordion';
import cartCheckboxes from './cartCheckboxes';
import makingOrderAccordion from './makingOrderAccordion';
import makingOrderDelivery from './makingOrderDelivery';
import makingOrderTabs from './makingOrderTabs';
import notification from './notification';

import cartSwiper from './swiper/cartSwiper';

document.addEventListener('DOMContentLoaded', () => {
    try {
        cartSwiper();
    } catch {}
    try {
        personalAccount();
    } catch {}
    try {
        personalAccountForm();
    } catch {}
    try {
        catalog();
    } catch {}
    try {
        catalogFilter();
    } catch {}
    try {
        notification();
    } catch {}
    try {
        paginationBlock('.catalog-list__item', 6, '.catalog-list__pagination-wpapper');
    } catch {}
    try {
        cartHeader();
    } catch {}
    try {
        cartAccordion();
    } catch {}
    try {
        cartCheckboxes();
    } catch {}
    try {
        makingOrderAccordion();
    } catch {}
    try {
        makingOrderDelivery();
    } catch {}
    try {
        makingOrderTabs();
    } catch {}
});
