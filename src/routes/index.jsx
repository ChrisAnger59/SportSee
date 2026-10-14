import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/templates/MainLayout'
import Connexion from '../pages/Connexion'
import Conditions from '../pages/Conditions'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import ErrorPage from '../pages/Error'
import ProtectedRoute from './ProtectedRoute'
import UserProvider from '../contexts/UserContext/UserProvider'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Connexion />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<UserProvider><MainLayout /></UserProvider>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/conditions" element={<Conditions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes