import { items } from "../provider"

export function renderPrendas() {
    return `
        <div id="prendas" class="container__prendas">
            <header class="section__header">
                <h1>Colección Bebé</h1>
                <p>Piezas únicas con historia</p>
            </header>
            <div class="items">
                ${items.map(item => `
                    <article class="item">
                        <div class="item__img-container">
                            <img src="${item.img}" alt="${item.name}" loading="lazy" />
                        </div>
                        <div class="item__info">
                            <h3>${item.name}</h3>
                            <span class="item__price">$${item.price.toLocaleString()}</span>
                            <button data-section="preventDetail" data-id="${item.id}" class="btn__item">Ver detalles</button>
                        </div>
                    </article>
                `).join("")}
            </div>
        </div>
    `;
}