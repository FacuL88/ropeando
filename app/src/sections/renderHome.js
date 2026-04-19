import img_home from '../static/ropeando.jpeg'
import icon__recycle from '../static/icons/reciclar.png'
import icon__mundo from '../static/icons/mundo.png'

export function renderHome() { 
    return `
        <section id="home" class="container__home">
            <div class="hero__image-wrapper">
                <img src="${img_home}" alt="Ropeando Home" class="img__home">            
            </div>
            
            <article class="container__introduccion">
                <div class="hero__title">
                    <span class="spanLeft">Nuestra</span>
                    <span class="spanRight">misión</span>
                </div>
                
                <p class="parrafo">
                    En <strong>Ropeando</strong>, reinventamos la moda desde la <span>sostenibilidad</span> 
                    <img class="icon__inline" src="${icon__recycle}" alt="Reciclar"/>. 
                    Impulsamos un consumo consciente y responsable para cuidar nuestro 
                    <img class="icon__inline" src="${icon__mundo}" alt="Mundo"/>. 
                    <br><br>
                    Ofrecemos prendas únicas que cuentan una historia, reduciendo el desperdicio textil. 
                    Creemos en una moda circular, <strong>ética</strong> y accesible.
                </p>
                
                <button class="btn__primary" data-section="prendas">Explorar Colección</button>
            </article>
        </section>
    `;
}