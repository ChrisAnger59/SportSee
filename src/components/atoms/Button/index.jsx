import './Button.css'

function Button({ type='button', variant='primary', className='', children, ...rest }) {
    return (
        <button
        type={type}
        className={`button button--${variant} ${className}`.trim() }
        {...rest}
        >
            {children}
        </button>
    )
}

export default Button