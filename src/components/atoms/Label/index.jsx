import './Label.css'

function Label({ className='', children, ...rest}) {
    return (
        <label className={`label ${className}`.trim() } {...rest} >
            {children}
        </label>
    )
}

export default Label