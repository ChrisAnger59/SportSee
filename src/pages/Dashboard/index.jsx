import UserBanner from '../../components/UserBanner'
import GraphCard from '../../components/GraphCard'
import StatCard from '../../components/StatCard'
import { MOCK_USER_INFO } from '../../mocks/data'
import './Dashboard.css'

const user = MOCK_USER_INFO['user123']


function Dashboard() {
  return (
    <div className="dashboard">
      <UserBanner
        name={user.profile.firstName}
        memberSince={user.profile.createdAt}
        totalDistance={user.statistics.totalDistance}
      />

      <section className="dashboard__section">
        <h2 className="dashboard__section-title">Vos dernières performances</h2>

        <div className="dashboard__charts">
          <GraphCard
            title="18km en moyenne"
            tone="primary"
            subtitle="Total des kilomètres 4 dernières semaines"
            dateRange="28 mai - 25 juin"
            legend={[{ label: 'Km', color: 'var(--color-primary-soft)' }]}
          />

          <GraphCard
            title="163 BPM"
            tone="accent"
            subtitle="Fréquence cardiaque moyenne"
            dateRange="28 mai - 04 juin"
            legend={[
              { label: 'Min', color: 'var(--color-accent-soft)' },
              { label: 'Max BPM', color: 'var(--color-accent)' },
              { label: 'Max BPM', color: 'var(--color-primary)' },
            ]}
          />
        </div>
      </section>

      <section className="dashboard__section">
        <h2 className="dashboard__section-title">Cette semaine</h2>
        <p className="dashboard__section-subtitle">Du 23/06/2025 au 30/06/2025</p>

        <div className="dashboard__week">
          <GraphCard
            title={
              <>
                x4 <span className="dashboard__goal-target">sur objectif de 6</span>
              </>
            }
            tone="primary"
            subtitle="Courses hebdomadaire réalisées"
            legend={[
              { label: '4 réalisées', color: 'var(--color-primary)' },
              { label: '2 restants', color: 'var(--color-primary-soft)' },
            ]}
          >
            {/* PLACEHOLDER : graphique en anneau à venir. */}
            <div className="dashboard__donut">
              <span>Objectif</span>
            </div>
          </GraphCard>

          <div className="dashboard__week-stats">
            <StatCard label="Durée d'activité" value="140" unit="minutes" tone="primary" />
            <StatCard label="Distance" value="21.7" unit="kilomètres" tone="accent" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
