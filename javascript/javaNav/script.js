var navLink = document.querySelectorAll('.nav-item');
var path = window.location.href;

function navActive() {
  for (let i = 0; i < navLink.length; i++) {
    console.log(i);
    console.log(navLink[i]);
    if (navLink[i].href === path) {
      navLink[i].classList.add('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', navActive(), false);
