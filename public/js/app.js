'use strict';

// fetching data from json
const data = 'src/data/data.json';

const card = document.querySelector('.card');

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
                    <article class="text-center lg:flex lg:justify-between lg:items-center lg:gap-12">
                        <div class="lg:w-3/5">
                            <h1>${list.heading}</h1>
                            <p class="mt-4 mb-6">${list.caption}</p>
                        </div>
                        <div class="w-4/5 mx-auto lg:w-2/5">
                            <img src="${list.image}" alt="image" class="w-full aspect-video object-cover img-border">
                        </div>
                    </article>
                    `
            });
        }).catch(err => {
            console.error(err);
        });
};
document.addEventListener('DOMContentLoaded', getDataObject);