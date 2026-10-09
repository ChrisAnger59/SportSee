import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
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

    useEffect(() => {

        async function loadUser() {

            try {
                const data = await getUserInfo()
                setUser(data)
            } catch (err) {
                if (isAuthError(err)) {
                    logout()
                }
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        
        loadUser()
    }, [])

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