import Card from '../../components/atoms/Card'
import SectionHeader from '../../components/molecules/SectionHeader'
import StatCard from '../../components/molecules/StatCard'
import UserBanner from '../../components/organisms/UserBanner'
import { formatDate } from '../../utils/date'
import { formatDistance } from '../../utils/distance'
import { MOCK_USER_INFO } from '../../mocks/data'
import './Dashboard.css'

// TEMPORAIRE : lecture directe du mock, en attendant getUserInfo().
const user = MOCK_USER_INFO['user123']

function Dashboard() {
  const { profile, statistics } = user

  const memberSince = formatDate(profile.createdAt)

  return (
    <div className="dashboard">
      <UserBanner
        name={`${profile.firstName} ${profile.lastName}`}
        memberSince={memberSince}
        totalDistance={`${formatDistance(statistics.totalDistance)} km`}
      />

      <section className="dashboard__section">
        <SectionHeader title="Vos dernières performances" />

        <div className="dashboard__charts">
          {/* Emplacements des futurs graphiques */}
          <Card className="dashboard__chart" />
          <Card className="dashboard__chart" />
        </div>
      </section>

      <section className="dashboard__section">
        <SectionHeader title="Cette semaine" subtitle="Du 23/06/2025 au 30/06/2025" />

        <div className="dashboard__week">
          <Card className="dashboard__chart dashboard__chart--goal" />

          <div className="dashboard__week-stats">
            <StatCard label="Durée d'activité" value="—" unit="minutes" tone="primary" />
            <StatCard label="Distance" value="—" unit="kilomètres" tone="accent" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard