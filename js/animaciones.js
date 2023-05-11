//menu hamburguesa para dispositivos moviles
const navbarlist = document.querySelector('.navbar-list');
const navbarcell = document.querySelector(".nav-bars");
const hamburguer = navbarcell.querySelector("i");

navbarcell.addEventListener("click", function() {
  hamburguer.classList.toggle("fa-bars");
  hamburguer.classList.toggle("fa-xmark");
  navbarlist.classList.toggle('mobile-menu');
});

//contraer y mostrar el menu para monitores
//colapsar y mostrar el navBar, mover el contenedor
const navbar = document.querySelector('.navbar');
const containers = document.querySelectorAll('.container');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.remove('collapsed');
  containers.forEach(container => {
    container.setAttribute("style", "left:17rem");
  });
});
navbar.addEventListener('mouseleave', function() {
  navbar.classList.add('collapsed');
  containers.forEach(container => {
    container.setAttribute("style", "left:6.5rem");
  });
});

// clase active 
const item_actived = document.querySelectorAll('.nav-item');

function activarLink(event) {
  event.preventDefault();
  item_actived.forEach((item) => {
    item.classList.remove('active');
  });
  event.currentTarget.closest('li').classList.add('active');
}

item_actived.forEach((item) => item.addEventListener('click', activarLink));


const textselected = document.querySelector('.principal_home_title');
textselected.innerHTML = '';
const texto = "Edison Francisco Acero";
const arr = texto.split("");
let i = 0, j = texto.length;

function escribirEnPantalla() {
  if (i < arr.length) {
    textselected.innerHTML += arr[i];
    i++;
  } else {
    j--;
    textselected.innerHTML = texto.substring(0, j);
    if (j === 0) {
      i = 0;
      j = texto.length;
    }
  }
}

setInterval(escribirEnPantalla, 300);
