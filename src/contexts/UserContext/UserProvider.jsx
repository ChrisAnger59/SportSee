import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserInfo, logout } from '../../services/dataService'
import { UserContext } from './UserContext'
import ErrorPage from '../../pages/Error'

function isAuthError(error) {
    return error.status === 401 || error.status === 403
}

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const { pathname } = useLocation()

    useEffect(() => {

        let ignore = false

        async function loadUser() {

            try {
                const data = await getUserInfo()
                if (!ignore) {
                    setUser(data)
                }
            } catch (err) {
                if (isAuthError(err)) {
                    logout()
                }
                if (!ignore) {
                    setError(err)
                }
            } finally {
                if (!ignore) {
                    setIsLoading(false)
                }
            }
        }
        
        loadUser()

        return () => {
            ignore = true
        }

    }, [pathname])

    if (isLoading) {
        return <p>Chargement...</p>
    }

    if (error) {
        if(isAuthError(error)) {
            return <Navigate to="/" replace />
        }
        return <ErrorPage type="server" />
    }

    return (
        <UserContext value={user}>
            {children}
        </UserContext>
    )
}

export default UserProvider