import './TextLink.css'

function TextLink({ className='', children, ...rest}) {
    return (
        <a className={`text-link ${className}`.trim()} {...rest}>
            {children}
        </a>
    )
}

export default TextLink