import './StatCard.css'

/**
 * Carte de statistique : un libellé, une valeur, une unité.
 *
 * @param {string} label
 * @param {string} value
 * @param {string} unit
 * @param {'light'|'primary'} variant - `primary` = carte bleue pleine (profil).
 * @param {'primary'|'accent'} tone   - Couleur de la valeur en variante claire.
 */
function StatCard({ label, value, unit, variant = 'light', tone = 'primary' }) {
  return (
    <article className={`stat-card stat-card--${variant}`}>
      <p className="stat-card__label">{label}</p>
      <p className={`stat-card__value stat-card__value--${tone}`}>
        {value}
        {unit && <span className="stat-card__unit"> {unit}</span>}
      </p>
    </article>
  )
}

export default StatCard
