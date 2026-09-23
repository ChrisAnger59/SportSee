import SectionHeader from '../../components/molecules/SectionHeader'
import StatCard from '../../components/molecules/StatCard'
import ProfileCard from '../../components/organisms/ProfileCard'
import ProfileDetails from '../../components/organisms/ProfileDetails'
import { formatDate } from '../../utils/date'
import { formatDuration } from '../../utils/duration'
import { MOCK_USER_INFO } from '../../mocks/data'
import './Profile.css'

// TEMPORAIRE : lecture directe du mock, en attendant getUserInfo().
const user = MOCK_USER_INFO['user123']

function Profile() {
  const { profile, statistics } = user

  // Construits dans le composant : quand `user` viendra d'un state,
  // ces tableaux devront être recalculés à chaque affichage.
  const details = [
    { label: 'Âge', value: profile.age },
    { label: 'Taille', value: `${profile.height} cm` },
    { label: 'Poids', value: `${profile.weight} kg` },
  ]

  const stats = [
    { label: 'Temps total couru', ...formatDuration(statistics.totalDuration) },
    { label: 'Calories brûlées', value: '—', unit: 'cal' },
    { label: 'Distance totale parcourue', value: statistics.totalDistance, unit: 'km' },
    { label: 'Nombre de jours de repos', value: '—', unit: 'jours' },
    { label: 'Nombre de sessions', value: statistics.totalSessions, unit: 'sessions' },
  ]

  const memberSince = formatDate(profile.createdAt)

  return (
    <div className="profile">
      <div className="profile__identity">
        <ProfileCard
          name={`${profile.firstName} ${profile.lastName}`}
          memberSince={memberSince}
        />
        <ProfileDetails details={details} />
      </div>

      <section className="profile__stats">
        <SectionHeader title="Vos statistiques" subtitle={`depuis le ${memberSince}`} />

        <div className="profile__stats-grid">
          {stats.map((stat) => (
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