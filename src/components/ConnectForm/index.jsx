import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/dataService'
import './ConnectForm.css'

function getErrorMessage(error) {
  switch (error.status) {
    case 400:
      return 'Veuillez remplir les deux champs'
    case 401: 
      return 'Identifiant ou mot de passe incorrect'
    case undefined:
      return 'Serveur injoignable, réessayez plus tard'
    default:
      return 'Une erreur est survenue'
  }
}

function ConnectForm() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      await login(username, password)
      navigate('/dashboard')
    } catch (err) {
      setError(getErrorMessage(err))
      setIsLoading(false)
    }
  }

  return (
    <div className="connect-form">
      <h1 className="connect-form__headline">
        Transformez
        <br />
        vos stats en résultats
      </h1>

      <h2 className="connect-form__title">Se connecter</h2>

      <form className="connect-form__form" onSubmit={handleSubmit}>
        <div className="connect-form__field">
          <label className="connect-form__label" htmlFor="username">
            Identifiant
          </label>
          <input
            className="connect-form__input"
            type="text"
            id="username"
            name="username"
            autoComplete="username"
          />
        </div>

        <div className="connect-form__field">
          <label className="connect-form__label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="connect-form__input"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
          />
        </div>

        {error && (
          <p className="connect-form__error" role="alert">
            {error}
          </p>
        )}

        <button className="connect-form__submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>

      <a className="connect-form__forgot" href="#mot-de-passe-oublie">
        Mot de passe oublié ?
      </a>
    </div>
  )
}

export default ConnectForm
