import { useEffect, useState } from 'react'
import { getUserInfo } from '../../services/dataService'
import ErrorMessage from '../../components/atoms/ErrorMessage'
import { UserContext } from './UserContext'

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
        return <ErrorMessage>Impossible de charger vos données</ErrorMessage>
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider