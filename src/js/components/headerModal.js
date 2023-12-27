const headerModal = () => {
    const triger = document.querySelector('.header__btn-modal-click');
    const modal = document.querySelector('.header__btn-modal');
    const modalInner = document.querySelector('.header__btn-modal-inner');
    const modalPrev = document.querySelector('.header__btn-modal-prev');


    triger.addEventListener('click', () => {
        modal.classList.toggle('active');
    });

    modal.addEventListener('click', (e) => {
        if ( e.target !== modalInner && e.target !== modalPrev) {
            modal.classList.remove('active');
        }
    });

    if (window.innerWidth < 768) {
        triger.dataset.popup="#popup__entrys"
        modal.style.display = 'none';
        modal.classList.remove('active');
        modalInner.style.transition = 'none';
    } 
    else {
        triger.dataset.popup=""
        modal.style.display = 'block';
        modalInner.style.transition = 'transform 0.3s';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            triger.dataset.popup="#popup__entrys"
            modal.style.display = 'none';
            modalInner.style.transition = 'none';
        } 
        else {
            triger.dataset.popup=""
            modal.style.display = 'block';
            modal.classList.remove('active');
            modalInner.style.transition = 'transform 0.3s';
        }
    })
};
export default headerModal;