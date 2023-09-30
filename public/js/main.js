'use strict';

// popup toast
let toast = document.querySelector('.toast');

// input 1 form validation
const form1 = document.querySelector('.form-1');
const emailInput1 = document.querySelector('#email-input-1');
let errorMessage1 = document.querySelector('.error-message-1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm1()) {
        sendEmail1();
    };
});

function validateForm1() {
    if (emailInput1.value.trim() == '') {
        errorMessage1.style.display = 'block';
        errorMessage1.textContent = 'Alamat email tidak boleh kosong';
        emailInput1.focus();
        return false;
    } else if (isEmailValid1(emailInput1.value.trim())) {
        return true;
    } else {
        errorMessage1.style.display = 'block';
        errorMessage1.textContent = 'Format email tidak valid';
        emailInput1.focus();
        return false;
    };
};

function isEmailValid1(emailInput1) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(emailInput1);
};

function sendEmail1() {
    let params = {
        email: emailInput1.value,
    };

    const serviceId = "service_hhanyka";
    const templateId = "template_tuvl81v";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            emailInput1.value;
            console.log(res);

            toast.style.display = 'block';

            function showToast1() {
                setTimeout(function () {
                    toast.innerHTML = `<p>Menyiapkan halaman utama Smart Sliding Wall</p>`;
                }, 2500);
                setTimeout(function () {
                    form1.submit();
                }, 5000);
            };
            showToast1();
        })
        .catch(err => {
            console.error(err);
        });
};

// input 2 form validation
const form2 = document.querySelector('.form-2');
const emailInput2 = document.querySelector('#email-input-2');
let errorMessage2 = document.querySelector('.error-message-2');

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm2()) {
        sendEmail2();
    };
});

function validateForm2() {
    if (emailInput2.value.trim() == '') {
        errorMessage2.style.display = 'block';
        errorMessage2.textContent = 'Alamat email tidak boleh kosong';
        emailInput2.focus();
        return false;
    } else if (isEmailValid2(emailInput2.value.trim())) {
        return true;
    } else {
        errorMessage2.style.display = 'block';
        errorMessage2.textContent = 'Format email tidak valid';
        emailInput2.focus();
        return false;
    };
};

function isEmailValid2(emailInput2) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(emailInput2);
};

function sendEmail2() {
    let params = {
        email: emailInput2.value,
    };

    const serviceId = "service_hhanyka";
    const templateId = "template_tuvl81v";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            emailInput2.value;
            console.log(res);

            toast.style.display = 'block';

            function showToast1() {
                setTimeout(function () {
                    toast.innerHTML = `<p>Menyiapkan halaman utama Smart Sliding Wall</p>`;
                }, 2500);
                setTimeout(function () {
                    form2.submit();
                }, 5000);
            };
            showToast1();
        })
        .catch(err => {
            console.error(err);
        });
};

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
                        <div>
                            <h1>${list.heading}</h1>
                            <p class="mt-4 mb-6">${list.caption}</p>
                        </div>
                        <img src="${list.image}" alt="image"  class="w-4/5 mx-auto img-border lg:w-2/4">
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

