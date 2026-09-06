import GraphCard from '../../components/GraphCard'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Dashboard 📊</h1>
        <p>Vue d'ensemble de votre activité SPORTSEE.</p>
      </section>

      <section className="dashboard-grid">
        <GraphCard
          title="Premier graphique"
          description="Évolution des indicateurs sur la période."
        />
        <GraphCard
          title="Deuxième graphique"
          description="Répartition par catégorie."
        />
      </section>
    </div>
  )
}

export default Dashboard
