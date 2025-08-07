import { items } from "../provider"
import img_cerrar from '../static/icons/cerrarventananegro.png'

export function prevenDetail(id) {
    const item = items.find(i => i.id === parseInt(id));

    if (!item) {
        return `<h1>Producto no encontrado</h1>`;
    }

    const sliderImages = (items || [])
    .slice(0, 10) // 👈 Esto limita a máximo 5 imágenes
    .map(item => `
        <img class="slider__img" src="${item.img}" alt="imagen del producto"/>
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
            <h2>Tambien te pueden interesar</h2>
            <div class="slider">
                <div class="slider__wrapper">
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