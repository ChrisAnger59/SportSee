import AuthLayout from '../../components/templates/AuthLayout'
import ConnectForm from '../../components/organisms/ConnectForm'
import './Connexion.css'

function Connexion() {
  return (
    <AuthLayout 
    visual={
      <>
        <div className='connexion__image-placeholder'>
          <span>Visuel d'accueil</span>
        </div>

        <p className='connexion__caption'>
          Analyser vos performances en un clin d'oeil,
          <br />
          Suivez vos progrès et atteignez vos objectifs.
        </p>
      </>
    }>

      <ConnectForm />

    </AuthLayout>


    

  )
}

export default Connexion
