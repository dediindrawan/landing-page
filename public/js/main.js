const accordions = document.querySelectorAll('.accordions li:first-child');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordions.forEach(accordion => {
            if (accordion.nextElementSibling.style.display = 'inline-block') {
                accordion.nextElementSibling.style.display = 'none';
                accordion.firstElementChild.classList.remove('rotate-up-icon');
            };
        });
        accordion.nextElementSibling.style.display = 'inline-block';
        accordion.firstElementChild.classList.add('rotate-up-icon');
    });
    // click anywhere to close content
    document.addEventListener('click', (e) => {
        if (!accordion.contains(e.target)) {
            accordion.nextElementSibling.style.display = 'none';
            accordion.firstElementChild.classList.remove('rotate-up-icon');
        };
    });
});