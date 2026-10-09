import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../services/dataService'

function ProtectedRoute() {
  useLocation()

  if (!isAuthenticated()) {
    return (
      <Navigate to="/" replace />
    )
  }


  return (
    <Outlet />
  )
}

export default ProtectedRoute