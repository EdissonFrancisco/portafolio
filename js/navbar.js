const navbar = document.querySelector('.navbar');
const homefund = document.querySelector('.contenedor');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.remove('collapsed');
  homefund.setAttribute("style", "left:20rem");
});

navbar.addEventListener('mouseleave', function() {
  navbar.classList.add('collapsed');
  homefund.setAttribute("style", "left:7rem");
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

