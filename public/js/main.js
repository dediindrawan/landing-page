'use strict';

// accordion faq section
const accordions = document.querySelectorAll('.accordions');

accordions.forEach(accordion => {
    const toggleButton = accordion.firstElementChild;
    const contentList = accordion.lastElementChild;
    const chevronIcon = toggleButton.firstElementChild;

    toggleButton.addEventListener('click', () => {
        const activeList = contentList.classList.contains('active-list');

        accordions.forEach(otherAccordion => {
            otherAccordion.lastElementChild.classList.remove('active-list');
            otherAccordion.firstElementChild.lastElementChild.classList.remove('rotate-up');
        });

        if (!activeList) {
            contentList.classList.toggle('active-list');
            chevronIcon.classList.toggle('rotate-up');
        };
    });
});

// open map location on company info page
function openMap() {
    location.href = 'https://maps.app.goo.gl/pywQQ7mfm353pMTS6';
};
