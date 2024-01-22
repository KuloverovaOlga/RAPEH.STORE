const makingOrderTabs = (selector) => {
    // Get the radio buttons and content sections
    const parent = document.querySelector(selector)
    console.log(parent)
    const deliveryOptions = parent.querySelectorAll('.making-order__option-input');
    console.log(deliveryOptions)
    // Function to handle the tab switching
    function handleTabSwitch(event) {
        const target = event.target.dataset.target;
        const content = parent.querySelector(`[data-content="${target}"]`);

        if (content) {
            parent.querySelectorAll('[data-content]').forEach((el) => {
                el.style.display = 'none';
                console.log(1);
            });
            content.style.display = 'block';
            console.log(2);
        }
    }

    // Add event listeners to the radio buttons
    deliveryOptions.forEach((option) => {
        option.addEventListener('change', handleTabSwitch);
    });

    // Initially hide all content except the first one on page load
    parent.querySelector('[data-content="first"]').style.display = 'block';
    // document.querySelector('[data-content="third"]').style.display = 'block';
};

export default makingOrderTabs;
