import { items } from "../provider"

export function renderPrendas() {

    return `
        <div id="prendas" class="container__prendas">
            <h1>Bebe</h1>
            <div class="container__items">
                <div class="items">
                    ${items.map(item => `
                        <div class="item">
                            <img src="${item.img}" alt="Imagen no disponible" />
                            <h2>${item.name}</h2>
                            <p>${item.desc}</p>
                            <p>Precio: $${item.price}</p>
                            <button data-section="preventDetail" data-id="${item.id}" class="btn__item">ver detalles</button>
                        </div>
                        `
                    ).join("")}
                </div>
            </div>
            <h6>*Las prendas son unicas, al realizar la compra de un item, el mismo desaparecera automaticamente del catalogo de prendas.</h6>
        </div>
            
    `
}