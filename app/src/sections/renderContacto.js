import instagram from '../static/icons/instagram.svg'
import email from '../static/icons/envelope.svg'
import whatsapp from '../static/icons/whatsapp.svg'
import time from '../static/icons/icons8-time.svg'

export function renderContacto() {
    return `
        <div class="container__contacto">
            <header class="contacto__header">
                <h1>Contacto</h1>
                <p>Estamos aquí para ayudarte con tu selección de ropa sostenible</p>
            </header>
            
            <div class="contacto__grid">
                <div class="contacto__card">
                    <div class="contacto__icon">
                        <img src=${instagram} alt="Instagram" />
                    </div>
                    <div class="contacto__info">
                        <h3>Instagram</h3>
                        <p>@ropeando</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">Seguirnos</a>
                    </div>
                </div>
                
                <div class="contacto__card">
                    <div class="contacto__icon">
                        <img src=${whatsapp} alt="WhatsApp" />
                    </div>
                    <div class="contacto__info">
                        <h3>WhatsApp</h3>
                        <p>+54 9 11 1234-5678</p>
                        <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">Escribir</a>
                    </div>
                </div>
                
                <div class="contacto__card">
                    <div class="contacto__icon">
                        <img src=${email} alt="Email" />
                    </div>
                    <div class="contacto__info">
                        <h3>Email</h3>
                        <p>hola@ropeando.com</p>
                        <a href="mailto:hola@ropeando.com">Enviar correo</a>
                    </div>
                </div>
                
                <div class="contacto__card">
                    <div class="contacto__icon">
                        <img src=${time} alt="Horario" />
                    </div>
                    <div class="contacto__info">
                        <h3>Horario</h3>
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                        <p>Sábados: 10:00 - 14:00</p>
                    </div>
                </div>
            </div>
            
            <div class="contacto__mensaje">
                <h2>Envíanos un mensaje</h2>
                <p>¿Tienes preguntas sobre nuestras prendas o necesitas ayuda con tu pedido? No dudes en contactarnos.</p>
            </div>
        </div>
    `
}