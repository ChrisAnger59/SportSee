import { NavLink } from 'react-router-dom'
import './Navitem.css'

function NavItem({ className='', children, ...rest}) {
    return (
        <NavLink className={`nav-item ${className}`.trim() } {...rest}>
            {children}
        </NavLink>
    )
}

export default NavItem