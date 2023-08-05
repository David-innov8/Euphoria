// import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Auth from '../Auth/useAuth'

function ProtectedRoute() {

    const user = Auth()

return(
    user ? <Outlet/> : <Navigate to="/"/>
)
}

export default ProtectedRoute
