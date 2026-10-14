import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <p>Sportsee tous droits réservés</p>

                <div className='footer__links'>
                    <Link className='footer__link' to='/conditions'>
                        Conditions générales
                    </Link>

                    <Link className='footer__link' to='/contact'>
                        Contact
                    </Link>

                    <Logo variant="mark" />
                </div>
            </div>
        </footer>
    )
}

export default Footer