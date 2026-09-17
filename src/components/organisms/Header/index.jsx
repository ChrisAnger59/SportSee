import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../services/dataService'
import Button from '../../atoms/Button'
import Logo from '../../atoms/NavItem'
import './Header.css'
import NavItem from '../../atoms/NavItem'

function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <header className='header'>
            <div className="header__inner">
                <Link to='/dashboard' className="header__logo">
                    <Logo />
                </Link>

                <nav className="header__nav" aria-label="Navigation principale">
                    <NavItem to='/dashboard' end>
                        Dashboard
                    </NavItem>

                    <NavItem to='/profile'>
                        Mon Profil
                    </NavItem>

                    <span className='header__separator' aria-hidden='true' />

                    <Button variant='text' onClick={handleLogout}>
                        Se déconnecter
                    </Button>
                </nav>
            </div>
        </header>
    )
}

export default Header