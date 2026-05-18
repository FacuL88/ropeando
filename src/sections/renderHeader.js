import car from '../static/icons/carrito.png';

export function renderHeader(cartCount = 0) {
    const badgeHtml = cartCount > 0 
        ? `<span class="cart__badge">${cartCount}</span>` 
        : '';
    
    return `
        <div class="header__logo" data-section="home">
            ROPEANDO
        </div>
        <ul class="ul">
            <li class="nav__link" data-section="home">Inicio</li>
            <li class="nav__link" data-section="prendas">Catálogo</li>
            <li class="nav__link" data-section="contacto">Contacto</li>
            <li class="nav__cart-container" data-section="carrito">
                <img class="img__car" data-section="carrito" src="${car}" alt="Carrito" />
                ${badgeHtml}
            </li>
        </ul>
    `;
}