import { useNavigate } from 'react-router-dom'
import './ConnectForm.css'

function ConnectForm() {
  const navigate = useNavigate()

  // L'authentification réelle sera branchée sur le service de données.
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
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
          <label className="connect-form__label" htmlFor="email">
            Adresse email
          </label>
          <input
            className="connect-form__input"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
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

        <button className="connect-form__submit" type="submit">
          Se connecter
        </button>
      </form>

      <a className="connect-form__forgot" href="#mot-de-passe-oublie">
        Mot de passe oublié ?
      </a>
    </div>
  )
}

export default ConnectForm
