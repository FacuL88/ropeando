import instagram from '../static/icons/instagram.svg'
import email from '../static/icons/envelope.svg'
import whatsapp from '../static/icons/whatsapp.svg'
import time from '../static/icons/icons8-time.svg'

export function renderContacto() {
    
    
    return `
        <div class="container__info__entregas">
            
        </div>

        <div id="contacto" class="container__contacto">
            <h2>INFO Y CONTACTO</h2>
            <ul class="container__li">
                <div class="container__insta">
                    <img src=${instagram} alt="La imagen no esta disponible" />
                    <li>
                        INSTA
                    </li>
                </div>
                <div class="container__whatsapp">
                    <img src=${whatsapp} alt="La imagen no esta disponible" />
                    <li>
                        WHATSAPP
                    </li>                
                </div>
                <div class="container__email">
                    <img src=${email} alt="La imagen no esta disponible" />
                <li>
                    Email
                </li>
                </div>
                <div class="container__clock">
                    <img src=${time} alt="La imagen no esta disponible" />
                    <li>
                        HORARIO
                    </li>                
                </div>
            </ul>       
        </div>
    `
}