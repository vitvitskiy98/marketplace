// name input validation
const nameInput = document.querySelector(".name-input")

function checkCorrectName() {
    if(!/^[А-Яа-яЁё\s]+$/.test(nameInput.value)) {
        document.querySelector(".name-error").style.display ="block"
    }
    else {
        document.querySelector(".name-error").style.display ="none";
    }
}

nameInput.addEventListener("blur", checkCorrectName);


nameInput.addEventListener("focus", function() {
    if(document.querySelector(".name-error").style.display ="block") {
        document.querySelector(".name-error").style.display ="none"
    }
});


// surname input validation

 const surnameInput = document.querySelector(".surname-input");

 function checkCorrectSurname() {
    if(!/^[А-Яа-яЁё\s]+$/.test(surnameInput.value)) {
        document.querySelector(".surname-error").style.display = "block"
    }
    else {
        document.querySelector(".surname-error").style.display = "none"
    }
 }

 surnameInput.addEventListener("blur", checkCorrectSurname);


 surnameInput.addEventListener("focus", function() {
    if(document.querySelector(".surname-error").style.display ="block") {
        document.querySelector(".surname-error").style.display ="none"
    }
});


const emailInput = document.querySelector(".email-input");

function checkCorrectEmail() {
    if(!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailInput.value)) {
        document.querySelector(".email-error").style.display ="block"
    }
    else {
        document.querySelector(".email-error").style.display ="none";
    }
}

emailInput.addEventListener("blur", checkCorrectEmail);

emailInput.addEventListener("focus", function() {
    if(document.querySelector(".email-error").style.display ="block") {
        document.querySelector(".email-error").style.display ="none"
    }
});


const phoneInput = document.querySelector(".phone-input");

function checkPhone() {
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phoneInput.value)) {
        document.querySelector(".phone-error").style.display = "block"
    }
    else {
        document.querySelector(".phone-error").style.display = "none";
    }
} 

phoneInput.addEventListener("blur", checkPhone)

phoneInput.addEventListener("focus", function() {
    if(document.querySelector(".phone-error").style.display ="block") {
        document.querySelector(".phone-error").style.display ="none"
    }
});


const innInput = document.querySelector(".inn-input");

function checkINN() {
    if(!/\d{14}/.test(innInput.value)) {
        document.querySelector(".INN-error").style.display = "block"
        document.querySelector(".INN-error").innerHTML = "неверный ИНН!"
        document.querySelector(".INN-error").style.color = "#F55123"
    }
    else {
        document.querySelector(".INN-error").style.display = "none";
    }
}

innInput.addEventListener("blur", checkINN);

innInput.addEventListener("focus", function() {
    if(document.querySelector(".INN-error").style.display ="block") {
        document.querySelector(".INN-error").style.display ="none"
    }
});