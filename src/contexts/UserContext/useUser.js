import { useContext } from 'react'
import { UserContext } from './UserContext'

export function useUser() {
    const context = useContext(UserContext)

    if (context === null) {
        throw new Error("useUser doit être utilisé à l'intérieur de <UserProvider>")
    }

    return context
}