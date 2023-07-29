//seleccionar los items del menù
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item){
    item.addEventListener("click",function(e){
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active")
    });

});

//agregar menu desplegable
let menuBtn = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'none' ? 'flex' : 'none';
});