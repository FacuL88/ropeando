import img_home from '../static/ropeando.jpeg'
import icon__recycle from '../static/icons/reciclar.png'
import icon__mundo from '../static/icons/mundo.png'

export function renderHome() { 

    return `
        <div id="home" class="container__home">
            <div class="container__img__home">
                <img src=${img_home} alt='#' class="img__home" >            
            </div>
            <div class="container__introduccion">
                <div class="container__tituloAnimado">
                    <div class="col col__left">
                        <span class="spanLeft">Nuestra</span>
                    </div>
                    <div class="col col__right">
                        <span class="spanRight"> mision</span>
                    </div>
                </div>
                <p class="parrafo">
                    En Ropeando, nuestra mision es reinventar la moda desde la sostentabilidad <span><img class="icon__reciclar" src=${icon__recycle} alt="La imagen no esta diponible"/> </span>. Impulsando un consumo consciente y responsable <span><img class="icon__reciclar" src=${icon__mundo} alt="La imagen no esta diponible"/> </span>. Ofrecemos prendas unicas que cuentan una historia, reduciendo el desperdicio textil y dandoles nueva vida.
                    Creemos que la moda puede ser circular, elica y accesible.
                    Estamos comprometidos a marcar la diferencia prenda por prenda.
                </p>
                <button class='btn__home' data-section="prendas">ver prendas</button>
            </div>
        </div>
    `
}; 
