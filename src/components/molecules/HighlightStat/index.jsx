import './HighlightStat.css'

function HighlightStat({ label, value, className=''}) {
    return (
        <div className={`highlight-stat ${className}`.trim() }>
            <p className='highlight-stat__label'>{label}</p>
            <p className='highlight-stat__value'>
                <span className='highlight-stat__icon' aria-hidden='true' />
                {value}
            </p>
        </div>
    )
}

export default HighlightStat