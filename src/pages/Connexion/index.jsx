import ConnectForm from '../../components/ConnectForm'
import Logo from '../../components/Logo'
import './Connexion.css'

function Connexion() {
  return (
    <div className="connexion">
      <section className="connexion__panel">
        <div className="connexion__brand">
          <Logo />
        </div>
        <div className="connexion__form-wrapper">
          <ConnectForm />
        </div>
      </section>

      <section className="connexion__visual">
        {/* PLACEHOLDER : visuel de la maquette (coureurs) non fourni. */}
        <div className="connexion__image-placeholder">
          <span>Visuel d'accueil</span>
        </div>

        <p className="connexion__caption">
          Analysez vos performances en un clin d'œil,
          <br />
          suivez vos progrès et atteignez vos objectifs.
        </p>
      </section>
    </div>
  )
}

export default Connexion
