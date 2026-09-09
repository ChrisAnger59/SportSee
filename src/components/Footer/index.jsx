import Logo from '../Logo'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">©Sportsee Tous droits réservés</p>

        <div className="footer__links">
          <a href="#conditions">Conditions générales</a>
          <a href="#contact">Contact</a>
          <Logo variant="mark" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
