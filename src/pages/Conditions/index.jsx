import Card from '../../components/atoms/Card'
import SectionHeader from '../../components/molecules/SectionHeader'
import './Conditions.css'

const SECTIONS = [
  {
    title: '1. Objet',
    text: 'SportSee est un tableau de bord qui permet de suivre ses séances de course : distance parcourue, fréquence cardiaque et objectif hebdomadaire. Les présentes conditions encadrent l’utilisation du service.',
  },
  {
    title: '2. Accès au service',
    text: 'L’accès nécessite un compte personnel. L’utilisateur s’engage à garder ses identifiants confidentiels. Une session reste valable 24 heures, après quoi une nouvelle connexion est demandée.',
  },
  {
    title: '3. Données personnelles',
    text: 'SportSee affiche les informations de profil et d’activité associées au compte connecté, sans les modifier. Aucun cookie n’est déposé : le jeton de connexion est conservé dans la session du navigateur et effacé à la fermeture de l’onglet.',
  },
  {
    title: '4. Responsabilité',
    text: 'Les statistiques sont fournies à titre indicatif et ne remplacent pas l’avis d’un professionnel de santé. SportSee ne garantit pas une disponibilité continue du service.',
  },
  {
    title: '5. Propriété intellectuelle',
    text: 'Le nom, le logo et l’interface de SportSee sont protégés. Toute reproduction sans autorisation préalable est interdite.',
  },
  {
    title: '6. Modification des conditions',
    text: 'Ces conditions peuvent évoluer. La version en vigueur est celle affichée sur cette page, avec sa date de mise à jour.',
  },
]

function Conditions() {
  return (
    <div className='conditions'>
      <SectionHeader
        title='Conditions générales'
        subtitle='Dernière mise à jour : octobre 2026'
      />

      <Card className='conditions__card'>
        {SECTIONS.map((section) => (
          <section key={section.title} className='conditions__section'>
            <h3 className='conditions__title'>{section.title}</h3>
            <p className='conditions__text'>{section.text}</p>
          </section>
        ))}
      </Card>
    </div>
  )
}

export default Conditions
