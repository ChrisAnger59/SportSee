import SectionHeader from '../../components/molecules/SectionHeader'
import UserBanner from '../../components/organisms/UserBanner'
import { formatDate, formatNumericDate, getWeekStart, addDays, todayISO } from '../../utils/date'
import { formatDistance } from '../../utils/distance'
import { useUser } from '../../contexts/UserContext/useUser'
import DistanceChart from '../../components/organisms/DistanceChart'
import HeartRateChart from '../../components/organisms/HeartRateChart'
import WeekSummary from '../../components/organisms/WeekSummary'
import './Dashboard.css'


function Dashboard() {
  const { profile, statistics } = useUser()

  const memberSince = formatDate(profile.createdAt)

  const weekStart = getWeekStart(todayISO())
  const weekEnd = addDays(weekStart, 6)
  const weekRange = `Du ${formatNumericDate(weekStart)} au ${formatNumericDate(weekEnd)}`

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
        <SectionHeader title="Cette semaine" subtitle={weekRange} />

        <WeekSummary className='dashboard__week' />
      </section>
    </div>
  )
}

export default Dashboard