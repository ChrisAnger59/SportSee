import './Card.css'

function Card({ variant = 'surface', className='', children, ...rest }) {
    return (
        <div className={`card card--${variant} ${className}`.trim() } {...rest}>
            {children}
        </div>
    )
}

export default Card