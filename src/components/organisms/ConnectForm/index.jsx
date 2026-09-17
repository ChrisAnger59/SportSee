import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../../services/dataService'
import Button from '../../atoms/Button'
import ErrorMessage from '../../atoms/ErrorMessage'
import TextLink from '../../atoms/TextLink'
import FormField from '../../molecules/FormField'
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
        Vos stats en résultats
      </h1>

      <h2 className="connect-form__title">Se Connecter</h2>

      <form className="connect-form__form" onSubmit={handleSubmit}>

        <div className="connect-form__fields">
          <FormField label="Identifiant" name="username" autoComplete="username" />
          <FormField label="Mot de passe" name="password" type="password" autoComplete="current-password"/>
        </div>

        {error && <ErrorMessage className='connect-form__error'>{error}</ErrorMessage>}

        <Button type="submit" className='connect-form__submit' disabled={isLoading}>
          {isLoading ? "Connexion..." : "Se Connecter"}
        </Button>

      </form>

      <TextLink className="connect-form__forgot" href="#motdepasseoublie">
        Mot de passe oublié ?
      </TextLink>
      
    </div>
  )
}

export default ConnectForm
