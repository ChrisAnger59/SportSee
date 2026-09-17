import Logo from '../../atoms/Logo'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <p>Sportsee tous droits réservés</p>

                <div className='footer__links'>
                    <a className='footer__link' href="#conditions">
                        Conditions générales
                    </a>

                    <a className='footer__link' gref="#contact">
                        Contact
                    </a>

                    <Logo variant="mark" />
                </div>
            </div>
        </footer>
    )
}

export default Footer