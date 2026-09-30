import { useEffect, useState } from 'react'
import SectionHeader from '../../components/molecules/SectionHeader'
import StatCard from '../../components/molecules/StatCard'
import ProfileCard from '../../components/organisms/ProfileCard'
import ProfileDetails from '../../components/organisms/ProfileDetails'
import { formatDate, countDays, todayISO } from '../../utils/date'
import { formatDuration } from '../../utils/duration'
import { formatDistance } from '../../utils/distance'
import { useUser } from '../../contexts/UserContext/useUser'
import { getUserActivity } from '../../services/dataService'
import './Profile.css'
import ErrorMessage from '../../components/atoms/ErrorMessage'

function Profile() {
  const { profile, statistics } = useUser()
  const [sessions, setSessions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const startDate = profile.createdAt
  const endDate = todayISO()

  useEffect(() => {
    async function loadActivity() {
      try {
        const data = await getUserActivity(startDate, endDate)
        setSessions(data)
      } catch(err) {
        setError(err)
      }finally{
        setIsLoading(false)
      }
    }

    loadActivity()
  }, [startDate, endDate])

  if (isLoading) {
    return (<p>Chargement de votre activité</p>)
  }

  if (error) {
    return (<ErrorMessage>Impossible de charger votre activité</ErrorMessage>)
  }

  console.log(error)

  const totalCalories = sessions.reduce((sum, session) => sum + session.caloriesBurned, 0)

  const allDates = sessions.map((session) => session.date)
  const uniqueDates = new Set(allDates)
  const activeDays = uniqueDates.size
  const restDays = countDays(startDate, endDate) - activeDays

  const details = [
    { label: 'Âge', value: profile.age },
    { label: 'Taille', value: `${profile.height} cm` },
    { label: 'Poids', value: `${profile.weight} kg` },
  ]

  const stats = [
    { label: 'Temps total couru', ...formatDuration(statistics.totalDuration) },
    { label: 'Calories brûlées', value: totalCalories, unit: 'cal' },
    { label: 'Distance totale parcourue', value: formatDistance(statistics.totalDistance), unit: 'km' },
    { label: 'Nombre de jours de repos', value: restDays, unit: 'jours' },
    { label: 'Nombre de sessions', value: statistics.totalSessions, unit: 'sessions' },
  ]

  const memberSince = formatDate(profile.createdAt)

  return (
    <div className="profile">
      <div className="profile__identity">
        <ProfileCard
          name={`${profile.firstName} ${profile.lastName}`}
          memberSince={memberSince}
          picture={profile.profilePicture}
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