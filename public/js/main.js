'use strict';

const data = 'public/data/data.json';

const card = document.querySelector('.card');
const faq = document.querySelector('.faq');

const getDataObject = () => {
    fetch(data)
        .then(res => {
            return res.json();
        }).then(getData => {
            card.innerHTML = '';
            let listCard = getData.card;
            listCard.forEach(list => {
                card.innerHTML +=
                    `
                    <article class="text-center">
                        <h1>${list.heading}</h1>
                        <p class="mt-4 mb-6">${list.caption}</p>
                        <img src="${list.image}" alt="image" class="w-4/5 mx-auto img-border">
                    </article>
                    `
            });
        }).catch(err => {
            console.error(err);
        });
};
document.addEventListener('DOMContentLoaded', getDataObject);

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

