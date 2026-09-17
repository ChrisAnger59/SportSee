import './SectionHeader.css'

function SectionHeader({ title, subtitle, className=''}) {
    return (
        <header className={`section-header ${className}`.trim()}>
            <h2 className='section-header__title'>{title}</h2>
            {subtitle && <p className='section-header__subtitle'>{subtitle}</p>}
        </header>
    )
}

export default SectionHeader