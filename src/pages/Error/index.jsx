import { Link, useNavigate } from 'react-router-dom'
import { logout } from "../../services/dataService"
import Button from "../../components/atoms/Button"
import './Error.css'

const ERRORS = {
  notFound: {
    code: "404",
    title: "Cette page n'existe pas",
    message: "La page que vous cherchez est introuvable"
  },
  server: {
    code: "500",
    title: "Un problème est survenu",
    message: "Nos serveurs ne répondent pas. Réessayez dans un instant"
  }
}

function Error({ type = 'notFound' }) {

  const navigate = useNavigate()
  const { code, title, message } = ERRORS[type]

  const handleBackToLogin = () => {
    logout()
    navigate("/", { replace: true })
  }

  return (
    <div className="error">
      <p className="error__code">{code}</p>
      <h1 className="error__title">{title}</h1>
      <p className="error__text">{message}</p>
      
      { type === 'server' ? (
        <Button className='error__action' onClick={handleBackToLogin}>
          Retour à la connexion
        </Button>
      ) : (
        <Link to="/dashboard" className='error__action error__link'>
          Retour au dashboard
        </Link>
      )}
    </div>
  )
}

export default Error
