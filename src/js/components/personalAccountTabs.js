const personalAccount = () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    const isActive = tab.classList.contains('_active');

    // // Show content for tabs that are already active
    // if (isActive) {
    //   tabContents.forEach((content) => {
    //     if (content.dataset.content === tabId) {
    //       content.style.display = 'block';
    //     } else {
    //       content.style.display = 'none';
    //     }
    //   });
    // }

  //   tab.addEventListener('click', () => {
  //     const tabId = tab.dataset.tab;

  //     // Hide all tab contents
  //     tabContents.forEach((content) => {
  //       if (content.dataset.content === tabId) {
  //         content.style.display = 'block';
  //         if(content.classList.contains('account')) {
  //           content.style.display = 'flex';
  //         }
  //       } else {
  //         content.style.display = 'none';
  //       }
  //     });

  //     // Remove active class from all tabs
  //     tabs.forEach((t) => {
  //       t.classList.remove('_active');
  //     });

  //     // Add active class to the clicked tab
  //     tab.classList.add('_active');
  //   });
  });
};

export default personalAccount;
