import Card from '../../components/atoms/Card'
import SectionHeader from '../../components/molecules/SectionHeader'
import StatCard from '../../components/molecules/StatCard'
import UserBanner from '../../components/organisms/UserBanner'
import { formatDate } from '../../utils/date'
import { formatDistance } from '../../utils/distance'
import { useUser } from '../../contexts/UserContext/useUser'
import DistanceChart from '../../components/organisms/DistanceChart'
import HeartRateChart from '../../components/organisms/HeartRateChart'
import './Dashboard.css'


function Dashboard() {
  const { profile, statistics } = useUser()

  const memberSince = formatDate(profile.createdAt)

  return (
    <div className="dashboard">
      <UserBanner
        name={`${profile.firstName} ${profile.lastName}`}
        memberSince={memberSince}
        totalDistance={`${formatDistance(statistics.totalDistance)} km`}
        picture={profile.profilePicture}
      />

      <section className="dashboard__section">
        <SectionHeader title="Vos dernières performances" />

        <div className="dashboard__charts">
          <DistanceChart className="dashboard__chart" />
          <HeartRateChart className='dashboard__chart' />
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