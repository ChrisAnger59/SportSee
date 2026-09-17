import './Logo.css'

/**
 * Logo SPORTSEE.
 *
 * PLACEHOLDER : le symbole (les barres rouges) est dessiné en CSS faute du
 * fichier source. À remplacer par le SVG officiel quand il sera fourni.
 *
 * @param {'full'|'mark'} variant - `mark` n'affiche que le symbole (footer).
 */
function Logo({ variant = 'full' }) {
  return (
    <span className={`logo logo--${variant}`}>
      <span className="logo__mark" role="img" aria-label="Logo Sportsee">
        <i className="logo__bar" />
        <i className="logo__bar" />
        <i className="logo__bar" />
        <i className="logo__bar" />
      </span>
      {variant === 'full' && <span className="logo__wordmark">SPORTSEE</span>}
    </span>
  )
}

export default Logo
