import './GraphCard.css'

// Composant graph placeholder — le rendu du graphique sera branché plus tard.
function GraphCard({ title, description }) {
  return (
    <div className="graph-card">
      <div className="graph-card-header">
        <h3>{title}</h3>
        {description && <p className="graph-card-description">{description}</p>}
      </div>
      <div className="graph-card-body">
        <span className="graph-card-placeholder">Graphique à venir</span>
      </div>
    </div>
  )
}

export default GraphCard
