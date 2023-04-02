const ratemsg = document.querySelector('.ratemsg');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const submitbtn = document.getElementById('submitBtn');
const container1 = document.getElementById('.container01');
const container2 = document.getElementById('.container02');




btn1.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 1 out of 5'
})
btn2.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 2 out of 5'
})
btn3.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 3 out of 5'
})
btn1.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 4 out of 5'
})
btn1.addEventListener('click', function() {
    ratemsg.innerHTML = ' You selected 5 out of 5'
})

// submitbtn.addEventListener('click', function() {
//     container1.style.visibility = "hidden";
//     container2.style.visibility = "visible";

// })

// submitbtn.addEventListener('click', function() {
//         container1.style.display = "none";
//         container2.style.display = "flex";

//     })
// console.log('sm', submitbtn);


submitbtn.addEventListener('click', function() {
    container1.classList.add('hidden');
    container2.classList.remove('hidden');
});