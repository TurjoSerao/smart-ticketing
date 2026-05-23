// navBar Toggle Menu

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
console.log(navLinks);
menuToggle.addEventListener('click', function (){
    navLinks.classList.toggle("active");
})