const makingOrderAccordion = () => {
    const accordionItemHeaders = document.querySelectorAll('.making-order__accordion-heading');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.classList.add('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 600 + 'px';
        accordionItemBody.style.marginTop = '4rem';
    

        accordionItemHeader.addEventListener('click', () => {
            const isActive = accordionItemHeader.classList.contains('active');
   const accordionItemBody = accordionItemHeader.nextElementSibling;
            // Проверяем, открыт ли текущий элемент
            if (!isActive) {
                // Добавляем класс и устанавливаем высоту только для активного элемента
                accordionItemHeader.classList.add('active');
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 600 + 'px';
                accordionItemBody.style.marginTop = '4rem';
            } else {
                // Если текущий элемент уже открыт, закрываем его
                accordionItemHeader.classList.remove('active');
                accordionItemBody.style.maxHeight = 0;
                accordionItemBody.style.marginTop = '0';
            }

            window.addEventListener('resize', () => {
                if (accordionItemHeader.classList.contains('active')) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 600 + 'px';
                } else {
                    accordionItemBody.style.maxHeight = 0;

                }
            })
        });
    });
};

export default makingOrderAccordion;
