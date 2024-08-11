// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 0) {
//         navbar.style.top = 'auto';
//         navbar.style.bottom = '0';
//     } else {
//         navbar.style.top = '0';
//         navbar.style.bottom = 'auto';
//     }
// });


const text = "WELCOME TO MY WEBSITE SYAHLAN BUDISANTOSO";
let index = 0;
const speed = 100; 

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
