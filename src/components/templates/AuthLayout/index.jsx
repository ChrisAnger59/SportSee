import Logo from '../../atoms/Logo'
import './AuthLayout.css'

function AuthLayout({ children, visual }) {
    return (
        <div className='auth-layout'>

            <section className='auth-layout__panel'>
                <div className='auth-layout__brand'>
                    <Logo />
                </div>

                <div className='auth-layout__content'>
                    {children}
                </div>
            </section>

            <section className='auth-layout__visual'>
                {visual}
            </section>
            
        </div>
    )
}

export default AuthLayout