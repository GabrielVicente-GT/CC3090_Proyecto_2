import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserAuth } from './auth/UserAuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth()
  return (user ? children : <Navigate to="/" />)
}

export default ProtectedRoute
