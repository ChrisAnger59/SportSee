import './UserBanner.css'

/**
 * Bandeau d'en-tête du dashboard : identité de l'utilisateur à gauche,
 * distance totale mise en avant à droite.
 */
function UserBanner({ name, memberSince, totalDistance }) {
  return (
    <section className="user-banner">
      <div className="user-banner__identity">
        {/* PLACEHOLDER : photo de profil non disponible. */}
        <div className="user-banner__avatar" role="img" aria-label={name}>
          <span>Photo</span>
        </div>
        <div>
          <h1 className="user-banner__name">{name}</h1>
          <p className="user-banner__since">Membre depuis le {memberSince}</p>
        </div>
      </div>

      <div className="user-banner__distance">
        <p className="user-banner__distance-label">Distance totale parcourue</p>
        <p className="user-banner__distance-value">
          {/* PLACEHOLDER : pictogramme non fourni. */}
          <span className="user-banner__icon" aria-hidden="true" />
          {totalDistance}
        </p>
      </div>
    </section>
  )
}

export default UserBanner
