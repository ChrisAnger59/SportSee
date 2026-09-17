import './Input.css'

function Input({ type='text', className='', ...rest}) {
    return (
        <input type={type}
        className={`input ${className}`.trim()} {...rest} />
    )
}

export default Input