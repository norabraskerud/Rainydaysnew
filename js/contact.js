const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const messageCon = document.querySelector("#messagecon");
const messageConError = document.querySelector("#messageconError");
const submit = document.querySelector("#submit");




function checkForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectErr.style.display = "none";
    } else {
        subjectErr.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(messageCon.value, 25) === true) {
        messageConError.style.display = "none";
    } else {
        messageConError.style.display = "block";
    }

    console.log("hello");
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", checkForm);