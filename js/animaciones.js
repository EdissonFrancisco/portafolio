//colapsar y mostrar el navBar, mover el contenedor
const navbar = document.querySelector('.navbar');
const containers = document.querySelectorAll('.container');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.remove('collapsed');
  containers.forEach(container => {
    container.setAttribute("style", "left:15rem");
  });
});
navbar.addEventListener('mouseleave', function() {
  navbar.classList.add('collapsed');
  containers.forEach(container => {
    container.setAttribute("style", "left:7rem");
  });
});

// clase active 
const item_actived = document.querySelectorAll('.navbar_list');

function activarLink(event) {
  event.preventDefault();
  item_actived.forEach((item) => {
    item.classList.remove('active');
  });
  event.currentTarget.closest('li').classList.add('active');
}

item_actived.forEach((item) => item.addEventListener('click', activarLink));

/*animacion de escritura titulo*/
const textselected = document.querySelector('.principal_home_title');
const titletext = textselected.textContent;
textselected.textContent = "";

var i = 0;
function writeTitle() {
  if (i < titletext.length) {
    textselected.textContent += titletext.charAt(i);
    i++;
    setTimeout(writeTitle, 10);
  }
}

setTimeout(writeTitle, 100);