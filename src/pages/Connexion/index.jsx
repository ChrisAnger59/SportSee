import AuthLayout from '../../components/templates/AuthLayout'
import ConnectForm from '../../components/organisms/ConnectForm'
import loginVisual from '../../assets/background-login.jpg'
import './Connexion.css'

function Connexion() {
  return (
    <AuthLayout 
    visual={
      <>
        <img className='connexion__image' src={loginVisual} alt="" />

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
