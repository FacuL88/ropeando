import { items } from "../provider"
import img_cerrar from '../static/icons/cerrarventananegro.png'

export function prevenDetail(id) {
    const item = items.find(i => i.id === parseInt(id));

    let currentIndex = 0;

    if (!item) {
        return `<h1>Producto no encontrado</h1>`;
    }

    const sliderImages = (items || [])
    .slice(0, 10) // 👈 Esto limita a máximo 5 imágenes
    .map(item => `
        <div class="container__item_slider">
            <img class="slider__img" src="${item.img}" alt="imagen del producto"/>
            <div class="container__desc">
                <p><span class="span__detail">Nombre:</span> ${item.name}</p>
                <p><span class="span__detail">Descripcion:</span> ${item.desc}</p>
                <p><span class="span__detail">Precio:</span> ${item.price}</p>
                <button data-section="preventDetail" data-id="${item.id}" class="btn__item">ver detalles</button>
                <button class="btn__add" data-section="carrito" data-id="${item.id}">Agregar al carrito</button>                    
                </div>
        </div>
    `)
    .join('');


    return `
        <div class="container__detail">
            <h1>Ropeando</h1>
            <div class='item__detail'> 
                <button class="btn__cerrar" data-section="prendas" >
                    <img data-section="prendas" src=${img_cerrar} alt="la imagen no esta disponible" />
                </button>
                <img class="img__detail" src=${item.img} alt="la imagen no esta disponible" />
                <div class="container__desc">
                    <p><span class="span__detail">Nombre:</span> ${item.name}</p>
                    <p><span class="span__detail">Descripcion:</span> ${item.desc}</p>
                    <p><span class="span__detail">Precio:</span> ${item.price}</p>
                    <button class="btn__add" data-section="carrito" data-id="${item.id}">Agregar al carrito</button>                    
                </div>
            </div>
            <div class="container__slider">
                <h2>Tambien te pueden interesar</h2>
                <div class="slider">
                        <button class="slider__btn prev"> < </button>
                    <div class="slide__slider">
                        ${sliderImages}
                    </div>
                        <button class="slider__btn next"> > </button>
                    </div>
                </div>            
            </div>
        `
}