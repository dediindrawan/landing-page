'use strict';

// fetching data from json
const data = 'src/data/data.json';

const cardWrapper = document.querySelector('.card-wrapper');

const getDataObject = () => {
    fetch(data)
        .then(res => {
            return res.json();
        }).then(getData => {
            cardWrapper.innerHTML = '';
            let listCard = getData.card;
            listCard.forEach(list => {
                cardWrapper.innerHTML +=
                    `
                    <article class="card-content">
                        <div class="lg:w-3/5">
                            <h1 class="md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">${list.heading}</h1>
                            <p class="mt-4 mb-6 lg:text-lg">${list.caption}</p>
                        </div>
                        <div class="image-wrapper">
                            <img src="${list.image}" alt="image" class="image-content">
                        </div>
                    </article>
                    `
            });
        }).catch(err => {
            console.error(err);
        });
};
document.addEventListener('DOMContentLoaded', getDataObject);