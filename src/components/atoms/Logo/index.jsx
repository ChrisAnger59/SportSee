import { useId } from 'react'
import './Logo.css'

const BLUE_BARS = [
  { x: 0, y: 11, height: 8 },
  { x: 4, y: 5.65625, height: 15 },
  { x: 8, y: 11.3281, height: 5 },
  { x: 12, y: 11, height: 9 },
  { x: 16, y: 11.3281, height: 6 },
]

const RED_BARS = [
  { x: 0, y: 3.3281, height: 11 },
  { x: 4, y: 0, height: 14 },
  { x: 8, y: 2, height: 12 },
  { x: 12, y: 5, height: 9 },
  { x: 16, y: 0, height: 14 },
]

/**
 * Logo SPORTSEE.
 *
 * Les barres bleues sont dessinées en premier, les rouges par-dessus :
 * au chargement, les rouges remontent et révèlent le bleu (voir Logo.css).
 *
 * @param {'full'|'mark'} variant - `mark` n'affiche que le symbole (footer).
 */
function Logo({ variant = 'full' }) {
  const id = useId()
  const blueGradient = `${id}-blue`
  const redGradient = `${id}-red`

  return (
    <span className={`logo logo--${variant}`}>
      <svg className="logo__mark" viewBox="0 0 19 21" role="img" aria-label="Logo Sportsee">
        <defs>
          <linearGradient id={blueGradient} x1="0" y1="0" x2="0" y2="1">
            <stop className="logo__stop--blue-top" />
            <stop offset="1" className="logo__stop--blue-bottom" />
          </linearGradient>
          <linearGradient id={redGradient} x1="0" y1="0" x2="0" y2="1">
            <stop className="logo__stop--red-top" />
            <stop offset="1" className="logo__stop--red-bottom" />
          </linearGradient>
        </defs>

        <g>
          {BLUE_BARS.map((bar) => (
            <rect
              key={bar.x}
              className="logo__bar logo__bar--blue"
              x={bar.x}
              y={bar.y}
              width="3"
              height={bar.height}
              rx="1.5"
              fill={`url(#${blueGradient})`}
            />
          ))}
        </g>

        <g>
          {RED_BARS.map((bar) => (
            <rect
              key={bar.x}
              className="logo__bar logo__bar--red"
              x={bar.x}
              y={bar.y}
              width="3"
              height={bar.height}
              rx="1.5"
              fill={`url(#${redGradient})`}
            />
          ))}
        </g>
      </svg>
      {variant === 'full' && <span className="logo__wordmark">SPORTSEE</span>}
    </span>
  )
}

export default Logo