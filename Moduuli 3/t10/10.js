const form = document.querySelector('form');
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const par = document.querySelector('p');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    par.innerText = `Your name is ${firstName.value} ${lastName.value}`
});