import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/dashboard" className="header__logo">
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink to="/dashboard" end className="header__link">
            Dashboard
          </NavLink>
          <NavLink to="/profile" className="header__link">
            Mon profil
          </NavLink>
          <span className="header__separator" aria-hidden="true" />
          {/* La déconnexion sera branchée sur le service de données. */}
          <Link to="/" className="header__link header__link--logout">
            Se déconnecter
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
