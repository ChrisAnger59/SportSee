import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo" role="img" aria-label="Logo Sportsee">
          <span className="header-logo-placeholder">LOGO</span>
          <span className="header-logo-text">SPORTSEE</span>
        </div>

        <nav className="nav">
          <NavLink to="/dashboard" end className="nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Mon Profil
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
