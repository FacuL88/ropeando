export function renderCar(carrito) {
    const total = carrito.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

    if (carrito.length === 0) {
        return `
            <div class="container__carrito">
                <h2>Tu carrito está vacío</h2>
                <button class="btn__item" data-section="prendas">Explorar prendas</button>
            </div>
        `;
    }

    return `
        <div id="carrito" class="container__carrito">
            <h1>Tu Carrito</h1>
            <div class="cart__table-container">
                <table class="cart__table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${carrito.map(item => {
                            const quantity = item.quantity || 1;
                            const subtotal = item.price * quantity;
                            return `
                            <tr>
                                <td>${item.name}</td>
                                <td>${quantity}</td>
                                <td>$${item.price.toLocaleString()}</td>
                                <td>$${subtotal.toLocaleString()}</td>
                            </tr>
                        `}).join("")}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"><strong>Total</strong></td>
                            <td><strong>$${total.toLocaleString()}</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="container__btn__carrito">
                <button class="btn__comprar">Finalizar Compra</button>
                <button class="btn__vaciar">Vaciar</button>
            </div>
        </div>
    `;
}