import './footer.css'

export function Footer() {

    return (
        <footer className="footer">

            <h3>HOMING - INMOBILIARIA</h3>

            <div className="redes">
                <a href='#' className="red insta">
                    <img src="./svg/redes/facebook.svg" alt="Facebook" />
                    <p>Facebook</p>
                </a>
                <a href='#' className="red fb">
                    <img src="./svg/redes/instagram.svg" alt="Instagram" />
                    <p>Instagram</p>
                </a>
                <a href='#' className="red wsp">
                    <img src="./svg/redes/whatsapp.svg" alt="WhatsApp" />
                    <p>WhatsApp</p>
                </a>
            </div>

        </footer>
    )
}