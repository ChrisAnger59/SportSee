import StatCard from '../../components/molecules/StatCard'
import './Profile.css'

// Contenu figé repris des maquettes : il sera remplacé par le service
// de données à l'étape suivante du projet.
const user = {
  name: 'Clara Dupont',
  memberSince: '14 juin 2023',
  details: [
    { label: 'Âge', value: '29' },
    { label: 'Genre', value: 'Femme' },
    { label: 'Taille', value: '1m68' },
    { label: 'Poids', value: '58kg' },
  ],
  stats: [
    { label: 'Temps total couru', value: '27h', unit: '15min' },
    { label: 'Calories brûlées', value: '25000', unit: 'cal' },
    { label: 'Distance totale parcourue', value: '312', unit: 'km' },
    { label: 'Nombre de jours de repos', value: '9', unit: 'jours' },
    { label: 'Nombre de sessions', value: '41', unit: 'sessions' },
  ],
}

function Profile() {
  return (
    <div className="profile">
      <div className="profile__identity">
        <section className="profile__card profile__card--user">
          {/* PLACEHOLDER : photo de profil non disponible. */}
          <div className="profile__avatar" role="img" aria-label={user.name}>
            <span>Photo</span>
          </div>
          <div>
            <h1 className="profile__name">{user.name}</h1>
            <p className="profile__since">Membre depuis le {user.memberSince}</p>
          </div>
        </section>

        <section className="profile__card">
          <h2 className="profile__card-title">Votre profil</h2>
          <ul className="profile__details">
            {user.details.map((detail) => (
              <li key={detail.label} className="profile__detail">
                {detail.label} : {detail.value}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="profile__stats">
        <h2 className="profile__stats-title">Vos statistiques</h2>
        <p className="profile__stats-since">depuis le {user.memberSince}</p>

        <div className="profile__stats-grid">
          {user.stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              unit={stat.unit}
              variant="primary"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Profile
