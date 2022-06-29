import autoAnimate from '@formkit/auto-animate';

const dropdown = document.getElementById('dropdown')
autoAnimate(dropdown)

const p = document.createElement('p')
p.innerText = "Lorum ipsum..."

const toggle = function toggle () {
  dropdown.contains(p) ? p.remove() : dropdown.appendChild(p)
}

let click = document.getElementById('click');
click.addEventListener('click', toggle);


