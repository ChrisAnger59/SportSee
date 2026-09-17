import Card from '../../atoms/Card'
import './StatCard.css'

function StatCard({ label, value, unit, variant='surface', tone='primary', className=''}) {
    return (
        <Card
        variant={variant}
        className={`stat-card stat-card--${variant} stat-card--tone-${tone} ${className}`.trim() }
        >
            <p className="stat-card__label">{label}</p>
            <p className="stat-card__value">
                {value}
                {unit && <span className="stat-card__unit"> {unit} </span>}
            </p>
        </Card>
    )
}

export default StatCard