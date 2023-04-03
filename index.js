const ratemsg = document.querySelector('.ratemsg');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const submitbtn = document.getElementById('submitBtn');
const container1 = document.getElementById('container01');
const container2 = document.getElementById('container02');

let button = submitbtn;
button.disabled = true;


btn1.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 1 out of 5'
    button.disabled = false;
})
btn2.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 2 out of 5'
    button.disabled = false;
})
btn3.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 3 out of 5'
    button.disabled = false;
})
btn4.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 4 out of 5'
    button.disabled = false;
})
btn5.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 5 out of 5'
    button.disabled = false;
})



submitbtn.addEventListener('click', function() {
    container1.classList.add('hidden');
    container1.classList.remove('flex');
    container2.classList.add('flex');
    container2.classList.remove('hidden');
});