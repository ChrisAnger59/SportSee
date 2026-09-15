import './GraphCard.css'

function GraphCard({ title, tone = 'primary', subtitle, dateRange, legend, children }) {
  return (
    <article className="graph-card">
      <header className="graph-card__header">
        <h3 className={`graph-card__title graph-card__title--${tone}`}>{title}</h3>

        {dateRange && (
          <div className="graph-card__range">
            <button type="button" className="graph-card__arrow" aria-label="Période précédente">
              ‹
            </button>
            <span className="graph-card__range-label">{dateRange}</span>
            <button type="button" className="graph-card__arrow" aria-label="Période suivante">
              ›
            </button>
          </div>
        )}
      </header>

      {subtitle && <p className="graph-card__subtitle">{subtitle}</p>}

      <div className="graph-card__body">
        {/* PLACEHOLDER : la librairie de graphiques sera branchée plus tard. */}
        {children ?? <span className="graph-card__placeholder">Graphique à venir</span>}
      </div>

      {legend && (
        <ul className="graph-card__legend">
          {/* La maquette répète le libellé « Max BPM » : la clé inclut l'index. */}
          {legend.map((item, index) => (
            <li key={`${item.label}-${index}`} className="graph-card__legend-item">
              <span
                className="graph-card__legend-dot"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default GraphCard
