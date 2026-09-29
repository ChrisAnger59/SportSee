import acheivement from '../../../assets/acheivement.png' 
import './HighlightStat.css'

function HighlightStat({ label, value, className=''}) {
    return (
        <div className={`highlight-stat ${className}`.trim() }>
            <p className='highlight-stat__label'>{label}</p>
            <p className='highlight-stat__value'>
                <img className='highlight-stat__icon' src={acheivement} />
                {value}
            </p>
        </div>
    )
}

export default HighlightStat