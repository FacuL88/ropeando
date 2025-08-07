export function renderCar(carrito) {
    const totalCarrito = carrito.reduce((acc, item) => acc + item.price, 0);

  return `
  <div id="carrito" class="container__carrito">
    <h1>Carrito de Compras</h1>
    <table>
        <thead class="thead">
        <tr class="tr">
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        ${carrito.map((item, index) => `
            <tr class="tbody__tr">
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>$${item.price}</td>
            <td>${item.price}</td>
            </tr>
        `).join("")}
        </tbody>
            <tfoot class="tfoot">
                <tr>
                    <td colspan="4"><strong>Total del carrito:</strong></td>
                    <td><strong>$${totalCarrito}</strong></td>
                </tr>
            </tfoot>
    </table>
    <div class="container__btn__carrito">
        <button class="btn__comprar">comprar</button>
        <button class="btn__add__prod" data-section="prendas">Ver mas</button>
        <button class="btn__vaciar">Vaciar carrito</button>
    </div>
  </div>
  `
}