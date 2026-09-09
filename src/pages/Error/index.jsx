import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div className="error">
      <p className="error__code">404</p>
      <h1 className="error__title">Oups, cette page n'existe pas</h1>
      <p className="error__text">La page que vous cherchez semble introuvable.</p>
      <Link to="/dashboard" className="error__link">
        Retour au dashboard
      </Link>
    </div>
  )
}

export default Error
