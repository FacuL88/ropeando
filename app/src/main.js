import { items } from './provider';
import { renderHeader } from './sections/renderHeader';
import { renderHome } from './sections/renderHome';
import { renderPrendas } from './sections/renderPrendas';
import { renderContacto } from './sections/renderContacto';
import { renderCar } from './sections/renderCar';
import { preventDetail } from './sections/preventDetail';
import './style.css';

const app = document.querySelector('#app');
const carrito = [];

// Estructura Base
app.innerHTML = `
  <div class="wrapper">
    <header class="header">
      <nav id="nav" class="nav">${renderHeader()}</nav>
    </header>
    <main class="main"></main>
  </div>
`;

const mainContainer = document.querySelector('.main');

// Sistema de notificaciones
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('notification--show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('notification--show');
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Delegación de Eventos Global (Navegación y Carrito)
document.addEventListener('click', (e) => {
  const { section, id } = e.target.dataset;

  if (section) {
    // Si el click es "Agregar al carrito"
    if (section === 'carrito' && id) {
      const item = items.find(i => i.id === parseInt(id));
      if (item) {
        const existingItem = carrito.find(i => i.id === parseInt(id));
        if (existingItem) {
          existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
          carrito.push({ ...item, quantity: 1 });
        }
        showNotification(`${item.name} agregado al carrito ✨`);
      }
    }
    renderSection(section, id);
  }
});

function renderSection(section, id = null) {
  // Limpieza de scroll al cambiar de sección
  window.scrollTo(0, 0);

  switch (section) {
    case 'home':
      mainContainer.innerHTML = renderHome();
      break;
    case 'prendas':
      mainContainer.innerHTML = renderPrendas();
      break;
    case 'contacto':
      mainContainer.innerHTML = renderContacto();
      break;
    case 'carrito':
      mainContainer.innerHTML = renderCar(carrito);
      attachCartEvents();
      break;
    case 'preventDetail':
      mainContainer.innerHTML = preventDetail(id);
      break;
    default:
      mainContainer.innerHTML = '<h2>Sección no encontrada</h2>';
  }
}

// Lógica específica para el Carrito (Vaciar y Comprar)
function attachCartEvents() {
  const btnVaciar = document.querySelector('.btn__vaciar');
  const btnComprar = document.querySelector('.btn__comprar');

  btnVaciar?.addEventListener('click', () => {
    carrito.length = 0;
    renderSection('carrito');
  });

  btnComprar?.addEventListener('click', () => {
    if (carrito.length === 0) return showNotification('El carrito está vacío');
    
    // Simulación de ticket de compra profesional
    const token = Math.random().toString(36).substring(2, 10).toUpperCase();
    mainContainer.innerHTML = `
      <div class="comprobante">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu orden <strong>#${token}</strong> ha sido procesada.</p>
        <button class="btn__item" data-section="prendas">Seguir comprando</button>
      </div>
    `;
    carrito.length = 0;
  });
}

// Inicio
renderSection('home');