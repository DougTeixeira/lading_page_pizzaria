let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 0
  }
  document.getElementById('radio' + count).checked = true;
}

function clickImage() {
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const radio3 = document.getElementById('radio3')
const radio4 = document.getElementById('radio4')
function passarImagem1(event,) {
  document.getElementById('radio'+ 1).checked = true;
  count = 1
}
function passarImagem2(event,) {
  document.getElementById('radio'+ 2).checked = true;
  count = 2
}
function passarImagem3(event,) {
  document.getElementById('radio'+ 3).checked = true;
  count = 3
}
function passarImagem4(event,) {
  document.getElementById('radio'+ 4).checked = true;
  count = 4
}

radio1.addEventListener('click', passarImagem1)
radio2.addEventListener('click', passarImagem2)
radio3.addEventListener('click', passarImagem3)
radio4.addEventListener('click', passarImagem4)
}

clickImage()

function menuButton() {
const btn_mobie = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

btn_mobie.addEventListener('click', toggleMenu);
btn_mobie.addEventListener('touchstart', toggleMenu);
}

menuButton()