const colors = document.querySelectorAll('.color');
const countries = document.querySelectorAll('.country');
const gradients = document.querySelectorAll('.gradient');

let prevColor = "blue";
let animationEnd = true;

function changeColor() {
  if (!animationEnd) return;
  let primary = this.getAttribute('primary');
  let color = this.getAttribute('color');
  let country = document.querySelector(`.country[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

  if (color == prevColor) return;

  colors.forEach(c => c.classList.remove('active'));
  this.classList.add('active');

  document.documentElement.style.setProperty('--primary', primary);

  countries.forEach(s => s.classList.remove('show'));
  country.classList.add('show');

  gradients.forEach(g => g.classList.remove('first', 'second'));
  gradient.classList.add('first');
  prevGradient.classList.add('second');

  prevColor = color;
  animationEnd = false;

  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  })
}

colors.forEach(c => c.addEventListener('click', changeColor));

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active')
});