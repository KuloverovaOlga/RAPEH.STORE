const makingOrderTabs = (selector) => {
    // Get the radio buttons and content sections
    const parent = document.querySelector(selector)

    const deliveryOptions = parent.querySelectorAll('.making-order__option-input');

    // Function to handle the tab switching
    function handleTabSwitch(event) {
        const target = event.target.dataset.target;
        const content = parent.querySelector(`[data-content="${target}"]`);

        if (content) {
            parent.querySelectorAll('[data-content]').forEach((el) => {
                el.style.display = 'none';
          
            });
            content.style.display = 'block';

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
