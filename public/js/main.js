'use strict';

// popup toast
// let toast = document.querySelector('.toast');

// form input 1
const form1 = document.querySelector('.form-1');
const emailInput1 = document.querySelector('#email-input-1');

console.log(form1)

form1.addEventListener('submit', (e) => {
    if (validateForm1()) {
        form1.submit();
    } else {
        e.preventDefault();
    };
});

function validateForm1() {
    let result = true;
    let errorMessage = emailInput1.nextElementSibling;

    if (emailInput1.value.trim() == '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Alamat email tidak boleh kosong';

        result = false;
        emailInput1.focus();
    } else if (!isEmailValid1(emailInput1.value.trim())) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Format email tidak valid';

        result = false;
        emailInput1.focus();
    } else {
        sendEmail1();
    };

    return result;
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

            // toast.style.display = 'block';

            // function showToast() {
            //     setTimeout(function () {
            //         toast.innerHTML = `<p>Menyiapkan halaman utama Smart Sliding Walls</p>`;
            //     }, 2500);
            //     setTimeout(function () {
            //         toast.style.display = 'none';
            //         form1.attributes
            //     }, 5000);
            // };
            // showToast();
        })
        .catch(err => {
            console.error(err);
        });
};

// form input 2
const form2 = document.querySelector('.form-2');
const emailInput2 = document.querySelector('#email-input-2');

form2.addEventListener('submit', (e) => {
    if (validateForm2()) {
        form2.submit();
    } else {
        e.preventDefault();
    };
});

function validateForm2() {
    let result = true;
    let errorMessage = emailInput2.nextElementSibling;

    if (emailInput2.value.trim() == '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Alamat email tidak boleh kosong';

        result = false;
        emailInput2.focus();
    } else if (!isEmailValid1(emailInput2.value)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Format email tidak valid';

        result = false;
        emailInput2.focus();
    } else {
        sendEmail2();
    };

    return result;
};

function isEmailValid1(emailInput2) {
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

            // toast.style.display = 'block';

            // function showToast() {
            //     setTimeout(function () {
            //         toast.innerHTML = `<p>Menyiapkan halaman utama Smart Sliding Walls</p>`;
            //     }, 2500);
            //     setTimeout(function () {
            //         toast.style.display = 'none';
            //     }, 5000);
            // };
            // showToast();
        })
        .catch(err => {
            console.error(err);
        });
};

// fetching data from json
const data = 'src/data/data.json';

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

