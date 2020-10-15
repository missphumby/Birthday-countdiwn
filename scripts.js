let countDownFromDate = new Date('May 17, 2021 12:00:00').toDateString();
let countDownDate = new Date('May 17, 2021 12:00:00').getTime();

const theDate = document.querySelector('#theDate');

let x = setInterval (function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
let days = Math.floor(distance/(1000 * 60 *60*24));
let hours = Math.floor((distance % (1000 * 60 *60*24))/(1000 * 60 *60));
let minutes = Math.floor((distance % (1000 * 60 *60))/(1000 * 60));
let seconds = Math.floor((distance % (1000 * 60))/(1000));

theDate.innerHTML = `${countDownFromDate}`;
document.querySelector('#days').innerHTML = days;
document.querySelector('#hours').innerHTML = hours;
document.querySelector('#minutes').innerHTML = minutes;
document.querySelector('#seconds').innerHTML = seconds;

}, 1000)



