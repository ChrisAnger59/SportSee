import './ErrorMessage.css'

function ErrorMessage({ className='', children}) {
    return (
        <p className={`error-message ${className}`.trim()} role='alert'>
            {children}
        </p>
    )
}

export default ErrorMessage