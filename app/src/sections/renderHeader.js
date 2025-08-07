import car from '../static/icons/carrito.png'

export function renderHeader() {
    return `
        <ul class="ul">
            <li data-section="home">Home</li>
            <li data-section="prendas">Prendas</li>
            <li data-section="contacto">Contacto</li>
            <img class="img__car" data-section="carrito" src=${car} alt="la imagen no esta diponible" />
        </ul>
    `;
}