import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/templates/MainLayout'
import Connexion from '../pages/Connexion'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Error from '../pages/Error'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Connexion />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes