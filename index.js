const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const submitbtn = document.getElementById('submitBtn');
const container1 = document.getElementById('container01');
const container2 = document.getElementById('container02');
const point = document.getElementById('point');

let button = submitbtn;
button.disabled = true;
let ratting = 0


btn1.addEventListener('click', function() {
    point.innerHTML = 1;
    ratting = 1;
    button.disabled = false;
})
btn2.addEventListener('click', function() {
    point.innerHTML = 2;
    ratting = 2;
    button.disabled = false;
})
btn3.addEventListener('click', function() {
    point.innerHTML = 3;
    ratting = 3;
    button.disabled = false;
})
btn4.addEventListener('click', function() {
    point.innerHTML = 4;
    ratting = 4;
    button.disabled = false;
})
btn5.addEventListener('click', function() {
    point.innerHTML = 5;
    ratting = 5;
    button.disabled = false;
})

submitbtn.addEventListener('click', function() {
    if (ratting) {
        container1.classList.add('hidden');
        container1.classList.remove('flex');
        container2.classList.add('flex');
        container2.classList.remove('hidden');
    }
});