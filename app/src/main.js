import { items } from './provider';
import { renderHeader } from './sections/renderHeader'
import { renderHome } from './sections/renderHome';
import { renderPrendas } from './sections/renderPrendas';
import {renderContacto} from './sections/renderContacto';
import { renderCar } from './sections/renderCar';
import './style.css'
import { prevenDetail } from './sections/preventDetail';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <nav id="nav" class="nav">
        ${renderHeader()}
      </nav>
    </header>
    <main class="main">

    </main>
  </div>
`

const carrito = []; // carrito global

// Renderizar HOME por defecto al cargar
renderSection('home');

// Escuchar los click en los data-section

document.addEventListener('click', (event) => {
  const section = event.target.dataset.section
  const itemId = event.target.dataset.id;

  if (section === 'carrito' && itemId) {
    const item = items.find(i => i.id === parseInt(itemId));
    if (item && !carrito.find(i => i.id === itemId)) {
      carrito.push(item)
    }
  }

  if (section) {
    renderSection(section, itemId)
  }
})


function renderSection(section, id = null) {
  const main = document.querySelector('.main')

  switch (section) {
    case 'home':
      main.innerHTML = renderHome() // 👈 renderHome debe devolver un string
      break;
    case 'prendas':
      main.innerHTML = renderPrendas()
      break;
    case 'contacto':
      main.innerHTML = renderContacto()
      break;
    case 'carrito':
      main.innerHTML = renderCar(carrito)
      const btnVaciar = document.querySelector('.btn__vaciar');
      if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
          carrito.length = 0;
          renderSection('carrito');
        });
      }
      break;
    case 'preventDetail':
      main.innerHTML = prevenDetail(id)
      setupSlider()
      break;
    default:
      main.innerHTML = '<h1>Sección no encontrada</h1>'
  }
}

function setupSlider() {
  const slider = document.querySelector('.slide__slider');
  const images = document.querySelectorAll('.slider__img');
  const btnPrev = document.querySelector('.slider__btn.prev');
  const btnNext = document.querySelector('.slider__btn.next');

  if (!slider || images.length === 0 || !btnPrev || !btnNext) return;

  let currentIndex = 0;
  const imgWidth = images[0].offsetWidth + 20; // image + margin

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      slider.scrollLeft = currentIndex * imgWidth;
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      slider.scrollLeft = currentIndex * imgWidth;
    }
  });
}