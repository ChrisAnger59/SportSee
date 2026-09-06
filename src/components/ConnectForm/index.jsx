import { NavLink } from 'react-router-dom'
import './ConnectForm.css'

function ConnectForm() {
  return (
    <div>
        <h2>Transformez vos stats en résultats</h2>
        <h3>Se connecter</h3>
        <form>
            <label for="email">Adresse email</label>
            <input type="email" id="email" name="email" /><br />

            <label for="pwd">Mot de passe</label>
            <input type="password" id="pwd" name="pwd" /><br />

            <NavLink to="/dashboard" className="nav-link">
            Se connecter
            </NavLink>

            <a>Mot de passe oublié ?</a>
        </form>
    </div>
  )
}

export default ConnectForm
