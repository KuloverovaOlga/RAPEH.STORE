const makingOrderAccordion = () => {
    const accordionItemHeaders = document.querySelectorAll('.making-order__accordion-heading');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener('click', () => {
            const isActive = accordionItemHeader.classList.contains('active');
            const accordionItemBody = accordionItemHeader.nextElementSibling;
           

            // Проверяем, открыт ли текущий элемент
            if (!isActive) {
                // Добавляем класс и устанавливаем высоту только для активного элемента
                accordionItemHeader.classList.add('active');
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
                accordionItemBody.style.marginTop = '4rem';
            } else {
                // Если текущий элемент уже открыт, закрываем его
                accordionItemHeader.classList.remove('active');
                accordionItemBody.style.maxHeight = 0;
                accordionItemBody.style.marginTop = '0';
            }
        });
    });
};

export default makingOrderAccordion;
