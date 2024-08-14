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



    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var element = document.querySelector('.home1');
        var elementPosition = element.offsetTop;

        // Mengecek apakah pengguna scroll ke bawah atau ke atas
        if (scrollPosition > elementPosition) {
            element.classList.add('slide');
        } else {
            element.classList.remove('slide');
        }
    });



const text = "SYAHLAN BUDISANTOSO";
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



// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// }, false);
